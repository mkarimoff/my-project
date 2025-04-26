import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { Box, Modal, Badge } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useAuth } from "../context/authContext";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleClickCart = () => {
    navigate("/cart");
  };

  const handleClickFavorite = () => {
    navigate("/favorites");
  };

  const handleClickProfile = () => {
    navigate("/profile");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const { cart, favorites } = useAuth();

  return (
    <>
      <NavMain>
        <NavTop>
          <div style={{ display: "flex", gap: "40px" }}>
            <p>Free shipping over $150</p>
            <p>24/7 Support</p>
          </div>
          <div>
            <p>Enquiries +8210-6505-1909</p>
          </div>
        </NavTop>
        <NavMenu>
          <img src={logo} alt="logo" style={{ width: "200px" }} />
          <NavRight>
            <MenuWrap>
              <Navlink to="/home">
                <p>Home</p>
              </Navlink>
              <Navlink to="/about">
                <p>About</p>
              </Navlink>
              <Navlink to="/shop">
                <p>Shop</p>
              </Navlink>
              <NavbarItem
                onMouseEnter={toggleDropdown}
                onMouseLeave={toggleDropdown}
              >
                <Navlink to="/pages">
                  <p style={{ marginBottom: "32px", marginTop: "32px" }}>
                    Pages
                  </p>
                </Navlink>
                {isDropdownOpen && (
                  <DropdownContent data-aos="fade-up">
                    <DropdownLink to={"/about"}>About Us</DropdownLink>
                    <DropdownLink to={"/terms-of-use"}>
                      Terms of Sale & Use
                    </DropdownLink>
                    <DropdownLink to={"/privacy-policy"}>
                      Privacy Policy
                    </DropdownLink>
                    <DropdownLink to={"/support"}>Support</DropdownLink>
                    <DropdownLink to={"/signin"}>Get Started</DropdownLink>
                  </DropdownContent>
                )}
              </NavbarItem>
              <Navlink to="/blog">
                <p>Blog</p>
              </Navlink>
              <Navlink to="/contact">
                <p>Contact</p>
              </Navlink>
            </MenuWrap>
            <NavIcons>
              <SearchOutlinedIcon onClick={handleOpen} className="icons" />
              <Modal open={open} onClose={handleClose} data-aos="fade-down">
                <Box sx={style}>
                  <img src={logo} alt="logo" width={"180px"} />
                  <input
                    type="search"
                    style={{
                      width: "800px",
                      height: "50px",
                      padding: "15px",
                      fontSize: "15px",
                      border: "solid 0.5px #ced4da",
                    }}
                    placeholder="Search"
                  />
                  <CloseIcon
                    style={{ fontSize: "35px", cursor: "pointer" }}
                    onClick={handleClose}
                  />
                </Box>
              </Modal>
              <Badge
                badgeContent={cart.length}
                color="primary"
                max={99}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                sx={{
                  "& .MuiBadge-badge": {
                    fontSize: "10px",
                    minWidth: "18px",
                    height: "18px",
                    padding: "0 2px",
                  },
                }}
              >
                <ShoppingCartOutlinedIcon
                  onClick={handleClickCart}
                  className="icons"
                  style={{ cursor: "pointer" }}
                />
              </Badge>

              <Badge
                badgeContent={favorites.length}
                color="secondary"
                max={99}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                sx={{
                  "& .MuiBadge-badge": {
                    fontSize: "10px",
                    minWidth: "18px",
                    height: "18px",
                    padding: "0 2px",
                  },
                }}
              >
                <FavoriteBorderIcon
                  onClick={handleClickFavorite}
                  className="icons"
                  style={{ cursor: "pointer" }}
                />
              </Badge>

              <PermIdentityOutlinedIcon
                onClick={handleClickProfile}
                className="icons"
              />
            </NavIcons>
          </NavRight>
        </NavMenu>
      </NavMain>
    </>
  );
};

export default Navbar;

const style = {
  position: "absolute",
  top: "70px",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: 180,
  bgcolor: "background.paper",
  p: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "180px ",
};