import { Link } from "react-router-dom";
import styled from "styled-components";

export const ShopConH = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-top: 20px;
  gap: 50px;
  margin-bottom: 100px;
  margin-right: 100px;

  .latest-header {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .product-image {
    width: 320px;
    height: 270px;
    border-bottom-left-radius:15px;
    border-top-left-radius:15px;
  }
`;
export const ShopProductsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const ShopProducts = styled(Link)`
  display: flex;
  gap: 50px;
  text-decoration: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 15px;
  width: 800px;
  &:hover {
      box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 60px 4px;
      transition: transform 0.4s ease, box-shadow 0.3s ease;
      transform: scale(1.04);
    }

  .texts-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 70px;
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
    img{
        margin-right: -400px;
    }
  }
`;
