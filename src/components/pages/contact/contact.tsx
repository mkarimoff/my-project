import { useEffect } from 'react';
import { AboutBgWrap } from "../about/style";
import arrow from '../../../assets/svg/smallarrow.svg';
import { ContactInfoWrap, ContactMainCon } from "./style";
import { ContactUs } from "./contactUs";
import AOS from 'aos';
import 'aos/dist/aos.css';

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
            <p>Goyang-si Ilsan-seogu, <br />ilsan-dong,South Korea.</p>
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
       {/* <BasicMap /> */}
    </ContactMainCon>
  );
};

export default ContactComponent;