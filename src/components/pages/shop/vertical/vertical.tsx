import { ShopCon, ShopProducts, ShopProductsWrap } from './style'
import stars from '../../../../assets/svg/stars.svg'
import { BlogsMockData } from '../../mockdata/blogs.mock'
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link,  } from 'react-router-dom';

interface VerticalMenuProps {
  products: typeof BlogsMockData; 
  addToCart: (product: any) => void; 
  handleFavoriteToggle: (product: any) => void; 
  favorites: { id: number; photo: string; header: string; price: string | number; }[]; 
}



const VerticalMenu = ({ products, addToCart, handleFavoriteToggle, favorites }: VerticalMenuProps) => {
  return (
    <div data-aos="fade-up">
      <ShopCon>
        <ShopProductsWrap>
          {products.map((value) => (
            <ShopProducts key={value.id} >
              <div className="product-image-hover">
                <img src={value.photo} alt="image" className="product-image" />
                <div className="overlay">
                  <div className="overlay-icons">
                    <button onClick={() => handleFavoriteToggle(value)}>
                      {favorites.some((item) => item.id === value.id) ? (
                        <FavoriteIcon style={{ color: "red" }} />
                      ) : (
                        <FavoriteBorderOutlinedIcon style={{ color: "black" }} />
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
                      <VisibilityOutlinedIcon style={{ color: "black" }} />
                    </Link>
                    <button onClick={() => addToCart(value)}>
                      <ShoppingCartOutlinedIcon style={{ color: "black" }} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="texts-wrap">
                <img src={stars} alt="img" />
                <h1>{value.header}</h1>
                <p>{value.prise}</p>
              </div>
            </ShopProducts>
          ))}
        </ShopProductsWrap>
      </ShopCon>
    </div>
  );
};



export default VerticalMenu;
