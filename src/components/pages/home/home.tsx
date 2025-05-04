import {
  AddingImgCon,
  CategoryCon,
  CategoryDiv,
  CategoryWrap,
  DelivCon,
  DownloadApp,
  FeaturedAdding,
  FeaturedPros,
  HomeBlogLink,
  HomeContainer,
  HomeInfo,
  HomeMain,
  IncrDecrContainer,
  LatestPickCon,
  LatestPickWrap,
  LatestProducts,
  MainAddWrap,
  MoneyCon,
  ProductsImg,
  ProductsMain,
  ReadAboutDivs,
  ReadAboutIndustry,
  ReadAboutWrap,
  SecureCon,
  SummerSale,
  SupportCon,
} from "./style";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import chair from "../../../assets/images/chair.png";
import cyrcle from "../../../assets/svg/cyrcle.svg";
import delivery from "../../../assets/svg/delivery.svg";
import support from "../../../assets/svg/support.svg";
import security from "../../../assets/svg/security.svg";
import arrow from "../../../assets/svg/round-arrow.svg";
import drawer from "../../../assets/images/drawer.png";
import stars from "../../../assets/svg/stars.svg";
import google from "../../../assets/images/google.png";
import app from "../../../assets/images/appstore.png";
import { Box, Skeleton, TextField } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import { BlogsMockData } from "../mockdata/blogs.mock";
import Carousel from "./carousel";
import LinkData from "./popular products/linkdata";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { toast } from "react-toastify";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import axios from "axios";
import { baseApi } from "../../../utils/api";
import { useFavorites } from "../../context/favoritesContext";
import { useCart } from "../../context/cartContext";

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

