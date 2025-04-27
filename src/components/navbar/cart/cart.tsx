import { useEffect } from 'react';
import { AboutBgWrap } from '../../pages/about/style';
import arrow from '../../../assets/svg/smallarrow.svg';
import { CartMainCon, CartWrap } from './style';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useAuth } from '../../context/authContext';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { toast } from 'react-toastify';

interface CartItem {
  id: number;
  name: string;
  photo?: string;
  price: number;
  quantity: number;
  discount?: number;
}

const CartComponent = () => {
  const { cart, setCart, isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

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

  useEffect(() => {
    console.log('CartComponent - Current cart state:', cart);
  }, [cart]);

  useEffect(() => {
    const fetchCart = async () => {
      if (!isAuthenticated || !user) {
        const guestCart = localStorage.getItem('guestCart');
        if (guestCart) {
          setCart(JSON.parse(guestCart));
        }
        return;
      }

      try {
        const token = localStorage.getItem('authToken');
        if (!token) {
          throw new Error('No auth token found');
        }
        const response = await axios.get('http://localhost:5050/dev-api/cart', {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.data.cart && Array.isArray(response.data.cart)) {
          setCart(response.data.cart);
          localStorage.setItem(`cart_${user.email}`, JSON.stringify(response.data.cart));
        } else {
        }
      } catch (error: any) {
        toast.error('Failed to load cart');
      }
    };

    fetchCart();
  }, [isAuthenticated, user, setCart]);

  const updateQuantity = async (id: number, quantity: number) => {
    if (quantity < 1) return;
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    try {
      if (!isAuthenticated) {
        localStorage.setItem('guestCart', JSON.stringify(newCart));
        setCart(newCart);
      } else {
        const token = localStorage.getItem('authToken');
        const response = await axios.post(
          'http://localhost:5050/dev-api/cart',
          { cart: newCart },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setCart(response.data.cart);
        localStorage.setItem(`cart_${user?.email}`, JSON.stringify(response.data.cart));
      }
    } catch (error) {
      console.error('Failed to update quantity:', error);
      toast.error('Failed to update quantity');
    }
  };

  const removeFromCart = async (id: number) => {
    const newCart = cart.filter((item) => item.id !== id);
    try {
      if (!isAuthenticated) {
        localStorage.setItem('guestCart', JSON.stringify(newCart));
        setCart(newCart);
        toast.success('Removed from guest cart');
      } else {
        const token = localStorage.getItem('authToken');
        const response = await axios.post(
          'http://localhost:5050/dev-api/cart',
          { cart: newCart },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setCart(response.data.cart);
        localStorage.setItem(`cart_${user?.email}`, JSON.stringify(response.data.cart));
        toast.success('Removed from cart');
      }
    } catch (error) {
      console.error('Failed to remove from cart:', error);
      toast.error('Failed to remove from cart');
    }
  };

  const subtotal = cart.reduce((acc: number, item: CartItem) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 0;
    return acc + price * quantity;
  }, 0);

  const discount = cart.reduce((acc: number, item: CartItem) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 0;
    const itemDiscount = Number(item.discount) || 0;
    return acc + (price * quantity * itemDiscount) / 100;
  }, 0);

  const total = subtotal - discount;

  const handleOrderClick = () => {
    navigate('/order');
  };

  const handleIncrement = (id: number, currentQuantity: number) => {
    updateQuantity(id, currentQuantity + 1);
  };

  const handleDecrement = (id: number, currentQuantity: number) => {
    if (currentQuantity > 1) {
      updateQuantity(id, currentQuantity - 1);
    } else {
      removeFromCart(id);
    }
  };

  const handleRemove = (id: number) => {
    removeFromCart(id);
  };

  return (
    <CartMainCon>
      <div className="collection-bg">
        <AboutBgWrap>
          <b>Cart</b>
          <div
            style={{
              width: '900px',
              height: '0.5px',
              backgroundColor: 'white',
              marginBottom: '-25px',
              marginRight: '-155px',
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
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr
                    style={{
                      textAlign: 'left',
                      borderBottom: '1px solid #ccc',
                    }}
                  >
                    <th style={{ padding: '12px', width: '40%' }}>Product</th>
                    <th
                      style={{
                        padding: '12px',
                        width: '20%',
                        textAlign: 'center',
                      }}
                    >
                      Price
                    </th>
                    <th
                      style={{
                        padding: '12px',
                        width: '20%',
                        textAlign: 'center',
                      }}
                    >
                      Quantity
                    </th>
                    <th
                      style={{
                        padding: '12px',
                        width: '20%',
                        textAlign: 'center',
                      }}
                    >
                      Total Price
                    </th>
                    <th
                      style={{
                        padding: '12px',
                        width: '10%',
                        textAlign: 'center',
                      }}
                    >
                      Remove
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item: CartItem) => (
                    <tr
                      key={item.id}
                      style={{ borderBottom: '1px solid #eee' }}
                    >
                      <td
                        style={{
                          padding: '12px',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        {item.photo && (
                          <img
                            src={item.photo}
                            alt={item.name}
                            style={{
                              width: '50px',
                              height: '50px',
                              objectFit: 'cover',
                              marginRight: '15px',
                            }}
                          />
                        )}
                        {item.name || 'Unknown Product'}
                      </td>
                      <td style={{ padding: '12px', textAlign: 'center' }}>
                        ${item.price.toFixed(2)}
                      </td>
                      <td style={{ padding: '12px', textAlign: 'center' }}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '2px',
                          }}
                        >
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
                            onClick={() =>
                              handleDecrement(item.id, item.quantity)
                            }
                            aria-label="Decrease quantity"
                          >
                            -
                          </button>
                          <span
                            style={{
                              width: '24px',
                              textAlign: 'center',
                              fontSize: '14px',
                            }}
                          >
                            {item.quantity}
                          </span>
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
                            onClick={() =>
                              handleIncrement(item.id, item.quantity)
                            }
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td style={{ padding: '12px', textAlign: 'center' }}>
                        ${((item.price || 0) * item.quantity).toFixed(2)}
                      </td>
                      <td style={{ padding: '12px', textAlign: 'center' }}>
                        <button
                          onClick={() => handleRemove(item.id)}
                          style={{
                            border: 'none',
                            backgroundColor: 'white',
                            cursor: 'pointer',
                            fontSize: '16px',
                          }}
                        >
                          <DeleteIcon />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="calculated-prices" style={{ marginTop: '30px' }}>
                <div
                  style={{ display: 'flex', alignItems: 'center', gap: '30px' }}
                >
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
                      padding: '8px 15px',
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
