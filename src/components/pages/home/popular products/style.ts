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
  color: ${({ active }) =>
    active ? "black" : "var(--Home-2-Accent, #928e8b)"};
  font-size: 21px;
  font-weight: ${({ active }) => (active ? "600" : "400")};
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

export const PopularWrap = styled.div`
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
  margin-top: 20px;

  .products-div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    .product-image {
      position: relative;
      overflow: hidden;
      border-radius: 125px;
      width: 250px;
      height: 250px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .product-image img {
      width: 100%;
      height: auto;
      display: block;
      transition: transform 0.3s ease;
    }
    .product-image:hover img {
      transform: scale(1.05);
    }
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
      opacity: 0;
      transition: opacity 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .product-image:hover .overlay {
      opacity: 1;
    }

    .icons {
      display: flex;
      align-items: center;
      gap: 12px;
      background: #222;
      padding: 5px 10px;
      border-radius: 8px;
      margin-top: 120px;
    }

    .icons button {
      background: transparent;
      border: none;
      color: white;
      cursor: pointer;
      padding: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .texts-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;

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
  }
`;
