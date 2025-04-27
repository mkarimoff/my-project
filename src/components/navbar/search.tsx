import { useLocation, useNavigate } from "react-router-dom"; // Add useNavigate
import { useState, useEffect } from "react";
import { BlogsMockData } from "../pages/mockdata/blogs.mock";
import { ShopCon, ShopProductsWrap, ShopProducts } from "../pages/shop/vertical/style";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useAuth, CartItem, FavoriteItem } from "../context/authContext"; 
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from 'react-router-dom';
import stars from '../../assets/svg/stars.svg';
import styled from "styled-components";
import { toast } from 'react-toastify'; // Import toast for notifications
import axios from 'axios'; // For backend sync

interface Product {
  id: number;
  type: string;
  price: string;
  photo: string;
  header: string;
  date_name: string;
  date: string;
  author: string;
  category: string;
  author_name: string;
  description: string;
  second_description: string;
  old_price?: string | undefined;
  new_price?: string | undefined;
}

export const SearchPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  min-height: 100vh;
  margin-top: 50px;

  .search-header {
    width: 100%;
    max-width: 900px;
    margin-bottom: 40px;

    h1 {
      font-size: 32px;
      color: #252525;
      font-weight: 500;
      text-align: center;
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

const SearchPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("search") || "";

  const { cart, setCart, favorites, setFavorites, isAuthenticated, user } = useAuth();
  const navigate = useNavigate(); // For navigation
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

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
    const filtered = (BlogsMockData as Product[]).filter(
      (product) =>
        product.header.toLowerCase().includes(query.toLowerCase()) ||
        (product.category?.toLowerCase().includes(query.toLowerCase()) ?? false)
    );
    setFilteredProducts(filtered);
  }, [query]);

  const handleFavoriteToggle = async (product: Product) => {
    if (!isAuthenticated) {
      toast.error('Please log in to add to favorites');
      navigate('/');
      return;
    }

    const favoriteItem: FavoriteItem = {
      id: product.id,
      photo: product.photo,
      header: product.header,
      price: parseFloat(product.price.replace('$', '')),
    };

    let updatedFavorites: FavoriteItem[];
    if (favorites.some((item: FavoriteItem) => item.id === product.id)) {
      updatedFavorites = favorites.filter((item: FavoriteItem) => item.id !== product.id);
    } else {
      updatedFavorites = [...favorites, favoriteItem];
    }

    setFavorites(updatedFavorites);

    // Sync with backend for authenticated users
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        toast.error('Please log in to modify favorites');
        navigate('/');
        return;
      }

      await axios.post(
        'http://localhost:5050/dev-api/cart/favorites',
        {
          favorites: updatedFavorites.map((item: FavoriteItem) => ({
            id: item.id,
            name: item.header,
            photo: item.photo,
            price: item.price,
          })),
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      localStorage.setItem(`favorites_${user?.email}`, JSON.stringify(updatedFavorites));
    } catch (error: any) {
      console.error('Failed to sync favorites with backend:', error.message, error.response?.data);
      toast.error('Failed to update favorites');
    }
  };

  const addToCart = async (product: Product) => {
    if (!isAuthenticated) {
      toast.error('Please log in to add to cart');
      navigate('/');
      return;
    }

    const cartItem: CartItem = {
      id: product.id,
      name: product.header,
      photo: product.photo,
      price: parseFloat(product.price.replace('$', '')),
      quantity: 1,
    };

    const existingItem = cart.find((item: CartItem) => item.id === product.id);
    let updatedCart: CartItem[];
    if (existingItem) {
      updatedCart = cart.map((item: CartItem) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cart, cartItem];
    }

    setCart(updatedCart);

    // Sync with backend for authenticated users
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        toast.error('Please log in to modify the cart');
        navigate('/');
        return;
      }

      await axios.post(
        'http://localhost:5050/dev-api/cart',
        { cart: updatedCart },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      localStorage.setItem(`cart_${user?.email}`, JSON.stringify(updatedCart));
    } catch (error: any) {
      console.error('Failed to sync cart with backend:', error.message, error.response?.data);
      toast.error('Failed to update cart');
    }
  };

  return (
    <SearchPageWrapper>
      <div className="search-header">
        <h1>Search Results for "{query}"</h1>
      </div>
      {filteredProducts.length > 0 ? (
        <ShopCon>
          <ShopProductsWrap>
            {filteredProducts.map((product) => (
              <ShopProducts key={product.id} data-aos="fade-up">
                <div className="product-image-hover">
                  <img src={product.photo} alt={product.header} className="product-image" />
                  <div className="overlay">
                    <div className="overlay-icons">
                      <button onClick={() => handleFavoriteToggle(product)}>
                        {favorites.some((item: FavoriteItem) => item.id === product.id) ? (
                          <FavoriteIcon style={{ color: "red" }} />
                        ) : (
                          <FavoriteBorderOutlinedIcon style={{ color: "black" }} />
                        )}
                      </button>
                      <Link
                        to={`/collection/${product.id}`}
                        style={{
                          textDecoration: "none",
                          color: "white",
                          marginTop: "7px",
                        }}
                      >
                        <VisibilityOutlinedIcon style={{ color: "black" }} />
                      </Link>
                      <button onClick={() => addToCart(product)}>
                        <ShoppingCartOutlinedIcon style={{ color: "black" }} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="texts-wrap">
                  <img src={stars} alt="stars" />
                  <h1>{product.header}</h1>
                  <p>{product.price}</p>
                </div>
              </ShopProducts>
            ))}
          </ShopProductsWrap>
        </ShopCon>
      ) : (
        <p className="no-results">No products found for "{query}"</p>
      )}
    </SearchPageWrapper>
  );
};

export default SearchPage;