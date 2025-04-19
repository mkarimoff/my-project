import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

interface AuthContextType {
  isAuthenticated: boolean;
  user: { email: string; firstName: string; lastName: string } | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<{ email: string; firstName: string; lastName: string } | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const storedUser = localStorage.getItem("user");

    if (token && storedUser) {
      setIsAuthenticated(true);
      setUser(JSON.parse(storedUser)); 
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated && location.pathname === "/login") {
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

        // Save user details to localStorage
        const userData = response.data.user; // assuming the user object is in response.data.user
        localStorage.setItem("user", JSON.stringify(userData));

        setIsAuthenticated(true);
        setUser(userData);

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
    try {
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");

      setIsAuthenticated(false);
      setUser(null); 

      navigate("/login");
    } catch (error: any) {
      console.error("Error during logout", error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
