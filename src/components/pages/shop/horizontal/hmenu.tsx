import { ShopConH, ShopProducts, ShopProductsWrap } from "./style";
import stars from "../../../../assets/svg/stars.svg";
import { BlogsMockData } from "../../mockdata/blogs.mock";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

interface HorizontMenuProps {
  products: typeof BlogsMockData;
  addToCart: (product: any) => void;
  handleFavoriteToggle: (product: any) => void;
  favorites: {
    id: number;
    photo: string;
    header: string;
    price: string | number;
  }[];
}

const HorizontMenu = ({ products, addToCart, handleFavoriteToggle, favorites }: HorizontMenuProps) => {
  return (
    <div data-aos="fade-up">
      <ShopConH>
        <ShopProductsWrap>
          {products.map((value) => (
            <ShopProducts key={value.id}>
              <img src={value.photo} alt="image" className="product-image" />
              <div className="texts-wrap">
                <div>
                  <h1>{value.header}</h1>
                  <p>{value.prise}</p>
                </div>
                <img src={stars} alt="img" className="star-name" />
                <div className="hover-icons">
                  <button onClick={() => handleFavoriteToggle(value)}>
                    {favorites.some((item) => item.id === value.id) ? (
                      <FavoriteIcon style={{ color: "red" }} />
                    ) : (
                      <FavoriteBorderOutlinedIcon />
                    )}
                  </button>
                  <Link
                    to={`/collection/${value.id}`}
                    style={{
                      textDecoration: "none",
                      color: "white",
                      marginTop: "7px",
                    }}
                  >
                    <VisibilityOutlinedIcon  />
                  </Link>
                  <button onClick={() => addToCart(value)}>
                    <ShoppingCartOutlinedIcon  />
                  </button>
                </div>
              </div>
            </ShopProducts>
          ))}
        </ShopProductsWrap>
      </ShopConH>
    </div>
  );
};

export default HorizontMenu;

