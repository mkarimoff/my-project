import styled from "styled-components";

export const PagesCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 70px;
  padding-bottom: 70px;
`;

export const SuccessWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 180px;
  padding: 20px;
  .texts-wrap{
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  p {
    color: black;
    font-size: 18px;
    width: 500px;
  }
  h1{
    color: black;
    font-size: 48px;
    font-weight: 600;
    line-height: 120%;
  }
  b{
    color: black;
    font-size: 18px;
    font-weight: 600;
    width: 480px;
  }
  span{
    font-weight: 600;
  }
`;

export const HistoryWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 20px;
.components{
    display: flex;
    flex-direction: column;
    gap: 10px;
    img{
        width: 450px;
        height: 300px;
    }
    h2{
        font-size: 22px;
        font-weight: 600;
        text-transform: uppercase;
    }
    p{
        font-size: 16px;
        font-weight: 20;
        width: 400px;
    }

}
`