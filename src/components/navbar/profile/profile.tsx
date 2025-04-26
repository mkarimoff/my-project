import { useEffect, useState } from "react";
import { AboutBgWrap } from "../../pages/about/style";
import arrow from "../../../assets/svg/smallarrow.svg";
import { ProfileCon, ProfileWrap } from "./style";
import AOS from "aos";
import "aos/dist/aos.css";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios"; // ✅ import axios

const Profile = () => {
  const { logout, isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    number: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
    AOS.refresh();
    return () => { AOS.refreshHard(); };
  }, []);

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        address: user.address || "",
        number: user.number || "",
      });
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully");
      navigate("/");
    } catch (error: any) {
      toast.error(error.message || "Failed to log out");
    }
  };

  const handleEditSave = async () => {
    if (isEditing) {
      try {
        if (!user || !user.id) {
          toast.error("User ID not found");
          return;
        }
  
        const updatedFields: any = {};
  
        Object.keys(formData).forEach((key) => {
          const value = formData[key as keyof typeof formData];
          if (value && value !== user[key as keyof typeof user]) {
            updatedFields[key] = value;
          }
        });
  
        if (Object.keys(updatedFields).length === 0) {
          toast.info("No changes to update");
          setIsEditing(false);
          return;
        }
  
        const res = await axios.put(
          `http://localhost:5050/dev-api/auth/users/${user.id}`,
          updatedFields
        );
  
        if (res.status === 200) {
          toast.success("Profile updated successfully");
          setIsEditing(false);
        }
      } catch (error: any) {
        toast.error(error.response?.data?.error || "Failed to update profile");
      }
    } else {
      setIsEditing(true);
    }
  };
  
  
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
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
            <form>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                disabled={!isEditing}
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                disabled
              />
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                value={formData.address}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </form>
            <form>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                disabled={!isEditing}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value="********"
                disabled
              />
              <label htmlFor="number">Phone Number</label>
              <input
                type="text"
                id="number"
                value={formData.number}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </form>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <button onClick={handleLogout} style={{ backgroundColor: "red" }}>
                Log Out
              </button>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              {isEditing && (
                <button onClick={() => setIsEditing(false)}>Cancel</button>
              )}
              <button onClick={handleEditSave}>
                {isEditing ? "Save" : "Edit"}
              </button>
            </div>
          </div>
        </div>
      </ProfileWrap>
    </ProfileCon>
  );
};

export default Profile;
