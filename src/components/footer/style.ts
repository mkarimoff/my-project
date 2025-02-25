import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const FooterMain = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     width: 100%;
     height: 576px;
     background: var(--Home-2-Background, #EFEBE8);
`
export const FooterWrapper = styled.div`
    display: flex;
    gap: 77px;
`
export const FooterDivs = styled.div`
     display: flex;
     flex-direction: column;
     gap: 15px;
b{
    color: var(--Text-Color, #252525);
    font-size: 24px;
    font-weight: 700;
    line-height: 29px; 
}
p{
    color: var(--Text-Color, #252525);
    font-size: 17px;
    font-weight: 400;
    line-height: 160%; 
}
`
export const FooterHelp = styled.div`
     display: flex;
     flex-direction: column;
     gap: 14px;
b{
    color: var(--Text-Color, #252525);
    font-size: 24px;
    font-weight: 700;
    line-height: 29px; 
}
p{
    color: var(--Text-Color, #252525);
    font-size: 17px;
    font-weight: 400;
    line-height: 27px;
    cursor: pointer;
}
p:hover{
    color: #928E8B;
}
`
export const FooterInPut = styled.div`
     display: flex;
     flex-direction: column;
     gap: 25px;
b{
    color: var(--Text-Color, #252525);
    font-size: 24px;
    font-weight: 700;
}
form{
    display: flex;
    flex-direction: column;
    gap: 25px;
input{
    padding: 25px;
    width: 320px;
    height: 55px;
    border: none;
    cursor: pointer;
}    
button{
    width: 320px;
    height: 55px;
    background: var(--Text-Color, #252525);
    border: none;
    color: white;
    color: var(--White-Color, #FFF);
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;
}
button:hover{
    background-color: #928E8B; 
}
}
`
export const FooterLink = styled(NavLink)`
    display: flex;
    text-decoration:none;
    &.active p {
        color: #928E8B;
     }
`