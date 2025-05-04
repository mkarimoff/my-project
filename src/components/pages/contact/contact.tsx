import { useEffect } from "react";
import { AboutBgWrap } from "../about/style";
import arrow from "../../../assets/svg/smallarrow.svg";
import { ContactInfoWrap, ContactMainCon } from "./style";
import { ContactUs } from "./contactUs";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactComponent = () => {
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
    <ContactMainCon data-aos="fade-up">
      <div className="collection-bg">
        <AboutBgWrap>
          <b>Contact</b>
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
            <p>Contact</p>
          </div>
        </AboutBgWrap>
      </div>
      <ContactInfoWrap>
        <div>
          <b>ADDRESS</b>
          <p>
            Goyang-si Ilsan-seogu, <br />
            ilsan-dong,South Korea.
          </p>
        </div>
        <div>
          <b>EMAIL</b>
          <p>contactfurnimall@gmail.com</p>
        </div>
        <div>
          <b>PHONE</b>
          <p>+8210-6505-1909</p>
          <p>+8210-6505-1909</p>
        </div>
      </ContactInfoWrap>
      <ContactUs />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157.611031771534!2d126.76720827592615!3d37.68184662200893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c8fef6b9006f3%3A0xe77e61ca5a4e3550!2z7J287IKw!5e0!3m2!1sen!2skr!4v1746353937286!5m2!1sen!2skr"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </ContactMainCon>
  );
};

export default ContactComponent;
