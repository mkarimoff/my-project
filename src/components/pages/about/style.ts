import styled from "styled-components"

export const AboutCon = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     gap: 100px;
`

export const AboutBgWrap = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;
     gap: 20px;
b{
    font-size: 40px;
    font-weight: 500;
}
p{
    font-size: 15px;
    font-weight: 500;
}
div{
    display: flex;
    align-items: center;
    gap: 8px;
}     
`
export const MottoCon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;

.motto-components{
    display: flex;
    align-items: center;
    gap: 10px;
b{
    color: var(--Text-Color, #252525);
    font-size: 18px;
    font-weight: 500;
}   
p{
    color: var(--Paragraph-Accent-Color, #8B837D);
    font-size: 14px;
    font-weight: 400;
} 
}
`
export const AboutTextWrap = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;

.components-wrap{
     display: flex;
     align-items: center;
     
.text-wrap{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 585px;
    height: 680px;
    background: var(--product-background, #F6F6F6);

div{
    display: flex;
    flex-direction: column;
    gap: 10px;
    
h1{
    color: var(--Text-Color, #252525);
    font-size: 40px;
    font-weight: 600;
}
p{
    color: var(--Text-Color, #252525);
    font-size: 18px;
    font-weight: 200;
    width: 500px;
    line-height: 170%;
}
}} }
img{
    width: 585px;
    height: 680px;
}
`
