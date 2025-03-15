import { Link } from "react-router-dom";
import styled from "styled-components";

export const SignUpCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px;
  gap: 30px;

  h1 {
    color: var(--Text-Color, #252525);
    text-align: center;
    font-size: 36px;
    font-weight: 600;
    line-height: 120%;
  }
  .radio-wrap {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
    input {
      width: 406px;
      height: 48px;
      background: var(--product-background, #f6f6f6);
      border: none;
      padding: 10px;
    }
    label {
      color: var(--Text-Color, #252525);
      font-size: 14px;
      font-weight: 400;
      line-height: 160%;
      margin-top: 15px;
    }
    button {
      width: 406px;
      height: 54px;
      background: var(--Accent-Color, #5f9999);
      border: none;
      color: white;
      color: var(--Color-white, #fff);
      font-size: 17px;
      font-weight: 600;
      margin-top: 30px;
      cursor: pointer;
      &:hover {
        background-color: black;
      }
    }
  }
  .link-page {
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--Paragraph-Accent-Color, #8b837d);
    font-size: 14px;
    font-weight: 300;
    line-height: 140%;
    margin-top: -15px;
  }
`;
export const SignUpInLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: black;

  &:hover {
    color: #5f9999;
  }
`;
export const P = styled(Link)`
  text-decoration: none;
  color: var(--Paragraph-Accent-Color, #8b837d);
  &:hover {
    cursor: pointer;
    color: black;
  }
`;
