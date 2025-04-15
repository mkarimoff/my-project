import { useNavigate } from "react-router-dom";
import { SignUpInLink } from "../register/style";
import { P, SignInCon } from "./style";
import axios from "axios";
import { useState } from "react";

const Signin = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
  
    if (!email || !password) {
      setError("All fields are required.");
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:5050/dev-api/auth/login", {
        email,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
  
      if (response.data.message === "Login successful") {
        const token = response.data.token;
        localStorage.setItem("authToken", token);
        navigate("/home");
      } else {
        setError("Invalid email or password.");
      }
    } catch (error: any) {
      console.error("Login failed:", error.response ? error.response.data : error);
      setError(error.response?.data?.error || "Login failed. Please try again.");
    }
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
        <label htmlFor="">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Sign In</button>
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
