import styled from "styled-components";

export const ShopCon = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
     gap: 40px;
`
export const BuyingWrap = styled.div`
     display: flex;
     gap: 30px;

.imgs-wrap{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex: 1;
}
.big-image{
    width: 460px;
    height: 600px;
    border-radius: 7px;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
}
.lower-3pic{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 470px;
img{
    width: 140px;
    height: 147px;
    border-radius: 7px;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
}
}
`
export const BuyingRight = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
   
.buying-head{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 458px;
    border-bottom: solid 2px #E9E9E9;
    gap: 20px;
    padding-bottom: 30px;
h1{
    color: var(--Text-Color, #252525);
    font-size: 40px;
    font-weight: 600;
}
b{
    color: var(--Accent-Color, #5F9999);
    font-size: 20px;
    font-weight: 600;
}
p{
    color: var(--Paragraph-Accent-Color, #8B837D);
    font-size: 20px;
    font-weight: 300;
}
}    
`
export const ShopButtonsCon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 20px;

p{
    color: var(--Accent-Color, #5F9999);
    font-size: 18px;
    font-weight: 500;
}
.buttons-wrap{
     display: flex;
     align-items: center;
     gap: 20px;
     border-bottom: solid 2px #E9E9E9;
     padding-bottom: 30px;

button{
    width: 220px;
    height: 60px;
    background-color: var(--product-background, #F6F6F6);
    border: none;
    color: var(--Text-Color, #252525);
    font-size: 17px;
    font-weight: 500;
    cursor: pointer;
}    
button:hover{
    background-color: black;
    color: white;
}
}
.texts-con{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 10px;  
    
.icons-wrap{
    display: flex;
    align-items: center;
    margin-left: -10px;
p{
    color: var(--Text-Color, #252525);
    font-size: 18px;
    font-weight: 400;
}
}
.texts-wrap{
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;

p{
    width: 550px;
    color: var(--Paragraph-Accent-Color, #8B837D);
    font-size: 17px;
    font-weight: 400;
}
.delivery-wrap{
    display: flex;
    flex-direction: column;
    gap: 10px;
p{
    color: var(--Text-Color, #252525);
    font-size: 16px;
    font-weight: 400;
}
div{
    display: flex;
    align-items: center;
    gap: 10px;
}
.social-medias{
    display: flex;
    align-items: center;
div{
    display: flex;
    align-items: center;
    margin-bottom: -5px;

}
}
}
}
}
`
export const MottoCon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 100px;

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
export const ShopPopPros = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 600px;
    background: var(--product-background, #F6F6F6);
`
export const ShopPopProsWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 70px;
    
    
.popular-products{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    margin-top: 60px;

.products-div{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    border-radius:100px;
    background-color: white;
    cursor: pointer;

img{
    width: 280px;
}    
}    
.texts-wrap{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
}
p{
    color: var(--Substitute-Accent-Color, #DAA174);
    font-size: 20px;
    font-weight: 600;
}
}
`
export const ShopNewCon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 600px;
`
export const ShopNewWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 70px;
    
    
.popular-products{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    margin-top: 60px;

.products-div{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    border-radius:100px;
    background: var(--product-background, #F6F6F6);
    cursor: pointer;
    

img{
    width: 280px;
}    
}    
.texts-wrap{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
}
p{
    color: var(--Substitute-Accent-Color, #DAA174);
    font-size: 20px;
    font-weight: 600;
}
}
`


