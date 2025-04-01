import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  margin: 40px 0;
`;

export const MenuBtn = styled.button<{ active: boolean }>`
  background-color: var(--product-background, #f6f6f6);
  border: none;
  border-bottom: ${({ active }) => (active ? "solid 1.5px black" : "none")};
  color: ${({ active }) => active ? "black" : "var(--Home-2-Accent, #928e8b)"};
  font-size: 21px;
  font-weight: ${({ active }) => (active ? "600" : "400")};
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

export const PopularWrap = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: none;
  text-decoration: none;
`;
export const PopularItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;

  .products-div {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      border-radius: 125px;
      width: 260px;
      height: 260px;
    }
  }
  .texts-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
  }
  p {
    color: var(--Substitute-Accent-Color, #daa174);
    font-size: 20px;
    font-weight: 600;
  }
  b {
    color: var(--Text-Color, #252525);
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
  }
`;
