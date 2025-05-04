import { ShopCon, ShopProducts, ShopProductsWrap } from './style';
import stars from '../../../../assets/svg/stars.svg';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { CartItem, FavoriteItem } from '../../../context/authContext'; 

interface Product {
  _id: string;
  title: string;
  price: number;
  quantity: number;
  discount?: number;
  description?: string;
  category?: string;
  MainImage: string;
}

interface VerticalMenuProps {
  products: Product[];
  isLoading: boolean;
  toggleCart: (product: Product) => void;
  handleFavoriteToggle: (product: Product) => void;
  favorites: FavoriteItem[];
  cart: CartItem[];
}

const VerticalMenu = ({ products, isLoading, toggleCart, handleFavoriteToggle, favorites, cart }: VerticalMenuProps) => {
  return (
    <div data-aos="fade-up">
      <ShopCon>
        <ShopProductsWrap>
          {isLoading ? (
            Array(6).fill(0).map((_, i) => (
              <ShopProducts key={i}>
                <Skeleton height={200} width="100%" />
                <div className="texts-wrap">
                  <Skeleton height={20} width={100} />
                  <Skeleton height={30} width={150} />
                  <Skeleton height={20} width={80} />
                </div>
              </ShopProducts>
            ))
          ) : (
            products.map((value) => {
              const isInCart = cart.some((item) => item.id === value._id);
              return (
                <ShopProducts key={value._id}>
                  <div className="product-image-hover">
                    <img src={value.MainImage} alt="image" className="product-image" />
                    <div className="overlay">
                      <div className="overlay-icons">
                        <button onClick={() => handleFavoriteToggle(value)}>
                          {favorites.some((item) => item.id === value._id) ? (
                            <FavoriteIcon style={{ color: "red" }} />
                          ) : (
                            <FavoriteBorderOutlinedIcon style={{ color: "black" }} />
                          )}
                        </button>
                        <Link
                          to={`/collection/${value._id}`}
                          style={{
                            textDecoration: "none",
                            color: "white",
                            marginTop: "2px",
                          }}
                        >
                          <VisibilityOutlinedIcon style={{ color: "black" }} />
                        </Link>
                        <button
                          onClick={() => {
                            toggleCart(value);
                          }}
                        >
                          {isInCart ? (
                            <ShoppingCartIcon style={{ color: "green" }} />
                          ) : (
                            <ShoppingCartOutlinedIcon style={{ color: "black" }} />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="texts-wrap">
                    <img src={stars} alt="rating" />
                    <h1>{value.title}</h1>
                    <p>${value.price.toFixed(2)}</p>
                  </div>
                </ShopProducts>
              );
            })
          )}
        </ShopProductsWrap>
      </ShopCon>
    </div>
  );
};

export default VerticalMenu;