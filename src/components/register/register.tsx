import { useState } from "react";
import { P, SignUpCon, SignUpInLink } from "./style";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "aos/dist/aos.css";
import { toast } from "react-toastify";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { baseApi } from "../../utils/api";

const Register = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formatKoreanPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, "");

    if (
      !cleaned.startsWith("010") &&
      !cleaned.startsWith("011") &&
      !cleaned.startsWith("016") &&
      !cleaned.startsWith("017") &&
      !cleaned.startsWith("018") &&
      !cleaned.startsWith("019")
    ) {
      return cleaned;
    }

    if (cleaned.length <= 3) {
      return cleaned;
    } else if (cleaned.length <= 7) {
      return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
    } else if (cleaned.length <= 11) {
      return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 7)}-${cleaned.slice(7, 11)}`;
    }
    return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 7)}-${cleaned.slice(7, 11)}`;
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatKoreanPhoneNumber(e.target.value);
    setNumber(formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    if (!firstName || !lastName || !email || !password || !address || !number) {
      setError("All fields are required.");
      setIsLoading(false);
      toast.error("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match. Please confirm.");
      setIsLoading(false);
      toast.error("Passwords do not match. Please confirm.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Invalid email format.");
      setIsLoading(false);
      toast.error("Invalid email format.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      setIsLoading(false);
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    const cleanedNumber = number.replace(/\D/g, "");
    if (!/^01[0-1,6-9][0-9]{7,8}$/.test(cleanedNumber)) {
      setError("Please enter a valid Korean phone number (e.g., 010-1234-5678).");
      setIsLoading(false);
      toast.error("Please enter a valid Korean phone number (e.g., 010-1234-5678).");
      return;
    }

    const hyphenatedNumber = formatKoreanPhoneNumber(cleanedNumber);

    const payload = {
      firstName,
      lastName,
      email,
      password,
      address,
      number: hyphenatedNumber,
      role: "user",
    };

    try {
      const response = await axios.post(
        baseApi+"/auth/register",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Registration response:", response.data);
      setSuccess("Registration successful!");
      toast.success("User successfully registered!");
      navigate("/");
    } catch (error: any) {
      let message = "Failed to register user. Please try again.";
      if (error.response) {
        if (error.response.data?.error) {
          message = error.response.data.error;
        } else if (Array.isArray(error.response.data?.errors) && error.response.data.errors.length > 0) {
          message = error.response.data.errors[0].msg;
        }
      } else if (error.request) {
        message = "Unable to connect to the server. Please check your network or try again later.";
      } else {
        message = "An unexpected error occurred. Please try again.";
      }
      setError(message);
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <SignUpCon>
      <h1>
        WELCOME <br /> PLEASE REGISTER
      </h1>
      <div className="radio-wrap">
        <SignUpInLink to={"/"}>Sign In</SignUpInLink>
        <SignUpInLink to={"/signup"} style={{ color: "#5f9999" }}>
          Create Account
        </SignUpInLink>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Create Password</label>
        <div style={{ position: "relative", width: "100%" }}>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
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
            {showPassword ? <Visibility /> : <VisibilityOff /> }
          </span>
        </div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <div style={{ position: "relative", width: "100%" }}>
          <input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ paddingRight: "40px", width: "100%", boxSizing: "border-box" }}
          />
          <span
            onClick={toggleConfirmPasswordVisibility}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              color: "#5f9999",
            }}
          >
            {showConfirmPassword ?  <Visibility /> : <VisibilityOff />}
          </span>
        </div>
        <label htmlFor="address">Address</label>
        <input
          id="address"
          type="text"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          id="phoneNumber"
          type="text"
          required
          value={number}
          onChange={handleNumberChange}
          placeholder="010-1234-5678"
        />
        {error && (
          <p style={{ color: "red" }} role="alert">
            {error}
          </p>
        )}
        {success && (
          <p style={{ color: "green" }} role="alert">
            {success}
          </p>
        )}
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Registering..." : "Create Account"}
        </button>
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