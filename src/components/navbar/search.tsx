import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
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
import { toast } from 'react-toastify';
import axios from 'axios';
import { baseApi } from "../../utils/api";


interface Product {
  _id: string;
  title: string;
  price: number;
  quantity: number;
  discount?: number;
  description?: string;
  type: string;
  MainImage: string;
  image2?: string;
  image3?: string;
  image4?: string;
}

interface ProductsResponse {
  products: Product[];
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
  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get<ProductsResponse>(`${baseApi}/products/getProducts`);
        const allProducts: Product[] = response.data.products || [];

        const filtered = allProducts.filter(
          (product) =>
            product.title.toLowerCase().includes(query.toLowerCase()) ||
            product.type.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered);
        console.log('Filtered products:', filtered); 
      } catch (error: any) {
        setError('Failed to load products');
        toast.error('Failed to load products');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [query]);

  const handleFavoriteToggle = async (product: Product) => {
    if (!isAuthenticated) {
      toast.error('Please log in to add to favorites');
      navigate('/');
      return;
    }

    const favoriteItem: FavoriteItem = {
      id: product._id,
      title: product.title,
      photo: product.MainImage,
      price: product.price,
    };

    let updatedFavorites: FavoriteItem[];
    if (favorites.some((item: FavoriteItem) => item.id === product._id)) {
      updatedFavorites = favorites.filter((item: FavoriteItem) => item.id !== product._id);
    } else {
      updatedFavorites = [...favorites, favoriteItem];
    }

    setFavorites(updatedFavorites);

    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        toast.error('Please log in to modify favorites');
        navigate('/');
        return;
      }

      await axios.post(
        `${baseApi}/cart/favorites`,
        { favorites: updatedFavorites },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      localStorage.setItem(`favorites_${user?.email}`, JSON.stringify(updatedFavorites));
      toast.success('Favorites updated');
    } catch (error: any) {
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
      id: product._id,
      title: product.title,
      photo: product.MainImage,
      price: product.price,
      quantity: 1,
      discount: product.discount || 0,
    };

    const existingItem = cart.find((item: CartItem) => item.id === product._id);
    let updatedCart: CartItem[];
    if (existingItem) {
      updatedCart = cart.map((item: CartItem) =>
        item.id === product._id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cart, cartItem];
    }

    setCart(updatedCart);

    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        toast.error('Please log in to modify the cart');
        navigate('/');
        return;
      }

      await axios.post(
        `${baseApi}/cart`,
        { cart: updatedCart },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      localStorage.setItem(`cart_${user?.email}`, JSON.stringify(updatedCart));
      toast.success('Added to cart');
    } catch (error: any) {
      toast.error('Failed to update cart');
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <SearchPageWrapper>
      <div className="search-header">
        <h1>Search Results for "{query}"</h1>
      </div>
      {filteredProducts.length > 0 ? (
        <ShopCon>
          <ShopProductsWrap>
            {filteredProducts.map((product) => (
              <ShopProducts key={product._id} data-aos="fade-up">
                <div className="product-image-hover">
                  <img src={product.MainImage} alt={product.title} className="product-image" />
                  <div className="overlay">
                    <div className="overlay-icons">
                      <button onClick={() => handleFavoriteToggle(product)}>
                        {favorites.some((item: FavoriteItem) => item.id === product._id) ? (
                          <FavoriteIcon style={{ color: "red" }} />
                        ) : (
                          <FavoriteBorderOutlinedIcon style={{ color: "black" }} />
                        )}
                      </button>
                      <Link
                        to={`/collection/${product._id}`}
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
                  <h1>{product.title}</h1>
                  <p>${product.price.toFixed(2)}</p>
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