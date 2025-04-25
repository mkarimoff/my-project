import { BlogsMockData } from "../../mockdata/blogs.mock";
import { PopularItems, PopularWrap } from "./style";
import stars from "../../../../assets/svg/stars.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite"; 
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useCart } from "../../../context/cartContext";
import { useAuth } from "../../../context/authContext";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useFavorites } from "../../../context/favoritesContext";

const Discounted = () => {
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  const filteredDiscounted = BlogsMockData.filter(
    (item) => item.type === "discounted"
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const handleAddToCart = (product: any) => {
    if (!isAuthenticated) {
      toast.error("Please sign in to add products to cart");
      setTimeout(() => {
        navigate("/");
      }, 2000);
      return;
    }

    const cartItem = {
      id: product.id,
      photo: product.photo,
      header: product.header,
      price: product.new_price ?? "0",  // Ensure correct price is used
      quantity: 1,
    };

    try {
      addToCart(cartItem);
      toast.success("Product added to cart!");
    } catch (error: any) {
      toast.error(error.message || "Failed to add product to cart");
    }
  };

  const handleFavoriteToggle = (product: any) => {
    const isFavorite = favorites.some((item) => item.id === product.id);
    if (isFavorite) {
      removeFromFavorites(product.id); 
    } else {
      addToFavorites(product); 
    }
  };

  return (
    <div style={{ width: "100%", maxWidth: "1100px", margin: "0 auto" }}>
      <Slider {...settings}>
        {filteredDiscounted.map((value) => (
          <PopularWrap key={value.id}>
            <PopularItems>
              <div className="products-div">
                <div className="product-image">
                  <img src={value.photo} alt="furniture" />
                  <div className="overlay">
                    <div className="icons">
                      <button onClick={() => handleFavoriteToggle(value)}>
                        {favorites.some((item) => item.id === value.id) ? (
                          <FavoriteIcon style={{ color: "red" }} /> 
                        ) : (
                          <FavoriteBorderOutlinedIcon />
                        )}
                      </button>
                      <Link
                        to={`/BlogsDetail/${value.id}`}
                        style={{
                          textDecoration: "none",
                          color: "white",
                          marginTop: "6px",
                        }}
                      >
                        <VisibilityOutlinedIcon />
                      </Link>
                      <button onClick={() => handleAddToCart(value)}>
                        <ShoppingCartOutlinedIcon />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="texts-wrap">
                  <img src={stars} alt="stars" />
                  <b>{value.header}</b>
                  <div style={{ display: "flex", gap: "20px" }}>
                    <p
                      style={{
                        color: "#83868C",
                        textDecoration: "line-through solid 1px black",
                      }}
                    >
                      {value.old_prise}
                    </p>
                    <p>{value.new_price}</p>
                  </div>
                </div>
              </div>
            </PopularItems>
          </PopularWrap>
        ))}
      </Slider>
    </div>
  );
};

export default Discounted;

