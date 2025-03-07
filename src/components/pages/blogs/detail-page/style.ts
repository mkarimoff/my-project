import styled from "styled-components";

export const BlogDetailCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-bottom: 100px;

  .product-image {
    width: 1100px;
    height: 470px;
  }
  .texts-wrap {
    display: flex;
    flex-direction: column;
    text-align: start;
    width: 900px;
    gap: 20px;

    h1 {
      color: var(--Text-Color, #252525);
      font-size: 45px;
      font-weight: 500;
    }
  }
  .date-author-wrap {
    display: flex;
    align-items: center;
    gap: 200px;

    b {
      color: var(--Paragraph-Accent-Color, #8b837d);
      font-size: 18px;
      font-weight: 500;
    }
    p {
      color: var(--Accent-Color, #5f9999);
      font-size: 18px;
      font-weight: 500;
    }
    div {
      display: flex;
    }
  }
  .descs-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    p {
      color: var(--Paragraph-Accent-Color, #8b837d);
      font-size: 19.5px;
      font-weight: 400;
      line-height: 190%;
    }
  }
  .comments-wrap {
    display: flex;
    flex-direction: column;
    text-align: start;
    justify-content: center;
    width: 900px;
    gap: 200px;

    textarea {
      padding: 10px;
      width: 900px;
      height: 150px;
      resize: none;
      border-radius: 10px;
    }
    button {
      width: 900px;
      height: 45px;
      border-radius: 25px;
      color: white;
      background-color: black;
      border: none;
      cursor: pointer;
      font-size: 18px;
    }
    button:hover {
      background-color: #928e8b;
      transition: all 0.2s ease;
    }
  }
`;
