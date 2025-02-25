
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavMain = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
`
export const NavTop = styled.div`
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 0px 115px 0px 115px;
     height: 59px;
     width: 100%;
     flex-shrink: 0;
     background: var(--Home-2-Accent, #928E8B);
     color: white;
p{
     color: var(--White-Color, #FFF);
     font-size: 14px;
     font-style: normal;
     font-weight: 500;
     line-height: 160%; 
     text-transform: capitalize;
}
`
export const NavMenu = styled.div`
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 0px 115px 0px 115px;
     gap: 220px;
     height: 100px;
     width: 100%;
`
export const NavRight = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;
     gap: 30px;
     `
export const Navlink = styled(NavLink)`
     text-decoration: none;
     &.active p {
          background-color: #928E8B;
          color: white;
     }
     `;

export const MenuWrap = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;
     gap: 25px;
p{
      color: var(--Text-Color, #333);
      font-size: 17px;
      font-style: normal;
      font-weight: 400;
      padding: 3px 10px;
      border-radius: 25px;
      cursor: pointer;
} 
p:hover {
      background-color: #928E8B; 
      color: white;
}
`
export const NavIcons = styled.div`
     display: flex;
     gap: 40px;
img{
     cursor: pointer;
}
`