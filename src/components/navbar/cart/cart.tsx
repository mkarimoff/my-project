import { useEffect } from 'react';
import { AboutBgWrap } from "../../pages/about/style";
import arrow from "../../../assets/svg/smallarrow.svg";
import { CartMainCon, CartWrap } from "./style";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useCart, CartItem } from './CartContext';

const CartComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    AOS.refresh();

    return () => {
      AOS.refreshHard();
    };
  }, []);

  const navigate = useNavigate(); 
  const { cart: cartItems, updateQuantity } = useCart();


  const subtotal = cartItems.reduce((acc: number, item: CartItem) => {
    const cleanPrice = typeof item.price === 'string' ? item.price.replace(/[^0-9.]/g, '') : item.price;
    const price = parseFloat(cleanPrice) || 0;
    const quantity = Number(item.quantity) || 0;
    console.log(`Item: ${item.header}, Raw Price: ${item.price}, Clean Price: ${cleanPrice}, Parsed Price: ${price}`);
    if (price === 0) {
      console.warn(`Invalid price for item ${item.header}: ${item.price}`);
    }
    return acc + price * quantity;
  }, 0);
  
  const discount = cartItems.reduce((acc: number, item: CartItem) => {
    const cleanPrice = typeof item.price === 'string' ? item.price.replace(/[^0-9.]/g, '') : item.price;
    const price = parseFloat(cleanPrice) || 0;
    const quantity = Number(item.quantity) || 0;
    const itemDiscount = Number(item.discount) || 0;
    return acc + (price * quantity * itemDiscount) / 100;
  }, 0);

  const total = subtotal - discount;

  const handleOrderClick = () => {
    navigate("/order"); 
  };

  const handleIncrement = (id: number, currentQuantity: number) => {
    updateQuantity(id, currentQuantity + 1);
  };

  const handleDecrement = (id: number, currentQuantity: number) => {
    updateQuantity(id, currentQuantity - 1);
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
        <div className="Products-wrap" data-aos="fade-up">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>
                    <th style={{ padding: '12px', width: '40%' }}>Product</th>
                    <th style={{ padding: '12px', width: '20%', textAlign: 'center' }}>Price</th>
                    <th style={{ padding: '12px', width: '20%', textAlign: 'center' }}>Quantity</th>
                    <th style={{ padding: '12px', width: '20%', textAlign: 'center' }}>Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item: CartItem) => (
                    <tr key={item.id} style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '12px', display: 'flex', alignItems: 'center' }}>
                        {item.photo && (
                          <img 
                            src={item.photo} 
                            alt={item.header} 
                            style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '15px' }}
                          />
                        )}
                        {item.header || 'Unknown Product'}
                      </td>
                      <td style={{ padding: '12px', textAlign: 'center' }}>{item.price}</td>
                      <td style={{ padding: '12px', textAlign: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2px' }}>
                          <button
                            style={{
                              width: '24px',
                              height: '24px',
                              backgroundColor: '#f0f0f0',
                              border: 'none',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              fontSize: '14px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                            onClick={() => handleDecrement(item.id, item.quantity)}
                            aria-label="Decrease quantity"
                          >
                            &lt;
                          </button>
                          <span style={{ width: '24px', textAlign: 'center', fontSize: '14px' }}>{item.quantity}</span>
                          <button
                            style={{
                              width: '24px',
                              height: '24px',
                              backgroundColor: '#f0f0f0',
                              border: 'none',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              fontSize: '14px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                            onClick={() => handleIncrement(item.id, item.quantity)}
                            aria-label="Increase quantity"
                          >
                            &gt;
                          </button>
                        </div>
                      </td>
                      <td style={{ padding: '12px', textAlign: 'center' }}>
                        ${((parseFloat(typeof item.price === 'string' ? item.price.replace(/[^0-9.]/g, '') : item.price) || 0) * item.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="calculated-prices" style={{ marginTop: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                  <div className="price-names">
                    <p>SubTotal:</p>
                    {discount > 0 && <p>Discount:</p>}
                  </div>
                  <div className="price">
                    <b>${subtotal.toFixed(2)}</b>
                    {discount > 0 && <b>-${discount.toFixed(2)}</b>}
                  </div>
                </div>
                <div className="small-line"></div>
                <div style={{ display: 'flex', gap: '30px' }}>
                  <b>Total:</b>
                  <h4>${total.toFixed(2)}</h4>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    marginTop: '25px',
                  }}
                >
                  <button
                    style={{
                      padding: '10px 20px',
                      backgroundColor: '#000',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '16px',
                    }}
                    onClick={handleOrderClick}
                  >
                    Order
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </CartWrap>
    </CartMainCon>
  );
};

export default CartComponent;

