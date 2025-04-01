import { AboutBgWrap } from "../../pages/about/style"
import arrow from '../../../assets/svg/smallarrow.svg'
import { PrivacyCon, TextsCon } from "./style"

const PrivacyPolicy = () => {
  return (
    <PrivacyCon>
       <div className="collection-bg">
          <AboutBgWrap>
             <b>Privacy Policy</b>
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
               <p>Privacy Policy</p>
             </div>
          </AboutBgWrap>
       </div>
       <TextsCon data-aos="fade-up">
          <div className="texts-wrap">
            <h1>We followed the law, follow our policies, we self-report</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
          </div>
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
       </TextsCon>
    </PrivacyCon>
  )
}

export default PrivacyPolicy