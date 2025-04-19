// components/signin/authContext.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize authentication state
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
  }, []);

  // Redirect authenticated users from /Signin only
  useEffect(() => {
    if (isAuthenticated && location.pathname === "/") {
      const from = location.state?.from || "/home";
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, location, navigate]);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(
        "http://localhost:5050/dev-api/auth/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data.message === "Login successful") {
        localStorage.setItem("authToken", response.data.token);
        setIsAuthenticated(true);
        const from = location.state?.from || "/home";
        navigate(from, { replace: true });
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (error: any) {
      throw new Error(error.response?.data?.error || "Login failed");
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};