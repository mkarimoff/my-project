import styled from "styled-components";

export const PrivacyCon = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     gap: 50px;
`
export const TextsCon = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: center;
     gap: 100px;
     margin-top: 70px;
     padding-bottom: 150px;

h1{
    color: var(--Text-Color, #252525);
    font-size: 40px;
    font-weight: 600;
    text-transform: capitalize;
    width: 420px;
    margin-right: 70px;
} 
.texts-wrap{
    display: flex;
    gap: 20px;
}
b{
    color: var(--Text-Color, #252525);
    font-size: 28px;
    font-weight: 600;
    line-height: 209%;
    text-transform: capitalize;
}
p{
    color: var(--Paragraph-Accent-Color, #8B837D);
    font-size: 18px;
    font-weight: 400;
    width: 490px;
    line-height: 180%;
    text-transform: capitalize;
}   
`