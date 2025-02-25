import { MenuWrap, NavIcons, Navlink, NavMain, NavMenu, NavRight, NavTop } from "./style"
import logo from "../../assets/svg/Logo.svg"
import search from "../../assets/icons/search.svg"
import shopping from "../../assets/icons/shopping-bag.svg"
import user from "../../assets/icons/user.svg"

const Navbar = () => {
  return (
    <>
       <NavMain>
          <NavTop>
           <div style={{display:'flex',gap:'40px'}}>
             <p>Free shipping over $150</p>
             <p>24/7 Support</p>
           </div>
           <div>
             <p>Enquiries  +850 1254 789</p>
           </div>
          </NavTop>
          <NavMenu>
            <img src={logo} alt="logo" style={{width:'200px'}}/>
            <NavRight>
              <MenuWrap>
              <Navlink to= {"/"}>
                 <p>Home</p>
               </Navlink>
               <Navlink to={"/about"}>
                 <p>About</p>
               </Navlink>
               <Navlink to={'/shop'} >
                 <p>Shop</p>
               </Navlink>
               <Navlink to= {'/pages'}>
                 <p>Pages</p>
               </Navlink>
               <Navlink 
                 to={'/blog'} >
                 <p>Blog</p>
               </Navlink>
               <Navlink 
                 to={'/featured'} >
                 <p>Featured</p>
               </Navlink>
               <Navlink 
                 to={'/contact'} >
                 <p>Contact</p>
               </Navlink>
              </MenuWrap>
              <NavIcons>
                <img src={search} alt="search-icon" />
                <img src={shopping} alt="shopping-icon" />
                <img src={user} alt="user-icon" />
              </NavIcons>
            </NavRight>
          </NavMenu>
       </NavMain>
    </>
  )
}

export default Navbar