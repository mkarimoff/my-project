import styled from "styled-components"
import { AboutBgWrap } from "../pages/about/style"
import arrow from '../../assets/svg/smallarrow.svg'
import { useNavigate } from "react-router-dom"
 


const ErrorPage = () => {
  let navigate = useNavigate();
  return (
    <ErrorCon>
         <div className="collection-bg">
          <AboutBgWrap>
             <b>404</b>
             <div
               style={{
                 width: "900px",
                 height: "0.5px",
                 backgroundColor: "white",
                 marginBottom: "-25px",
                 marginRight: "-155px",
               }}
             ></div>
             <div>
               <p>Home</p>
               <img src={arrow} alt="arrow" />
               <p>404</p>
             </div>
          </AboutBgWrap>
       </div>
        <div className="error-wrapper">
          <p>Oops</p>
          <h1>404</h1>
          <b>That Page Can’t Be Found.</b>
          <div className="buttons-wrap">
            <button onClick={() => {navigate(-1);}}>Go back</button>
            <button onClick={() => navigate('/')}>Home Page</button>
          </div>
        </div>
    </ErrorCon>
  )
}

export default ErrorPage

export const ErrorCon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 900px;

.error-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1050px;
    height: 600px;
    margin: 100px;
p{
    color: var(--Text-Color, #252525);
    font-size: 30px;
    font-weight: 600;
}
h1{
    color: var(--Text-Color, #252525);
    font-size: 160px;
    font-weight: 700;
}
b{
    color: var(--Text-Color, #252525);
    font-size: 50px;
    font-weight: 600;
}
.buttons-wrap{
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 30px;
button{
    color: white;
    font-size: 18px;
    font-weight: 400;
    background-color: var(--Accent-Color, #5F9999);
    border: none;
    padding:5px 10px;
    cursor: pointer;
}
button:hover{
    background-color: black;
    color: white;
}
}
}
`