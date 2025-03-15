import { Link } from "react-router-dom";
import styled from "styled-components";

export const ShopCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
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
export const ShopProductsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1500px;
  width: 100%;
  gap: 20px;
`;
export const ShopProducts = styled(Link)`
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
