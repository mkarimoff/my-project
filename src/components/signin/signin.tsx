import { SignUpInLink } from "../signup/style";
import { P, SignInCon } from "./style";

const Signin = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your sign-in logic here (e.g., validation, API call, etc.)
  };

  return (
    <SignInCon>
      <h1>WELCOME PLEASE SIGN IN!</h1>
      <div className="radio-wrap">
        <SignUpInLink to={"/Signin"} style={{ color: "#5f9999" }}>
          Sign In
        </SignUpInLink>
        <SignUpInLink to={"/Signup"}>Create Account</SignUpInLink>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Email</label>
        <input type="email" required />
        <label htmlFor="">Password</label>
        <input type="password" required />
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
