import { useEffect } from "react";
import { AboutBgWrap } from "../../pages/about/style";
import arrow from "../../../assets/svg/smallarrow.svg";
import { ProfileCon, ProfileWrap } from "./style";
import AOS from "aos";
import "aos/dist/aos.css";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Profile = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    AOS.refresh();

    return () => {
      AOS.refreshHard();
    };
  }, []);

  const { logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      logout();
      toast.success("Logged out successfully");
      navigate("/");
    } catch (error: any) {
      toast.error(error.message || "Failed to log out");
    }
  };

  if (!isAuthenticated) {
    return (
      <ProfileCon style={{ padding: "3rem", textAlign: "center" }}>
        <h2>You are not logged in.</h2>
        <p>
          Please{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            sign in
          </span>{" "}
          to view your profile.
        </p>
      </ProfileCon>
    );
  }

  return (
    <ProfileCon>
      <div className="collection-bg">
        <AboutBgWrap>
          <b>Profile</b>
          <div
            style={{
              width: "900px",
              height: "0.5px",
              backgroundColor: "white",
              marginBottom: "-25px",
              marginRight: "-155px",
            }}
          ></div>
          <div>
            <p>Home</p>
            <img src={arrow} alt="arrow" />
            <p>Profile</p>
          </div>
        </AboutBgWrap>
      </div>
      <ProfileWrap data-aos="fade-up">
        <div className="edit-wrap">
          <h2>Edit Your Profile</h2>
          <div style={{ display: "flex", alignItems: "center", gap: "50px" }}>
            <form action="">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" />
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
              <label htmlFor="address">Address</label>
              <input type="text" id="address" />
            </form>
            <form action="">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
              <label htmlFor="number">Phone Number</label>
              <input type="text" id="number" />
            </form>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <button onClick={handleLogout} style={{ backgroundColor: "red" }}>
                Log Out
              </button>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <button>Cancel</button>
              <button>Save</button>
            </div>
          </div>
        </div>
      </ProfileWrap>
    </ProfileCon>
  );
};

export default Profile;
