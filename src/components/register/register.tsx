import { useState } from "react";
import { P, SignUpCon, SignUpInLink } from "./style";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // ✅ Validation checks
    if (!firstName || !lastName || !email || !password || !address) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match. Please confirm.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email format.");
      return;
    }

    const payload = {
      firstName,
      lastName,
      email,
      password,
      address,
      role: "user",
    };

    // ✅ Log the data being sent
    console.log("Sending registration data:", payload);

    try {
      const response = await axios.post(
        "http://localhost:5050/dev-api/auth/register/",
        payload
      );

      console.log("Server response:", response.data);

      // ✅ Reset form
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setAddress("");

      setSuccess("Registration successful!");
      navigate("/signin");
    } catch (error: any) {
      const message =
        error.response?.data?.error || "Failed to register user. Please try again.";
      setError(message);
      console.error("Backend error response:", error.response?.data);
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
        <input
          type="text"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="">Last Name</label>
        <input
          type="text"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
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
        <label htmlFor="">Address</label>
        <input
          type="text"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
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

export default Register;
