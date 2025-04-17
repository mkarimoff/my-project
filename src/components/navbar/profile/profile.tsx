import { useEffect } from 'react';
import { AboutBgWrap } from "../../pages/about/style";
import arrow from "../../../assets/svg/smallarrow.svg";
import { ProfileCon, ProfileWrap } from "./style";
import AOS from 'aos';
import 'aos/dist/aos.css';

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
              <label htmlFor="">First Name</label>
              <input type="text" />
              <label htmlFor="">Email</label>
              <input type="email" />
              <label htmlFor="">Address</label>
              <input type="address" />
            </form>
            <form action="">
              <label htmlFor="">Last Name</label>
              <input type="text" />
              <label htmlFor="">Password</label>
              <input type="Password" />
              <label htmlFor="">Zip Code</label>
              <input type="text" />
            </form>
          </div>
          <div style={{display:'flex',justifyContent:"end",gap:'10px'}}>
            <button>Cancel</button>
            <button>Save</button>
          </div>
        </div>
      </ProfileWrap>
    </ProfileCon>
  );
};

export default Profile;