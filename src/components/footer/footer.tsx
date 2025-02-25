import { FooterDivs, FooterHelp, FooterInPut, FooterMain, FooterWrapper } from "./style"
import logo from "../../assets/svg/Logo.svg"
const Footer = () => {
  return (
    <FooterMain>
       <FooterWrapper>
       <FooterDivs>
            <img src={logo} alt="logo" style={{width:"200px"}}/>
            <p>
              Let's make something great together. <br />
              We are trusted by over 5000+ clients. <br />
              Join them by using our services and <br />
              grow your business.
            </p>
        </FooterDivs>
        <FooterHelp>
            <b>Need Help?</b>
            <p>Support</p>
            <p>Get Started</p>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>About Us</p>
        </FooterHelp>
        <FooterDivs>
            <b>Get in Touch</b>
            <p>Moonshine St. 14/05 Light City, <br />
             London, United Kingdom
            </p>
            <p>info@email.com</p>
            <p>+00 (123) 456 78 90</p>
        </FooterDivs>
        <FooterInPut>
            <b>
              Sign Up For News & Get <br />
              20% Off
            </b>
            <form >
                <input type="text" placeholder="Your email adress"/>
                <button>Subscribe Now</button>
            </form>
        </FooterInPut>
       </FooterWrapper>
    </FooterMain>
  )
}

export default Footer