const HomeComponent: React.FC = () => {
  const [count, setCount] = useState<number>(1);
  const { isAuthenticated, user } = useAuth();
  const { cart, toggleCart, syncCart } = useCart();
  const navigate = useNavigate();
  const { favorites, toggleFavorite, syncFavorites } = useFavorites();
  const [filteredPopular, setFilteredPopular] = useState<Product[]>([]);
  const [filteredData, setFilteredData] = useState<Product[]>([]);
  const [featuredProduct, setFeaturedProduct] = useState<Product | null>(null);
  const [isCartButtonDisabled, setIsCartButtonDisabled] = useState<boolean>(false);
  const [mainImage, setMainImage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const hasSynced = useRef(false);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 800 });
    return () => {
      AOS.refreshHard();
    };
  }, []);

  useEffect(() => {
    if (isAuthenticated && !hasSynced.current) {
      hasSynced.current = true;
      syncFavorites();
      syncCart();
    }
  }, [isAuthenticated, syncFavorites, syncCart]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${baseApi}/products/getProducts`);
        const products = response.data.products || [];
        const shuffled = products.sort(() => Math.random() - 0.5);
        setFilteredPopular(shuffled.slice(0, 8));
        setFilteredData(shuffled.slice(0, 12));
        setFeaturedProduct(shuffled[0]);
        setMainImage(shuffled[0]?.MainImage || "");
        setIsCartButtonDisabled(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        toast.error("Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredBlogs = BlogsMockData.filter((item) => item.type === "blogs")
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  const handleScroll = () => {
    window.scrollTo({ top: 3400, behavior: "smooth" });
  };

  const handleCartToggle = async (product: Product) => {
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

    if (count === 0) {
      toast.error("Please select at least one item");
      return;
    }

    const cartItem: CartItem = {
      id: product._id,
      title: product.title,
      photo: product.MainImage || "",
      price: Number(product.price) || 0,
      quantity: count,
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
      setIsCartButtonDisabled(true);
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
      price: Number(product.price) || 0,
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

  const handleImageSwap = (clickedImage: string) => {
    if (featuredProduct) {
      const newImages = { ...featuredProduct };
      const currentMainImage = mainImage;

      setMainImage(clickedImage);

      if (clickedImage === newImages.image2) {
        newImages.image2 = currentMainImage;
      } else if (clickedImage === newImages.image3) {
        newImages.image3 = currentMainImage;
      } else if (clickedImage === newImages.image4) {
        newImages.image4 = currentMainImage;
      }
      newImages.MainImage = clickedImage;
      setFeaturedProduct(newImages);
    }
  };

  return (
    <HomeContainer>
      <HomeMain>
        <div className="bg-image-left">
          <div className="Home-left" data-aos="fade-right">
            <img
              src={cyrcle}
              alt="change-img"
              style={{
                width: "140px",
                marginBottom: "-95px",
                marginLeft: "-55px",
              }}
            />
            <p>Save Upto 50%!</p>
            <h3>
              Clean & Classic <br />
              Hand made wood <br />
              furniture
            </h3>
            <button onClick={handleScroll}>Explore</button>
          </div>
        </div>
        <div data-aos="fade-left">
          <img
            src={chair}
            alt="chair-image"
            style={{ width: "500px", height: "530px" }}
          />
        </div>
      </HomeMain>

      <HomeInfo>
        <DelivCon>
          <div>
            <img src={delivery} alt="delivery-icon" />
            <b>Fast Delivery</b>
            <p>
              Delivery within 24 Hours in <br /> any Place
            </p>
          </div>
        </DelivCon>
        <SupportCon>
          <div>
            <img src={support} alt="support-icon" />
            <b>24/7 Support</b>
            <p>
              Get our support any time at <br /> any hour
            </p>
          </div>
        </SupportCon>
        <SecureCon>
          <div>
            <img src={security} alt="security-icon" />
            <b>Secure Shopping</b>
            <p>
              Highly secured online payment <br /> method
            </p>
          </div>
        </SecureCon>
        <MoneyCon>
          <div className="moneyback-div">
            <img src={arrow} alt="arrow-icon" />
            <b>Moneyback Guarantee</b>
            <p>
              Guaranteed money back in <br /> 30 days
            </p>
          </div>
        </MoneyCon>
      </HomeInfo>
      <CategoryCon>
        <div>
          <h2>Categories</h2>
          <p>Don't Miss The Most Popular Products!</p>
        </div>
        <CategoryWrap data-aos="fade-up">
          {loading ? (
            Array(8)
              .fill(0)
              .map((_, index) => (
                <div key={index} style={{ width: "200px", margin: "10px" }}>
                  <Skeleton variant="rectangular" width={200} height={200} />
                  <Skeleton variant="text" width={150} height={20} />
                  <Skeleton variant="text" width={100} height={20} />
                </div>
              ))
          ) : (
            filteredPopular.map((value) => (
              <CategoryDiv key={value._id} to={`/Collection/${value._id}`}>
                <img src={value.MainImage} alt="popular-product-image" />
                <div className="text-wrap">
                  <b>{value.title}</b>
                  <div className="price-wrap">
                    <h6>Starts from</h6>
                    <p>${value.price}.00</p>
                  </div>
                </div>
              </CategoryDiv>
            ))
          )}
        </CategoryWrap>
      </CategoryCon>
      <ProductsMain>
        <div className="products-header" data-aos="fade-up">
          <h1>Popular Products</h1>
          <p>Don't Miss The Most Popular Products!</p>
        </div>
        {loading ? (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <div key={index} style={{ width: "250px", margin: "10px" }}>
                  <Skeleton variant="rectangular" width={250} height={250} />
                  <Skeleton variant="text" width={200} height={20} />
                  <Skeleton variant="text" width={100} height={20} />
                </div>
              ))}
          </div>
        ) : (
          <LinkData />
        )}
      </ProductsMain>
      <FeaturedPros data-aos="fade-up">
        <div className="Menu-featured-head">
          <h2>Featured Products</h2>
          <p>Choose your desired products from our featured product</p>
        </div>
        {loading ? (
          <div style={{ display: "flex", gap: "60px" }}>
            <div style={{ width: "590px" }}>
              <Skeleton variant="text" width={300} height={40} />
              <Skeleton variant="text" width={200} height={30} />
              <Skeleton variant="rectangular" width={200} height={20} />
              <Skeleton variant="rectangular" width={590} height={2} />
              <div style={{ display: "flex", gap: "60px", marginTop: "20px" }}>
                <div>
                  <Skeleton variant="text" width={200} height={20} />
                  <Skeleton variant="text" width={200} height={20} />
                  <Skeleton variant="rectangular" width={150} height={40} />
                  <Skeleton variant="rectangular" width={150} height={40} />
                </div>
                <div>
                  <Skeleton variant="rectangular" width={100} height={100} />
                </div>
              </div>
            </div>
            <div>
              <Skeleton variant="rectangular" width={390} height={471} />
              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                {Array(3)
                  .fill(0)
                  .map((_, index) => (
                    <Skeleton
                      key={index}
                      variant="rectangular"
                      width={125}
                      height={150}
                    />
                  ))}
              </div>
            </div>
          </div>
        ) : (
          featuredProduct && (
            <div style={{ display: "flex", gap: "60px" }}>
              <FeaturedAdding>
                <div className="featured-left">
                  <div className="first-part">
                    <h1>{featuredProduct.title}</h1>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <b>${featuredProduct.price}.00</b>
                      <p>
                        {featuredProduct.discount &&
                        featuredProduct.discount !== 0
                          ? `$${featuredProduct.discount}.00`
                          : ""}
                      </p>
                    </div>
                    <img src={stars} alt="stars-icon" />
                    <div
                      style={{
                        width: "590px",
                        height: "2px",
                        background: "var(--Border-Color, #E9E9E9)",
                      }}
                    ></div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "60px" }}>
                  <MainAddWrap>
                    <div style={{ display: "flex", gap: "30px" }}>
                      <b>Availability:</b>
                      <p>Only {featuredProduct.quantity} Left In Stock</p>
                    </div>
                    <div style={{ display: "flex", gap: "30px" }}>
                      <b>Product Type:</b>
                      <p>{featuredProduct.type}</p>
                    </div>
                    <IncrDecrContainer>
                      <b>Quantity:</b>
                      <div>
                        <button
                          className="IncrDecrButtons"
                          onClick={handleIncrement}
                        >
                          +
                        </button>
                        <p>{count}</p>
                        <button
                          className="IncrDecrButtons"
                          onClick={handleDecrement}
                        >
                          -
                        </button>
                      </div>
                    </IncrDecrContainer>
                    <button
                      onClick={() => handleCartToggle(featuredProduct)}
                      disabled={isCartButtonDisabled}
                      style={{
                        opacity: isCartButtonDisabled ? 0.5 : 1,
                        cursor: isCartButtonDisabled ? "not-allowed" : "pointer",
                      }}
                    >
                      Add To Cart
                    </button>
                  </MainAddWrap>
                  <MainAddWrap>
                    <div className="social-media-icons">
                      <a
                        href="https://www.pinterest.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaPinterest size={20} color="#080005" />
                      </a>
                      <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebook size={20} color="#080005" />
                      </a>
                      <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram size={20} color="#080005" />
                      </a>
                      <a
                        href="https://www.twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTwitter size={20} color="#080005" />
                      </a>
                    </div>
                  </MainAddWrap>
                </div>
              </FeaturedAdding>
              <AddingImgCon>
                <div>
                  <div
                    style={{
                      width: "390px",
                      height: "471px",
                      background: mainImage ? "none" : "#e0e0e0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {mainImage ? (
                      <img
                        src={mainImage}
                        alt="featured-product"
                        style={{
                          width: "390px",
                          height: "471px",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <span style={{ color: "#666" }}>No Image</span>
                    )}
                  </div>
                </div>
                <div
                  className="little-imgs"
                  style={{ display: "flex", gap: "10px" }}
                >
                  {[
                    featuredProduct.image2,
                    featuredProduct.image3,
                    featuredProduct.image4,
                  ].map((image, index) => (
                    <div
                      key={index}
                      style={{
                        width: "125px",
                        height: "150px",
                        background: image ? "none" : "#e0e0e0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: image ? "pointer" : "default",
                      }}
                      onClick={() => image && handleImageSwap(image)}
                    >
                      {image ? (
                        <img
                          src={image}
                          alt={`product-img${index + 2}`}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <span style={{ color: "#666" }}>No Image</span>
                      )}
                    </div>
                  ))}
                </div>
              </AddingImgCon>
            </div>
          )
        )}
      </FeaturedPros>
      <SummerSale data-aos="fade-up">
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <h2>35% Summer Sales Discount. Use Coupon Code:</h2>
          <p>Furnimart</p>
        </div>
        <button>Shop Now</button>
      </SummerSale>
      <LatestPickCon data-aos="fade-up">
        <div className="latest-header">
          <h1>Latest Picks For You</h1>
          <p>Don't Miss The Most Popular Products!</p>
        </div>
        <LatestPickWrap>
          {loading ? (
            Array(12)
              .fill(0)
              .map((_, index) => (
                <div key={index} style={{ width: "200px", margin: "10px" }}>
                  <Skeleton variant="rectangular" width={200} height={200} />
                  <Skeleton variant="text" width={150} height={20} />
                  <Skeleton variant="text" width={100} height={20} />
                </div>
              ))
          ) : (
            filteredData.map((value) => (
              <LatestProducts key={value._id}>
                <div className="product-image-hover">
                  <img
                    src={value.MainImage}
                    alt="image"
                    className="product-image"
                  />
                  <div className="overlay">
                    <div className="overlay-icons">
                      <button
                        onClick={() => handleFavoriteToggle(value)}
                        style={{
                          cursor: "pointer",
                          opacity: 1,
                          border: "none",
                          background: "transparent",
                        }}
                      >
                        {favorites.some((item) => item.id === value._id) ? (
                          <FavoriteIcon style={{ color: "red" }} />
                        ) : (
                          <FavoriteBorderOutlinedIcon
                            style={{ color: "black" }}
                          />
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
                        onClick={() => handleCartToggle(value)}
                        style={{
                          cursor: "pointer",
                          opacity: 1,
                          border: "none",
                          background: "transparent",
                        }}
                      >
                        {cart.some((item) => item.id === value._id) ? (
                          <ShoppingCartIcon style={{ color: "green" }} />
                        ) : (
                          <ShoppingCartOutlinedIcon style={{ color: "black" }} />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="texts-wrap">
                  <img src={stars} alt="img" />
                  <h1>{value.title}</h1>
                  <p>${value.price}.00</p>
                </div>
              </LatestProducts>
            ))
          )}
        </LatestPickWrap>
      </LatestPickCon>
      <DownloadApp>
        <div className="download-wrap" data-aos="fade-up">
          <div>
            <div className="left-wrap">
              <h1>
                Get The Ultimate <br />
                Setup for your Home
              </h1>
              <p>
                It was a pleasure meeting you this past weekend. <br />
                I appreciate all you shared and can't wait to review the <br />
                Ecology of Commerce.
              </p>
              <div
                style={{
                  width: "390px",
                  height: "1px",
                  opacity: "0.3",
                  background: "#928E8B",
                }}
              ></div>
            </div>
            <div className="downloadapp">
              <h3>Download The App</h3>
              <div>
                <img src={google} alt="google-image" />
                <img src={app} alt="Appstore-image" />
              </div>
            </div>
          </div>
          <div>
            <img src={drawer} alt="furniture-image" className="drawer-img" />
          </div>
          <div>
            <div className="left-wrap">
              <h1>
                Sign up for news & <br />
                get 20% off
              </h1>
              <Box
                component="form"
                sx={{ "& > :not(style)": { m: 1, width: "30ch" } }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  type="email"
                  required
                  label="Your email address"
                  variant="standard"
                />
              </Box>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </DownloadApp>
      <ReadAboutIndustry data-aos="fade-up">
        <div className="read-header">
          <h1>Blogs & Insights</h1>
          <p>Read About Furniture Industry</p>
        </div>
        <div className="read-about">
          {filteredBlogs.map((value) => (
            <ReadAboutWrap key={value.id} to={`/BlogsDetail/${value.id}`}>
              <ReadAboutDivs>
                <img src={value.photo} alt="furniture-image" />
                <div className="read-text">
                  <h2>{value.header}</h2>
                  <p>{value.second_description}</p>
                  <HomeBlogLink>Read More</HomeBlogLink>
                </div>
              </ReadAboutDivs>
            </ReadAboutWrap>
          ))}
        </div>
      </ReadAboutIndustry>
      <ProductsImg data-aos="fade-up">
        <Carousel />
      </ProductsImg>
    </HomeContainer>
  );
};

export default HomeComponent;
