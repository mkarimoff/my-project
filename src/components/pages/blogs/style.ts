import { Link } from "react-router-dom";
import styled from "styled-components";

export const BlogsCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;

  .loading-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 10px;
    margin-top: 20px;

    p {
      font-size: 18px;
      color: #5f9999;
    }
  }

  .no-results {
    font-size: 18px;
    color: #888;
    text-align: center;
    margin-top: 20px;
    width: 100%;
  }
`;
export const AboutBgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  b {
    font-size: 40px;
    font-weight: 500;
  }
  p {
    font-size: 15px;
    font-weight: 500;
  }
  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const BlogsMainWrap = styled.div`
  display: flex;
  align-items: start;
  width: 100%;
  justify-content: center;
  padding: 0px 0px 0px 100px;
`;
export const BlogsLeftWrap = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  input {
    width: 300px;
    height: 45px;
    background: var(--product-background, #f6f6f6);
    padding: 20px;
    border: none;
  }
  h1 {
    color: var(--Text-Color, #252525);
    font-size: 30px;
    font-weight: 600;
    padding: 10px 0px;
  }
  .categories-wrap {
    display: flex;
    gap: 210px;
    p {
      color: black;
      font-size: 19px;
      font-weight: 500;
    }
    div {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
`;
export const RecentPostsCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  .recent-posts {
    display: flex;
    align-items: center;
    gap: 20px;
    img {
      width: 120px;
      height: 85px;
    }
    h2 {
      color: var(--Text-Color, #252525);
      font-size: 23px;
      font-weight: 500;
    }
    p {
      color: var(--Accent-Color, #5f9999);
      font-size: 14px;
      font-weight: 500;
    }
  }
`;
export const NewsLetterCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 270px;
    height: 45px;
    background: var(--product-background, #f6f6f6);
    padding: 20px;
    border: none;
  }
  button {
    color: white;
    border: none;
    width: 100px;
    height: 45px;
    background-color: #5f9999;
    color: var(--White-Color, #fff);
    font-size: 15px;
    font-weight: 400;
    cursor: pointer;
  }
  button:hover {
    background-color: #588b8b;
    transition: all 0.2s ease;
  }
`;
export const BlogsRightCon = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1500px;
  width: 100%;
  gap: 20px;
`;
export const BlogsRightWrap = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 350px;
  height: 450px;
  text-decoration: none;
  color: black;
  gap: 10px;
  text-decoration: none;

  img {
    width: 100%;
    height: 50%;
  }
  .texts-wrap {
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 10px;
    height: 50%;
    h1 {
      color: var(--Text-Color, #333);
      font-size: 28px;
      font-weight: 600;
    }
    p {
      color: var(--Accent-Color, #5f9999);
      font-size: 16px;
      font-weight: 500;
    }
    h3 {
      color: var(--Secondary-Text-Color, #8b837d);
      font-size: 16px;
      font-weight: 400;
      width: 320px;
    }
    Link {
      width: 97px;
      height: 35px;
      border: none;
      background-color: black;
      color: white;
      font-weight: 500;
      cursor: pointer;
    }
    Link:hover {
      background-color: #928e8b;
      transition: all 0.2s ease;
    }
  }
`;
export const ReadMore = styled.div`
  width: 97px;
  height: 35px;
  border: none;
  background-color: black;
  color: white;
  font-weight: 500;
  cursor: pointer;
  padding: 5px 0px 5px 0px;
  text-align: center;
  &:hover {
    background-color: #928e8b;
    transition: all 0.2s ease;
  }
`;
