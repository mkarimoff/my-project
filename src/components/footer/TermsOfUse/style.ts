import styled from "styled-components";

export const TermsCon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;

h1{
    color: var(--Text-Color, #252525);
    font-size: 48px;
    font-weight: 600;
    width: 1000px;
    text-transform: capitalize;
}
.header-bot{
    display: flex;
    align-items: center;
    gap: 20px;
p{
    color: var(--Paragraph-Accent-Color, #8B837D);
    font-size: 18px;
    font-weight: 400;
    text-transform: capitalize;
    width: 885px;
}    
}
`
export const TermsMiddleWrap = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     background: var(--product-background, #F6F6F6);
     padding: 80px;
     width: 100%;
     gap: 40px;

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

export const MultipleInfoWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding: 40px;

h1{
    color: var(--Text-Color, #252525);
    font-size: 43px;
    font-weight: 600;
    width: 1000px;
    text-transform: none;
}
.infos-wrap{
    display: flex;
    align-items: start;
    justify-content: center;
    gap: 15px;
h2{
    color: var(--Accent-Color, #5F9999);
    font-size: 28px;
    font-weight: 600;
}   
p{
    color: var(--Paragraph-Accent-Color, #8B837D);
    font-size: 17px;
    font-weight: 400;
    width: 790px;
} 
}
`