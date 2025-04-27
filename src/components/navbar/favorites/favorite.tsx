import { useEffect } from 'react';
import { AboutBgWrap } from '../../pages/about/style';
import arrow from '../../../assets/svg/smallarrow.svg';
import { FavoriteWrap, FavoriteMainCon } from './style';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useAuth } from '../../context/authContext';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { toast } from 'react-toastify';

interface FavoriteItem {
  id: number;
  photo: string;
  header: string; 
  price: number;
}

interface CartItem {
  id: number;
  name: string;
  photo?: string;
  price: number;
  quantity: number;
  discount?: number;
}

const FavoriteComponent = () => {
  const { isAuthenticated, cart, setCart, favorites, setFavorites, user } = useAuth();

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

  const handleAddToCart = async (product: FavoriteItem) => {
    const cartItem: CartItem = {
      id: product.id,
      name: product.header,
      photo: product.photo,
      price: product.price,
      quantity: 1,
      discount: 0,
    };

    try {
      const existingItem = cart.find((item) => item.id === cartItem.id);
      let newCart;
      if (existingItem) {
        newCart = cart.map((item) =>
          item.id === cartItem.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        newCart = [...cart, cartItem];
      }

      if (!isAuthenticated) {
        localStorage.setItem('guestCart', JSON.stringify(newCart));
        setCart(newCart);
        toast.success('Added to guest cart');
      } else {
        const token = localStorage.getItem('authToken');
        const response = await axios.post(
          'http://localhost:5050/dev-api/cart',
          { cart: newCart },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setCart(response.data.cart);
        localStorage.setItem(`cart_${user?.email}`, JSON.stringify(response.data.cart));
        toast.success('Product added to cart!');
      }
    } catch (error: any) {
      console.error('Failed to add to cart:', error);
      toast.error(error.response?.data?.error || 'Failed to add product to cart');
    }
  };

  const handleRemove = async (id: number) => {
    const newFavorites = favorites.filter((item) => item.id !== id);
    try {
      if (!isAuthenticated) {
        localStorage.setItem('guestFavorites', JSON.stringify(newFavorites));
        setFavorites(newFavorites);
        toast.success('Removed from guest favorites');
      } else {
        const token = localStorage.getItem('authToken');
        const response = await axios.post(
          'http://localhost:5050/dev-api/cart/favorites',
          {
            favorites: newFavorites.map((fav) => ({
              id: fav.id,
              name: fav.header,
              photo: fav.photo,
              price: fav.price,
            })),
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const mappedFavorites = response.data.favorites.map((item: any) => ({
          id: item.id,
          photo: item.photo || '',
          header: item.name,
          price: item.price || 0,
        }));
        setFavorites(mappedFavorites);
        localStorage.setItem(`favorites_${user?.email}`, JSON.stringify(mappedFavorites));
        toast.success('Removed from favorites');
      }
    } catch (error: any) {
      console.error('Failed to remove from favorites:', error);
      toast.error(error.response?.data?.error || 'Failed to remove from favorites');
    }
  };

  return (
    <FavoriteMainCon>
      <div className="collection-bg">
        <AboutBgWrap>
          <b>Favorites</b>
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
            <p>Favorites</p>
          </div>
        </AboutBgWrap>
      </div>

      <FavoriteWrap>
        <div className="Products-wrap" data-aos="fade-up">
          {favorites.length === 0 ? (
            <p>Your favorites list is empty.</p>
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
                    <th style={{ padding: '12px' }}>Product</th>
                    <th style={{ padding: '12px', textAlign: 'center' }}>Price</th>
                    <th style={{ padding: '12px', textAlign: 'center' }}></th>
                    <th style={{ padding: '12px', textAlign: 'center' }}></th>
                  </tr>
                </thead>
                <tbody>
                  {favorites.map((item: FavoriteItem) => (
                    <tr key={item.id} style={{ borderBottom: '1px solid #eee' }}>
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
                            alt={item.header}
                            style={{
                              height: '70px',
                              objectFit: 'cover',
                              marginRight: '15px',
                            }}
                          />
                        )}
                        {item.header || 'Unknown Product'}
                      </td>
                      <td
                        style={{
                          padding: '12px',
                          textAlign: 'center',
                          fontSize: '16px',
                          fontWeight: 'bold',
                        }}
                      >
                        ${item.price.toFixed(2)}
                      </td>
                      <td style={{ padding: '12px', textAlign: 'center' }}>
                        <button
                          onClick={() => handleAddToCart(item)}
                          style={{
                            padding: '5px 10px',
                            backgroundColor: '#000',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '12px',
                          }}
                        >
                          Add to Cart
                        </button>
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
                          <DeleteIcon style={{ color: 'red' }} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      </FavoriteWrap>
    </FavoriteMainCon>
  );
};

export default FavoriteComponent;