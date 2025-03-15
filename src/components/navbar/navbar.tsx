import { useState } from "react";
import {
  DropdownContent,
  DropdownLink,
  MenuWrap,
  NavbarItem,
  NavIcons,
  Navlink,
  NavMain,
  NavMenu,
  NavRight,
  NavTop,
} from "./style";
import logo from "../../assets/svg/Logo.svg";
import search from "../../assets/icons/search.svg";
import shopping from "../../assets/icons/shopping-bag.svg";
import user from "../../assets/icons/user.svg";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleClickCart = () => {
    navigate("/cart");
  };
  const handleClickProfile = () => {
    navigate("/profile");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <NavMain>
        <NavTop>
          <div style={{ display: "flex", gap: "40px" }}>
            <p>Free shipping over $150</p>
            <p>24/7 Support</p>
          </div>
          <div>
            <p>Enquiries +850 1254 789</p>
          </div>
        </NavTop>
        <NavMenu>
          <img src={logo} alt="logo" style={{ width: "200px" }} />
          <NavRight>
            <MenuWrap>
              <Navlink to="/"> <p>Home</p> </Navlink>
              <Navlink to="/about"> <p>About</p> </Navlink>
              <Navlink to="/shop"> <p>Shop</p> </Navlink>
              <NavbarItem onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                <Navlink to="/pages">
                  <p style={{marginBottom:'32px',marginTop:'32px'}}>Pages</p>
                </Navlink>
                {isDropdownOpen && (
                  <DropdownContent>
                    <DropdownLink to={"/about"}>About Us</DropdownLink>
                    <DropdownLink to={"/terms-of-use"}>Terms of Sale & Use</DropdownLink>
                    <DropdownLink to={"/privacy-policy"}>Privacy Policy</DropdownLink>
                    <DropdownLink to={"/support"}>Support</DropdownLink>
                    <DropdownLink to={"/signin"}>Get Started</DropdownLink>
                  </DropdownContent>
                )}
              </NavbarItem>
              <Navlink to="/blog"> <p>Blog</p> </Navlink>
              <Navlink to="/contact"> <p>Contact</p> </Navlink>
            </MenuWrap>
            <NavIcons>
              <img src={search} alt="search-icon" />
              <img src={shopping} alt="shopping-icon" onClick={handleClickCart} />
              <img src={user} alt="user-icon" onClick={handleClickProfile} />
            </NavIcons>
          </NavRight>
        </NavMenu>
      </NavMain>
    </>
  );
};

export default Navbar;

