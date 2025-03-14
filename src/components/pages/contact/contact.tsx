import { AboutBgWrap } from "../about/style"
import arrow from '../../../assets/svg/smallarrow.svg'
import { ContactInfoWrap, ContactMainCon } from "./style"
// import BasicMap from "./map/map"
import { ContactUs } from "./contactUs"


const ContactComponent = () => {
  return (
    <ContactMainCon>
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
            <p>401 Broadway, 24th Floor, Orchard View, London, UK</p>
          </div>
          <div>
            <b>EMAIL</b>
            <p>info@yourdomain.com</p>
          </div>
          <div>
            <b>PHONE</b>
            <p>+1 234 567 8910</p>
            <p>+1 234 567 8910</p>
          </div>
       </ContactInfoWrap>
       <ContactUs />
       {/* <BasicMap /> */}
    </ContactMainCon>
  )
}

export default ContactComponent