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
