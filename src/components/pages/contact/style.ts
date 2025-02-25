import styled from "styled-components";


export const ContactMainCon = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     gap: 150px;
`
export const ContactInfoWrap = styled.div`
     display: flex;
     justify-content: center;
     gap: 120px;

b{
    color: var(--Text-Color, #252525);
    font-size: 20px;
    font-weight: 500;
    line-height: 200%;
}
p{
    color: var(--Paragraph-Accent-Color, #8B837D);
    font-size: 14px;
    font-weight: 400;
    width: 200px;
}
`
export const FormCon = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;

h1{
    color: var(--Text-Color, #252525);
    font-size: 24px;
    font-weight: 600;
}
p{
    color: var(--Accent-Color, #5F9999);
    font-size: 14px;
    font-weight: 500;
}
.FormWrap1{
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 20px;
input{
    width: 550px;
    height: 55px;
    padding: 10px;
    background: #F5F5F5;
    border: none;
}
}
.FormWrap2{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
input{
    height: 55px;
    padding: 10px;
    background: #F5F5F5;
    border: none;
}
textarea{
    height: 280px;
    padding: 10px;
    background: #F5F5F5;
    border: none;
    resize: none;
}
.button{
    width: 111px;
    height: 55px;
    color: white;
    background-color: black;
    border: none;
    cursor: pointer;
    font-size: 18px;
}
.button:hover{
    background-color: #928E8B;
}
}
`