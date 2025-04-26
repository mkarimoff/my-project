import { useAuth } from "../context/authContext";
import { SignUpInLink } from "../register/style";
import { P, SignInCon } from "./style";
import { useState } from "react";
import { toast } from "react-toastify"; 
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Signin = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    if (!email || !password) {
      setError("All fields are required.");
      toast.error("All fields are required.");
      setIsLoading(false);
      return;
    }

    try {
      await login(email, password);
      toast.success("Login successful!");
    } catch (error: any) {
      const errorMessage = error.message || "Login failed. Please try again.";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SignInCon>
      <h1>WELCOME PLEASE SIGN IN!</h1>
      <div className="radio-wrap">
        <SignUpInLink to={"/Signin"} style={{ color: "#5f9999" }}>
          Sign In
        </SignUpInLink>
        <SignUpInLink to={"/register"}>Create Account</SignUpInLink>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <div style={{ position: "relative", width: "100%" }}>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ paddingRight: "40px", width: "100%", boxSizing: "border-box" }}
          />
          <span
            onClick={togglePasswordVisibility}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              color: "#5f9999",
            }}
          >
            {showPassword ?  <Visibility /> : <VisibilityOff />}
          </span>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Signing In..." : "Sign In"}
        </button>
      </form>
      <div
        style={{ width: "406px", height: "1px", backgroundColor: "#8B837D" }}
      ></div>
      <div className="link-page">
        <P to={"/privacy-policy"}>Privacy Policy and Cookies</P> |{" "}
        <P to={"/terms-of-use"}>Terms of Sale & Use</P>
      </div>
    </SignInCon>
  );
};

export default Signin;