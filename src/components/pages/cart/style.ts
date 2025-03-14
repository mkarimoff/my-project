import styled from "styled-components";

export const CartMainCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CartWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 150px;
  padding-bottom: 150px;

  .Products-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 1000px;
    height: 550px;
    gap: 10px;
    box-shadow: 0px 2px 20px 0px rgba(9, 16, 20, 0.06);

    .category-texts {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 110%;
      p {
        color: var(--Text-Color, #252525);
        font-size: 18px;
        font-weight: 500;
      }
    }
    .line {
      display: flex;
      background-color: #e9e9e9;
      height: 1px;
      width: 91%;
    }
    .calculated-prices {
      display: flex;
      flex-direction: column;
      align-items: end;
      text-align: center;
      width: 90%;
      text-align: right;
      .price-names {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: right;
      }
      p {
        color: var(--Color-neutral-600, #525252);
        font-size: 19px;
        font-weight: 300;
      }
      b {
        color: var(--Text-Color, #252525);
        font-size: 19px;
        font-weight: 500;
      }
      h4 {
        color: var(--Accent-Color, #5f9999);
        font-size: 19px;
        font-weight: 600;
      }
      h5 {
        color: var(--Accent-Color, #5f9999);
        font-size: 14px;
        font-weight: 500;
      }
    }
    .price {
      display: flex;
      flex-direction: column;
      justify-content: right;
    }
    .small-line {
      display: flex;
      background-color: #e9e9e9;
      height: 1px;
      width: 165px;
    }
  }
`;
