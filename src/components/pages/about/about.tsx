import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import ReactPlayer from "react-player";
import { AboutBgWrap, AboutCon, AboutTextWrap, MottoCon } from "./style";
import arrow from "../../../assets/svg/smallarrow.svg";
import granit from "../../../assets/images/granit.jpg";
import blackchair from "../../../assets/images/bgbluechair.webp";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import Carousel from "../home/carousel";
import { ProductsImg } from "../home/style";

const AboutComponent: React.FC = () => {
  // Initialize AOS
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
    <AboutCon>
      <div className="collection-bg">
        <AboutBgWrap>
          <b>About Us</b>
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
            <p>About</p>
          </div>
        </AboutBgWrap>
      </div>
      <ReactPlayer
        url="https://youtu.be/t-EdOl9GF7A?si=EeK9MBN12kG56Sp9"
        controls
        width="1150px"
        height="550px"
        data-aos="zoom-in"
        data-aos-duration="1000"
        onReady={() => {
          console.log("Player is ready");
          AOS.refresh(); 
        }}
        config={{
          youtube: {
            playerVars: {
              autoplay: 0,
              modestbranding: 1,
            },
          },
        }}
      />
      <MottoCon data-aos="fade-up" data-aos-duration="1000">
        <div className="motto-components">
          <LocalShippingOutlinedIcon fontSize="large" />
          <div>
            <b>Fast Delivery</b>
            <p>Delivery within 24 Hours in any Place</p>
          </div>
        </div>
        <div className="motto-components">
          <SupportAgentOutlinedIcon fontSize="large" />
          <div>
            <b>24/7 Support</b>
            <p>Get our support any time at any hour</p>
          </div>
        </div>
        <div className="motto-components">
          <GppGoodOutlinedIcon fontSize="large" />
          <div>
            <b>Secure Shopping</b>
            <p>Highly secured online payment method</p>
          </div>
        </div>
        <div className="motto-components">
          <CachedOutlinedIcon fontSize="large" />
          <div>
            <b>Moneyback Guarantee</b>
            <p>Guaranteed money back in 30 days</p>
          </div>
        </div>
      </MottoCon>
      <AboutTextWrap>
        <div className="components-wrap">
          <div className="text-wrap" data-aos="fade-right" data-aos-duration="1000">
            <div>
              <h1>Desire Meets A New Style</h1>
              <p>
                Since when has the concept of “jewelry” existed? When it comes to jewelry, people
                often think of personal accessories that make a difference to help the wearer stand
                out.
              </p>
              <p>
                Since when has the concept of “jewelry” existed? When it comes to jewelry, people
                often think of personal accessories that make a difference to help the wearer stand
                out. This concept dates back to about 40,000 years ago, when humans knew how to
                sharpen animal bones into bracelets, necklaces.
              </p>
              <p>
                Since when has the concept of “jewelry” existed? When it comes to jewelry, people
                often think of personal accessories that make a difference to help the wearer stand
                out. This concept dates back to about 40,000 years ago, when humans knew how to
                sharpen animal bones into bracelets, necklaces.
              </p>
            </div>
          </div>
          <img src={blackchair} alt="product-image" data-aos="fade-left" data-aos-duration="1000" />
        </div>
        <div className="components-wrap">
          <img src={granit} alt="product-image" data-aos="fade-right" data-aos-duration="1000" />
          <div className="text-wrap" data-aos="fade-left" data-aos-duration="1000">
            <div>
              <h1>Desire Meets A New Style</h1>
              <p>
                Since when has the concept of “jewelry” existed? When it comes to jewelry, people
                often think of personal accessories that make a difference to help the wearer stand
                out.
              </p>
              <p>
                Since when has the concept of “jewelry” existed? When it comes to jewelry, people
                often think of personal accessories that make a difference to help the wearer stand
                out. This concept dates back to about 40,000 years ago, when humans knew how to
                sharpen animal bones into bracelets, necklaces.
              </p>
              <p>
                Since when has the concept of “jewelry” existed? When it comes to jewelry, people
                often think of personal accessories that make a difference to help the wearer stand
                out. This concept dates back to about 40,000 years ago, when humans knew how to
                sharpen animal bones into bracelets, necklaces.
              </p>
            </div>
          </div>
        </div>
      </AboutTextWrap>
      <ProductsImg data-aos="fade-up" data-aos-duration="1000">
        <Carousel />
      </ProductsImg>
    </AboutCon>
  );
};

export default AboutComponent;

