import { useState } from "react";
import { P, SignUpCon, SignUpInLink } from "./style";

const Signup = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match!");
    } else {
      setPasswordError("");
    }
  };

  return (
    <SignUpCon>
      <h1>
        WELCOME <br /> PLEASE REGISTER
      </h1>
      <div className="radio-wrap">
        <SignUpInLink to={"/Signin"}>Sign In</SignUpInLink>
        <SignUpInLink to={"/Signup"} style={{ color: "#5f9999" }}>
          Create Account
        </SignUpInLink>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">First Name</label>
        <input type="text" required />
        <label htmlFor="">Last Name</label>
        <input type="text" required />
        <label htmlFor="">Email</label>
        <input type="email" required />
        <label htmlFor="">Create Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="">Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}{" "}
        {/* Error message */}
        <label htmlFor="">Address</label>
        <input type="text" required />
        <label htmlFor="">Zip Code</label>
        <input type="text" required />
        <button type="submit">Create Account</button>
      </form>
      <div
        style={{ width: "406px", height: "1px", backgroundColor: "#8B837D" }}
      ></div>
      <div className="link-page">
        <P to={"/privacy-policy"}>Privacy Policy and Cookies</P> |{" "}
        <P to={"/terms-of-use"}>Terms of Sale and Use</P>
      </div>
    </SignUpCon>
  );
};

export default Signup;
