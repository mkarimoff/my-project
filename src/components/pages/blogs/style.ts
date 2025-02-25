import styled from "styled-components";

export const BlogsCon = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;

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

export const BlogsMainWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
`
export const BlogsLeftWrap = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 10px;

input{
    width: 350px;
    height: 60px;
    background: var(--product-background, #F6F6F6);
    padding: 20px;
    border: none;
}
h1{
    color: var(--Text-Color, #252525);
    font-size: 30px;
    font-weight: 600;
}
.categories-wrap{
    display: flex;
    gap: 180px;
p{
    color: black;
    font-size: 19px;
    font-weight: 500;
}
div{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
}
`
export const BlogsRightWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`