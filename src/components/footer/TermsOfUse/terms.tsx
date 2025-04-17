import { useEffect } from 'react';
import { AboutBgWrap } from "../../pages/about/style";
import { MultipleInfoWrap, TermsCon, TermsMiddleWrap } from "./style";
import arrow from '../../../assets/svg/smallarrow.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TermsOfUse = () => {
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
    <TermsCon>
        <div className="collection-bg">
          <AboutBgWrap>
             <b>Terms of Use</b>
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
               <p>Terms of Use</p>
             </div>
          </AboutBgWrap>
       </div>
        <h1 data-aos="fade-up">We followed the law, follow our policies, we self-report</h1>
        <div className="header-bot">
            <div style={{width:'8px',height:"65px",backgroundColor:"#5F9999"}} data-aos="fade-right"></div>
            <p data-aos="fade-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
        <TermsMiddleWrap data-aos="fade-up">
            <div className="texts-wrap">
                <div>
                    <b>Changes to personally information</b>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                </div>
                <div>
                    <b>Our detail information</b>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                </div>
            </div>
            <div className="texts-wrap">
                <div>
                    <b>Providing your personal data</b>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                </div>
                <div>
                    <b>The private limited policy</b>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                </div>
            </div>
        </TermsMiddleWrap>
        <MultipleInfoWrap data-aos="fade-up">
            <h1>Watch information collected through technology and bt third-parties?</h1>
            <div className="infos-wrap">
                <h2>01</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
                </p>
            </div>
            <div className="infos-wrap">
                <h2>02</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
                </p>
            </div>
            <div className="infos-wrap">
                <h2>03</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
                </p>
            </div>
            <div className="infos-wrap">
                <h2>04</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
                </p>
            </div>
            <div className="infos-wrap">
                <h2>05</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
                </p>
            </div>
            <div className="infos-wrap">
                <h2>06</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
                </p>
            </div>
            <div className="infos-wrap">
                <h2>07</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
                </p>
            </div>
        </MultipleInfoWrap>
    </TermsCon>
  );
};

export default TermsOfUse;