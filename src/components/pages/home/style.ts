import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const HomeMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 600px;

  .bg-image-left {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: start;
    flex-direction: column;
    p {
      color: var(--Home-2-Accent, #928e8b);
      font-size: 30px;
      font-weight: 400;
    }
    h3 {
      color: var(--Text-Color, #252525);
      font-size: 67px;
      font-weight: 500;
      font-style: normal;
    }
    button {
      width: 146px;
      height: 50px;
      background-color: black;
      color: white;
      border: none;
      font-size: 18px;
      font-weight: 400;
      cursor: pointer;
      margin-top: 20px;
    }
    button:hover {
      background-color: #928e8b;
    }
  }
  .Home-left {
    display: flex;
    flex-direction: column;
  }
`;
export const HomeInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DelivCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 220px;
  background: var(--product-background, #f6f6f6);
  img {
    width: 55px;
  }
  div {
    display: flex;
    flex-direction: column;
    text-align: start;
    margin-left: 150px;
    gap: 5px;
  }
`;
export const SupportCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 220px;
  background: var(--Home-2-Accent, #928e8b);
  color: white;
  img {
    width: 52px;
  }
  div {
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 5px;
  }
`;
export const SecureCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 220px;
  background: var(--Text-Color, #252525);
  color: white;
  img {
    width: 55px;
  }
  div {
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 5px;
  }
`;
export const MoneyCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 220px;
  background: var(--Home-2-Background, #efebe8);
  div {
    display: flex;
    flex-direction: column;
    text-align: start;
    margin-right: 150px;
    margin-left: 0px;
    gap: 5px;
    img {
      width: 40px;
    }
  }
`;
export const CategoryCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 100px;
  p {
    color: var(--Paragraph-Accent-Color, #8b837d);
    font-size: 18px;
    font-weight: 200;
  }
`;
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
  margin-bottom: 130px;
`;

export const CategoryDiv = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 332px;
  height: 134px;
  background: var(--product-background, #f6f6f6);
  gap: 30px;
  text-decoration: none;
  cursor: pointer;
  img {
    width: 117px;
    height: 101px;
  }
  b {
    color: var(--Text-Color, #252525);
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    width: 150px;
  }
  h6 {
    color: var(--Text-Color, #252525);
    font-size: 15px;
    font-weight: 400;
  }
  p {
    color: var(--Home-2-Accent, #928e8b);
    font-size: 15px;
    font-weight: 400;
  }
  .text-wrap {
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 5px;
  }
  .price-wrap {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

export const ProductsMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--product-background, #f6f6f6);
  width: 100%;
  height: 820px;

  .products-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      color: var(--Text-Color, #252525);
      font-size: 36px;
      font-weight: 600;
    }
    p {
      color: var(--Paragraph-Accent-Color, #8b837d);
      font-size: 18px;
      font-weight: 200;
    }
  }
`;

export const FeaturedPros = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 772px;

  .Menu-featured-head {
    display: flex;
    flex-direction: column;
    text-align: center;
    h1 {
      color: var(--Text-Color, #252525);
      font-size: 36px;
      font-weight: 600;
    }
    p {
      color: var(--Paragraph-Accent-Color, #8b837d);
      font-size: 18px;
      font-weight: 300;
    }
  }
  .featured-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    .first-part {
      display: flex;
      flex-direction: column;
      gap: 20px;

      h1 {
        color: var(--Title-Color, #1a1a1a);
        font-size: 42px;
        font-weight: 500;
      }
      b {
        color: var(--Substitute-Accent-Color, #daa174);
        font-size: 30px;
        font-weight: 600;
      }
      p {
        color: var(--Paragraph-Accent-Color, #8b837d);
        font-size: 27px;
        font-weight: 300;
        text-decoration: line-through;
      }
      img {
        width: 109px;
      }
    }
  }
`;
export const FeaturedAdding = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 30px;
`;
export const MainAddWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  b {
    color: var(--Text-Color, #252525);
    font-size: 20px;
    font-weight: 600;
  }
  p {
    color: var(--Paragraph-Accent-Color, #8b837d);
    font-size: 20px;
    font-weight: 300;
  }
  button {
    width: 270px;
    height: 60px;
    background-color: black;
    color: white;
    border: none;
    font-size: 19px;
    font-weight: 500;
    cursor: pointer;
  }
  button:hover {
    background-color: #928e8b;
  }
  .social-media-icons {
    display: flex;
    align-items: center;
    justify-content: right;
    gap: 20px;
  }
`;

export const IncrDecrContainer = styled.div`
  display: flex;
  gap: 20px;

  div {
    display: flex;
    gap: 10px;

    .IncrDecrButtons {
      width: 31px;
      height: 34px;
      font-size: 20px;
      background: var(--product-background, #f6f6f6);
      color: black;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    p {
      color: #000;
      font-size: 20px;
      font-weight: 600;
    }
  }
`;

export const AddingImgCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  .little-imgs {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  div {
    border-radius: 10px;
    cursor: pointer;
  }
`;
export const SummerSale = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 320px;
  width: 100%;
  height: 140px;
  background: var(--Home-2-Background, #efebe8);
  h2 {
    color: var(--Text-Color, #252525);
    font-size: 23px;
    font-weight: 600;
  }
  p {
    color: var(--Substitute-Accent-Color, #daa174);
    font-size: 23px;
    font-weight: 600;
  }
  button {
    width: 180px;
    height: 58.585px;
    background-color: black;
    color: white;
    border: none;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
  }
  button:hover {
    background-color: #928e8b;
  }
`;
export const LatestPickCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  gap: 50px;
  margin-bottom: 100px;

  .latest-header {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .product-image {
    width: 290px;
    height: 270px;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 60px 4px;
      transition: transform 0.4s ease, box-shadow 0.3s ease;
      transform: scale(1.04);
    }
  }
`;
export const LatestPickWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1500px;
  width: 100%;
  gap: 20px;
`;
export const LatestProducts = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-decoration: none;

  .texts-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      color: var(--Text-Color, #252525);
      font-size: 22px;
      font-weight: 600;
    }
    p {
      color: var(--Substitute-Accent-Color, #daa174);
      font-size: 23px;
      font-weight: 600;
      text-transform: capitalize;
    }
  }
`;
export const DownloadApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .download-wrap {
    display: flex;
  }
  .left-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    h1 {
      color: var(--Text-Color, #252525);
      font-size: 40px;
      font-weight: 700;
    }
    p {
      color: var(--Paragraph-Accent-Color, #8b837d);
      font-size: 16px;
      font-weight: 400;
    }
    label {
      color: var(--Home-2-Accent, #928e8b);
      font-size: 14px;
      font-weight: 300;
    }
    button {
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
    button:hover {
      background-color: #928e8b;
    }
  }
  .downloadapp {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
    div {
      display: flex;
      align-items: center;
      gap: 15px;
    }
  }
  .drawer-img {
    width: 380px;
  }
`;
export const ReadAboutIndustry = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 776px;
  gap: 50px;
  .read-header {
    display: flex;
    flex-direction: column;
    text-align: center;
    h1 {
      color: var(--Text-Color, #252525);
      font-size: 36px;
      font-weight: 600;
    }
    p {
      color: var(--Secondary-Text-Color, #8b837d);
      font-size: 18px;
      font-weight: 400;
    }
  }
`;
export const ReadAboutWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  max-width: 1500px;
  width: 100%;
`;

export const ReadAboutDivs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 480px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 60px 4px;
    transition: transform 0.4s ease, box-shadow 0.3s ease;
    transform: scale(1.04);
  }
  img {
    display: flex;
    align-items: center;
    width: 380px;
    height: 60%;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
  .read-text {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 380px;
    height: 40%;
    background-color: white;
    padding: 20px;
    gap: 5px;
    h2 {
      width: 377px;
      color: var(--Text-Color, #252525);
      font-size: 23px;
      font-weight: 600;
    }
    p {
      width: 350px;
      color: var(--Text-Color, #252525);
      font-size: 14px;
      font-weight: 300;
    }
  }
`;
export const HomeBlogLink = styled(Link)`
      color: var(--Text-Color, #252525);
      font-size: 15px;
      font-weight: 500;
      cursor: pointer;
      &:hover{
        color: #31572c;

      }
`
export const ProductsImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 288px;
    height: 350px;
  }
  .insta-wrap {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 288px;
    height: 350px;
    background: var(--product-background, #f6f6f6);
  }
  h1 {
    color: var(--Text-Color, #252525);
    font-size: 36px;
    font-weight: 600;
  }
  p {
    width: 220px;
    color: var(--Text-Color, #252525);
    font-size: 17px;
    font-weight: 300;
  }
  button {
    width: 123px;
    height: 40px;
    background: black;
    color: white;
    border: none;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
  }
  button:hover {
    background: #5f9999;
  }
`;
