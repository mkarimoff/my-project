import { useEffect, useState } from "react";
import { PopularItems, PopularWrap } from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../../../context/cartContext";
import { useAuth } from "../../../context/authContext";
import { useFavorites } from "../../../context/favoritesContext";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Skeleton from "@mui/material/Skeleton";
import stars from "../../../../assets/svg/stars.svg";
import { baseApi } from "../../../../utils/api";

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

interface CartItem {
  id: string;
  title: string;
  photo: string;
  price: number;
  quantity: number;
  discount?: number;
}

interface FavoriteItem {
  id: string;
  photo: string;
  title: string;
  price: number;
}

const Discounted = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { cart, toggleCart } = useCart();
  const { isAuthenticated, user } = useAuth();
  const { favorites, toggleFavorite, syncFavorites } = useFavorites();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${baseApi}/products/getProducts`);
        console.log("Discounted products response:", response.data.products); // Debug log
        const discounted = response.data.products.filter(
          (product: Product) => product.discount && product.discount > 0
        );
        let selectedProducts = discounted;
        if (discounted.length < 4) {
          const additional = response.data.products
            .filter((product: Product) => !discounted.includes(product))
            .slice(0, 4 - discounted.length);
          selectedProducts = [...discounted, ...additional];
        }
        selectedProducts = selectedProducts
          .sort(() => Math.random() - 0.5)
          .slice(0, 4);
        setProducts(selectedProducts);
      } catch (err) {
        console.error("Error fetching products:", err);
        toast.error("Failed to load discounted products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const handleAddToCart = async (product: Product) => {
    if (!isAuthenticated) {
      toast.error("Please sign in to add products to cart");
      setTimeout(() => {
        navigate("/");
      }, 2000);
      return;
    }

    if (!user?.email) {
      toast.error("User email not found. Please sign in again.");
      navigate("/");
      return;
    }

    const cartItem: CartItem = {
      id: product._id,
      title: product.title,
      photo: product.MainImage || "",
      price: Number(product.price - (product.discount || 0)) || 0,
      quantity: 1,
      discount: product.discount || 0,
    };

    if (
      !cartItem.id ||
      !cartItem.title ||
      isNaN(cartItem.price) ||
      !cartItem.quantity
    ) {
      console.error("Invalid cart item:", cartItem);
      toast.error("Cannot add to cart: Invalid item data");
      return;
    }

    try {
      const wasAdded = toggleCart(cartItem, user.email);
      toast.success(wasAdded ? "Added to Cart" : "Removed from Cart");
    } catch (error: any) {
      console.error("Backend Error:", error.response?.data);
      toast.error(error.response?.data?.error || "Failed to update cart");
    }
  };

  const handleFavoriteToggle = async (product: Product) => {
    if (!isAuthenticated) {
      toast.error("Please sign in to add products to favorites");
      setTimeout(() => {
        navigate("/");
      }, 2000);
      return;
    }

    if (!user?.email) {
      toast.error("User email not found. Please sign in again.");
      navigate("/");
      return;
    }

    const favoriteItem: FavoriteItem = {
      id: product._id.toString(),
      title: product.title,
      price: Number(product.price - (product.discount || 0)) || 0,
      photo: product.MainImage || "",
    };

    if (!favoriteItem.id || !favoriteItem.title || isNaN(favoriteItem.price)) {
      console.error("Invalid favorite item:", favoriteItem);
      toast.error("Cannot toggle favorite: Invalid item data");
      return;
    }

    try {
      const wasAdded = toggleFavorite(favoriteItem, user.email);
      toast.success(wasAdded ? "Added to Favorites" : "Removed from Favorites");
      await syncFavorites();
    } catch (error: any) {
      console.error("Failed to toggle favorite:", error.response?.data);
      toast.error(error.response?.data?.error || "Failed to update favorites");
    }
  };

  return (
    <div style={{ width: "100%", maxWidth: "1100px", margin: "0 auto" }}>
      <Slider {...settings}>
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <PopularWrap key={`skeleton-${index}`}>
                <PopularItems>
                  <div className="products-div">
                    <div className="product-image">
                      <Skeleton variant="rectangular" width="100%" height={200} animation="wave" />
                    </div>
                    <div className="texts-wrap">
                      <Skeleton variant="text" width={50} height={20} animation="wave" />
                      <Skeleton variant="text" width={150} height={20} animation="wave" />
                      <div style={{ display: "flex", gap: "20px" }}>
                        <Skeleton variant="text" width={80} height={20} animation="wave" />
                        <Skeleton variant="text" width={80} height={20} animation="wave" />
                      </div>
                    </div>
                  </div>
                </PopularItems>
              </PopularWrap>
            ))
          : products.map((value) => (
              <PopularWrap key={value._id}>
                <PopularItems>
                  <div className="products-div">
                    <div className="product-image">
                      <img src={value.MainImage} alt="furniture" />
                      <div className="overlay">
                        <div className="icons">
                          <button onClick={() => handleFavoriteToggle(value)}>
                            {favorites.some((item) => item.id === value._id) ? (
                              <FavoriteIcon style={{ color: "red" }} />
                            ) : (
                              <FavoriteBorderOutlinedIcon />
                            )}
                          </button>
                          <Link
                            to={`/collection/${value._id}`}
                            style={{
                              textDecoration: "none",
                              color: "white",
                              marginTop: "6px",
                            }}
                          >
                            <VisibilityOutlinedIcon />
                          </Link>
                          <button onClick={() => handleAddToCart(value)}>
                            {cart.some((item) => item.id === value._id) ? (
                              <ShoppingCartIcon style={{ color: "green" }} />
                            ) : (
                              <ShoppingCartOutlinedIcon />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="texts-wrap">
                      <img src={stars} alt="stars" />
                      <b>{value.title}</b>
                      <div style={{ display: "flex", gap: "20px" }}>
                        {value.discount && value.discount > 0 ? (
                          <p
                            style={{
                              color: "#83868C",
                              textDecoration: "line-through solid 1px black",
                            }}
                          >
                            ${value.price.toFixed(2)}
                          </p>
                        ) : null}
                        <p
                          style={{
                            fontWeight: "bold",
                            color: value.discount && value.discount > 0 ? "black" : "#928E8B",
                          }}
                        >
                          ${(value.price - (value.discount || 0)).toFixed(2)}
                        </p>
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