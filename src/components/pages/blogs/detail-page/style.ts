import styled from "styled-components";

export const BlogDetailCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-bottom: 100px;

  .product-image {
    width: 1000px;
    height: 600px;
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
    gap: 30px;

    h2 {
      font-size: 20px;
      color: #252525;
      margin-bottom: 15px;
    }

    .comment-scroll-container {
      width: 100%;
      height: 340px;
      overflow-y: auto;
      scroll-behavior: smooth;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: thin;
      scrollbar-color: #5f9999 #e0e0e0;
    }

    .comment-scroll-container::-webkit-scrollbar {
      width: 8px;
    }
    .comment-scroll-container::-webkit-scrollbar-track {
      background: #e0e0e0;
      border-radius: 10px;
    }
    .comment-scroll-container::-webkit-scrollbar-thumb {
      background: #5f9999;
      border-radius: 10px;
    }
    .comment-scroll-container::-webkit-scrollbar-thumb:hover {
      background: #4a7a7a;
    }

    .comment-list {
      display: flex;
      flex-direction: column;
      gap: 30px;
      padding: 10px 0;
    }

    .new-comment {
      background-color: #f5f5f5;
      animation: highlightComment 3s ease-in-out;
      border-radius: 25px;
    }

    @keyframes highlightComment {
      0% {
        background-color: #f5f5f5;
      }
      100% {
        background-color: transparent;
      }
    }

    .comment-item {
      display: flex;
      flex-direction: column;
      padding: 20px;
      min-height: 80px;
      p {
        margin-left: 55px;
      }
    }

    .comment-header {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 10px;
      position: relative;
    }

    .user-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #607d8b;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      font-weight: bold;
    }

    .user-info {
      display: flex;
      flex-direction: column;
    }

    .comment-date {
      font-size: 12px;
      color: #888;
    }

    .comment-text {
      font-size: 14px;
      color: #333;
      margin-top: 8px;
    }

    .delete-button {
      background-color: white;
      color: red;
      border: none;
      cursor: pointer;
      font-size: 14px;
      margin-top: 15px;
      width: 50px;
    }

    .delete-button:hover {
      color: darkred;
      transition: all 0.2s ease;
    }

    textarea {
      width: 100%;
      padding: 10px;
      resize: none;
      height: 150px;
      border-radius: 10px;
      border: 1px solid #ccc;
      font-size: 14px;
      font-family: Arial, sans-serif;
      margin-top: 20px;
    }

    .submit {
      width: 100%;
      height: 45px;
      border-radius: 25px;
      color: white;
      background-color: black;
      border: none;
      cursor: pointer;
      font-size: 18px;
      margin-top: 15px;
    }

    .submit:hover {
      background-color: #928e8b;
      transition: all 0.2s ease;
    }
  }
`;
