import styled from "styled-components";

export const ProfileCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;
  padding-bottom: 100px;
`;

export const ProfileWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;

  .edit-wrap {
    display: flex;
    flex-direction: column;
    padding: 75px;
    width: 1000px;
    height: 500px;
    box-shadow: 0px 2px 20px 0px rgba(9, 16, 20, 0.06);
    gap: 20px;
    h2{
        color: var(--Text-Color, #252525);
        font-size: 17px;
        font-weight: 600;
    }
    form {
      display: flex;
      flex-direction: column;
      input {
        width: 400px;
        height: 45px;
        background: var(--product-background, #f6f6f6);
        border: none;
        padding: 10px;
      }
      label {
        margin-top: 10px;
        color: var(--Text-Color, #252525);
        font-size: 14px;
        font-weight: 450;
        line-height: 160%;
      }
    }
    button {
      width: 80px;
      height: 36px;
      background-color: var(--Accent-Color, #5f9999);
      cursor: pointer;
      border: none;
      color: white;
      &:hover{
        background-color: #928e8b;
        transition: all 0.2s ease;
      }
    }
  }
`;
