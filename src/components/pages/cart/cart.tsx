import { AboutBgWrap } from "../../pages/about/style"
import arrow from "../../../assets/svg/smallarrow.svg";
import greenarrow from "../../../assets/svg/greenarrow.svg";
import { CartMainCon, CartWrap } from "./style";
import { useNavigate } from "react-router-dom";



const CartComponent = () => {

  const navigate = useNavigate(); 
  
  const handleClick = () => {
    navigate("/shop"); 
  };
  return (
    <CartMainCon>
      <div className="collection-bg">
        <AboutBgWrap>
          <b>Cart</b>
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
            <p>Cart</p>
          </div>
        </AboutBgWrap>
      </div>
      <CartWrap>
        <div className="Products-wrap">
          <div className="category-texts">
            <p style={{ marginRight: "50px" }}>Product Name</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total Price</p>
          </div>
          <div className="line"></div>
          <div>products</div>
          <div className="line"></div>
          <div className="calculated-prices">
            <div style={{display:'flex',alignItems:'center',gap:'30px'}}>
              <div className="price-names">
                <p>SubTotal:</p>
                <p>Cargo:</p>
                <p>Discount:</p>
              </div>
              <div className="price">
                <b>$60.00</b>
                <b>$0.00</b>
                <b>$10.00</b>
              </div>
            </div>
                <div className="small-line"></div>
                <div style={{display:'flex',gap:'30px',}}>
                <b>Total:</b>
                <h4>$100.00</h4>
                </div>
            <div style={{display:'flex',alignItems:'center', gap:'5px',marginTop:'25px',cursor:'pointer'}} onClick={handleClick} >
            <h5>Continue Shopping </h5>
            <img src={greenarrow} alt="" style={{width:'15px'}} />
            </div>
          </div>
        </div>
      </CartWrap>
    </CartMainCon>
  );
};

export default CartComponent;
