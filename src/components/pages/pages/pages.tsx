import { useEffect } from 'react';
import { AboutBgWrap } from "../about/style";
import arrow from "../../../assets/svg/smallarrow.svg";
import signature from "../../../assets/images/signature.png";
import founder from "../../../assets/images/founderimage.webp";
import vision from "../../../assets/images/division.jpg";
import wedo from "../../../assets/images/wedo.webp";
import beginning from "../../../assets/images/beginning.jpg";
import { HistoryWrap, PagesCon, SuccessWrap } from "./style";
import AOS from 'aos';
import 'aos/dist/aos.css';

const PagesComponent = () => {
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
    <PagesCon>
      <div className="collection-bg">
        <AboutBgWrap>
          <b>Pages</b>
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
            <p>Pages</p>
          </div>
        </AboutBgWrap>
      </div>
      <SuccessWrap>
        <div className="texts-wrap" data-aos="fade-right">
          <div>
            <p style={{ color: '#d4a373' }}>Welcome to Furnimall</p>
            <h1>Our Success <br /> And Company History.</h1>
          </div>
          <p>Ac bibendum ac in erat. Donec posuere consectetuer volutpat rutrum ac, sollicitudin quam quisque, at interdum dignissim, fringilla elit risus lorem eu condimentum eros mollis</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ height: '60px', width: "5px", backgroundColor: '#d4a373' }}></div>
            <b>Donec vehicula cursus vestibulum lectus, sit eros integer varius cum turpis et quam congue nisl accumsan.</b>
          </div>
          <p>Nam liber tempor cum soluta nobis eleifend option congue nihil doming id quod mazim placerat facer possim assum typi non habent claritatem insitam…</p>
          <img src={signature} alt="signature image" style={{ width: '200px' }} />
          <p><span>Muhammad </span>- Founder of Furnimall</p>
        </div>
        <img src={founder} alt="image" style={{ width: '700px', height: "1000px" }} data-aos="fade-left" />
      </SuccessWrap>
      <HistoryWrap data-aos="fade-up">
        <div className="components">
          <img src={vision} alt="img" />
          <h2>OUR VISION</h2>
          <p>Many desktop publishing packages and web page editors now use Lorem Ipsum.</p>
        </div>
        <div className="components">
          <img src={wedo} alt="img" />
          <h2>What we really do?</h2>
          <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.</p>
        </div>
        <div className="components">
          <img src={beginning} alt="img" />
          <h2>HISTORY OF BEGINNING</h2>
          <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe.</p>
        </div>
      </HistoryWrap>
    </PagesCon>
  );
};

export default PagesComponent;
