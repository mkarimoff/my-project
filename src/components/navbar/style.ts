
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
     gap: 25px;

.icons{
     font-size: 27px;
     fill: black;
     cursor: pointer;
     border-bottom: solid 1px white;
     &:hover{
          border-bottom: solid 1px black;
     }
}
`
export const NavbarItem = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  

  &:hover {
    color: #ddd;
  }
`;

export const DropdownContent = styled.div`
  display: block;
  position: absolute;
  width: 200px;
  left: 0px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
`;
export const DropdownLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  color: black;
  padding: 10px 10px 10px 20px;
&:hover{
     color: #928E8B;
}
`
export const StyledP = styled.p<{ $active: boolean }>`
  background-color: ${({ $active }) => ($active ? "#928E8B" : "transparent")};
  color: ${({ $active }) => ($active ? "white" : "black")};
  padding: 5px 10px;
  border-radius: 4px;
  transition: 0.3s;
`;
