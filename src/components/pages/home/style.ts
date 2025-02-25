import styled from "styled-components";

export const HomeContainer = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
`
export const HomeMain = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;
     width: 100%;
     height: 600px;

.bg-image-left{
     display: flex;
     align-items: center;
     justify-content: center;
     text-align: start;
     flex-direction: column;
p{
    color: var(--Home-2-Accent, #928E8B);
    font-size: 30px;
    font-weight: 400;
}
h3{
    color: var(--Text-Color, #252525);
    font-size: 67px;
    font-weight: 500;
    font-style: normal;
}
button{
    width: 196px;
    height: 57px;
    background-color: black;
    color: white;
    border: none;
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;
    margin-top: 20px;
}
button:hover{
    background-color: #928E8B;
}
}
.Home-left{
    display: flex;
    flex-direction: column;
}
`
export const HomeInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const DelivCon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 245px;
    background: var(--product-background, #F6F6F6);
img{
    width: 61px;
}
div{
    display: flex;
    flex-direction: column;
    text-align: start;
    margin-left: 150px;
}
`
export const SupportCon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 320px;
    height: 245px;  
    background: var(--Home-2-Accent, #928E8B);
    color: white;
img{
    width: 61px;
}
div{
    display: flex;
    flex-direction: column;
    text-align: start;
    
}
`
export const SecureCon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 320px;
    height: 245px;  
    background: var(--Text-Color, #252525);
    color: white;
img{
    width: 61px;
}
div{
    display: flex;
    flex-direction: column;
    text-align: start;
    
}
`
export const MoneyCon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 245px;
    background: var(--Home-2-Background, #EFEBE8);
div{
    display: flex;
    flex-direction: column;
    text-align: start;
    margin-right: 150px;
    margin-left: 0px;
img{
    width: 53px;
}
}
`
export const CategoryCon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top:100px;
p{
    color: var(--Paragraph-Accent-Color, #8B837D);
    font-size: 18px;
    font-weight: 200;
}    
`
export const CategoryWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 1500px;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 70px;
    padding: 0px 18px;
    margin-bottom:130px ;
`
export const CategoryDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 332px;
    height: 134px;
    background: var(--product-background, #F6F6F6);
    gap: 30px;
    cursor: pointer;
img{
    width: 117px;
    height: 101px;
}
b{
    color: var(--Text-Color, #252525);
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
}
h6{
    color: var(--Text-Color, #252525);
    font-size: 15px;
    font-weight: 400;
}
p{
    color: var(--Home-2-Accent, #928E8B);
    font-size: 15px;
    font-weight: 400;
}
.text-wrap{
    display: flex;
    flex-direction: column;
    text-align: start;
}
.price-wrap{
    display: flex;
    align-items: center;
    gap: 5px;
}
`
export const ProductsMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--product-background, #F6F6F6);
    width: 100%;
    height: 718px;

.products-header{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
h1{
    color: var(--Text-Color, #252525);
    font-size: 36px;
    font-weight: 600;
}    
p{
    color: var(--Paragraph-Accent-Color, #8B837D);
    font-size: 18px;
    font-weight: 200;
}    
}  
`
export const ProductsMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;
    margin-top:50px;
p{
    color: var(--Home-2-Accent, #928E8B);
    font-size: 23px;
    font-weight: 400;
    cursor: pointer;
}
p:hover{
    color: black;
    border-bottom: solid 2px black;
    font-weight: 500
}
`
export const BestSellerMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px;
`
export const BestSellerPros = styled.div`
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
`
export const FeaturedPros = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 772px;

.Menu-featured-head{
    display: flex;
    flex-direction: column;
    text-align: center;
h1{
    color: var(--Text-Color, #252525);
    font-size: 36px;
    font-weight: 600;
}    
p{
    color: var(--Paragraph-Accent-Color, #8B837D);
    font-size: 18px;
    font-weight: 300;
}
}
.featured-left{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
.first-part{
    display: flex;
    flex-direction: column;
    gap: 20px;

h1{
    color: var(--Title-Color, #1A1A1A);
    font-size: 42px;
    font-weight: 500;
}    
b{
    color: var(--Substitute-Accent-Color, #DAA174);
    font-size: 30px;
    font-weight: 600;
}
p{
    color: var(--Paragraph-Accent-Color, #8B837D);
    font-size: 27px;
    font-weight: 300;
    text-decoration: line-through;
}
img{
    width: 109px;
}
}
}    
`
export const FeaturedAdding = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    gap: 30px;
`
export const MainAddWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

b{
    color: var(--Text-Color, #252525);
    font-size: 20px;
    font-weight: 600;
}    
p{
    color: var(--Paragraph-Accent-Color, #8B837D);
    font-size: 20px;
    font-weight: 300;
}
button{
    width: 270px;
    height: 60px;
    background-color: black;
    color: white;
    border: none;
    font-size: 19px;
    font-weight: 500;
    cursor: pointer;
}
button:hover{
    background-color: #928E8B;
}
.social-media-icons{
    display: flex;
    align-items: center;
    justify-content: right;
    gap: 20px;
}
`
export const AddingImgCon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
.little-imgs{
    display: flex;
    flex-direction: column;
    gap: 20px;
}    

div{
    border-radius: 10px;
    cursor: pointer;
}
`
export const SummerSale = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 320px;
    width: 100%;
    height: 140px;
    background: var(--Home-2-Background, #EFEBE8);
h2{
    color: var(--Text-Color, #252525);
    font-size: 23px;
    font-weight: 600;
}    
p{
    color: var(--Substitute-Accent-Color, #DAA174);
    font-size: 23px;
    font-weight: 600;
}
button{
    width: 180px;
    height: 58.585px;
    background-color: black;
    color: white;
    border: none;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
}
button:hover{
    background-color: #928E8B;
}
`
export const LatestPickCon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

.latest-header{
    display: flex;
    flex-direction: column;
    text-align: center;
h1{
    color: var(--Text-Color, #252525);
    font-size: 36px;
    font-weight: 600;
}
p{
    color: var(--Paragraph-Accent-Color, #8B837D);
    font-size: 18px;
    font-weight: 300;
}
}
`
export const LatestPickWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1500px;
    width: 100%;
    gap: 0px;
    padding: 0px 100px 100px 100px;
`
export const LatestProducts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 80px;
    margin-top: 100px;
    padding: 0px 50px ;

.picks-bg{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 180px;
    border-radius:100px;
    background: url(<path-to-image>) lightgray 50% / cover no-repeat;
    cursor: pointer;
img{
    width: 320px;
}
}
.texts-wrap{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
b{
    color: var(--Text-Color, #252525);
    font-size: 20px;
    font-weight: 600;

}
p{
    color: var(--Substitute-Accent-Color, #DAA174);
    font-size: 20px;
    font-weight: 600;
}
}
`
export const DownloadApp = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

.download-wrap{
    display: flex;
}    
.left-wrap{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
h1{
    color: var(--Text-Color, #252525);
    font-size: 40px;
    font-weight: 700;
}
p{
    color: var(--Paragraph-Accent-Color, #8B837D);
    font-size: 16px;
    font-weight: 400;
}
label{
    color: var(--Home-2-Accent, #928E8B);
    font-size: 14px;
    font-weight: 300;
}
button{
    width: 150px;
    height: 50px;
    background-color: black;
    color: white;
    border: none;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    margin-top: 20px;
}
button:hover{
    background-color: #928E8B;
}
}
.downloadapp{
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
div{
    display: flex;
    align-items: center;
    gap: 15px;
}    
}
.drawer-img{
    width: 380px;
}    
`
export const ReadAboutIndustry = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 776px;
    gap: 50px;
.read-header{
    display: flex;
    flex-direction: column;
    text-align: center;
h1{
    color: var(--Text-Color, #252525);
    font-size: 36px;
    font-weight: 600;
}
p{
    color: var(--Secondary-Text-Color, #8B837D);
    font-size: 18px;
    font-weight: 400;
}
}
`
export const ReadAboutWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
    gap: 20px;
    flex-wrap: wrap;
    max-width: 1500px;
    width: 100%;
`

export const ReadAboutDivs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 480px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

img{
    display: flex;
    align-items: center;
    width: 380px;
    height: 62%;
    border-top-right-radius:5px;
    border-top-left-radius:5px;
}    
.read-text{
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 380px;
    height: 38%;
    background-color: white;
    padding:20px;
    gap: 5px;
h2{
    width: 377px;
    color: var(--Text-Color, #252525);
    font-size: 23px;
    font-weight: 600;
}
p{
    width: 350px;
    color: var(--Text-Color, #252525);
    font-size: 14px;
    font-weight: 300;
}
b{
    color: var(--Text-Color, #252525);
    font-size: 15px;
    font-weight: 500;
    text-decoration-line: underline;
    text-decoration-style: solid;
    cursor: pointer;
}
}
`
export const ProductsImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
img{
    width: 288px;
    height: 350px;  
    cursor: pointer;
}    
.insta-wrap{
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 288px;
    height: 350px;
    background: var(--product-background, #F6F6F6);
}
h1{
    color: var(--Text-Color, #252525);
    font-size: 36px;
    font-weight: 600;
}
p{
    width: 220px;
    color: var(--Text-Color, #252525);
    font-size: 17px;
    font-weight: 300;
}
button{
    width: 123px;
    height: 40px;
    background: black;
    color: white;
    border: none;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
}
button:hover{
    background: #5F9999;
}
`