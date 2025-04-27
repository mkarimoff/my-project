import {
  BuyingRight,
  BuyingWrap,
  MottoCon,
  ShopButtonsCon,
  ShopCon,
  ShopNewCon,
  ShopNewWrap,
  ShopPopPros,
  ShopPopProsWrap,
} from "./style";
import stars from "../../../../assets/svg/stars.svg";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import Checkbox from "@mui/material/Checkbox";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import { FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";
import { BlogsMockData } from "../../mockdata/blogs.mock";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { IncrDecrContainer } from "../../home/style";
import { toast } from "react-toastify";
import { useAuth } from "../../../context/authContext";
import { useCart } from "../../../context/cartContext";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const CollectionComponent: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { addToCart } = useCart();
  const { id } = useParams();
  const data = BlogsMockData.find((value) => value.id.toString() === id);
  const popularData = BlogsMockData.filter((item) => item.type === "popular");
  const NewArrivalData = BlogsMockData.filter((item) => item.type === "new");
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      toast.error("Please signin to add products to cart");
      setTimeout(() => {
        navigate("/");
      }, 2000);

      return;
    }

    if (!data || count === 0) return;

    const cartItem = {
      id: data.id,
      photo: data.photo,
      header: data.header,
      price: data.price ?? "0",
      quantity: count,
    };

    try {
      addToCart(cartItem);
      toast.success("Product added to cart!");
    } catch (error: any) {
      toast.error(error.message || "Failed to add product to cart");
    }
  };

  return (
    <ShopCon>
      <div
        style={{ width: "100%", height: "55px", backgroundColor: "#F6F6F6" }}>
      </div>

      <BuyingWrap>
        <div className="imgs-wrap">
          <img src={data?.photo} alt="Product" className="big-image" />
          <div className="lower-3pic">
            {[1, 2, 3].map((_, i) => (
              <img key={i} src={data?.photo} alt={`Product-${i}`} />
            ))}
          </div>
        </div>

        <BuyingRight>
          <div className="buying-head">
            <h1>{data?.header}</h1>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <b>{data?.price}</b>
            </div>
            <img src={stars} alt="rating" />
          </div>

          <ShopButtonsCon>
            <IncrDecrContainer>
              <b style={{ fontSize: "20px" }}>Quantity:</b>
              <div>
                <button className="IncrDecrButtons" onClick={handleIncrement}>
                  +
                </button>
                <p>{count}</p>
                <button className="IncrDecrButtons" onClick={handleDecrement}>
                  -
                </button>
              </div>
            </IncrDecrContainer>

            <p>Only 7 Left In Stock</p>

            <div className="buttons-wrap">
              <button onClick={handleAddToCart} disabled={count === 0}>
                Add To Cart
              </button>
              <button>Buy Now</button>
            </div>

            <div className="texts-con">
              <div className="icons-wrap">
                <Checkbox
                  {...label}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite sx={{ color: "red" }} />}
                  sx={{ color: "black" }}
                />
                <p>Add To Wishlist</p>
              </div>

              <div className="texts-wrap">
                <p>{data?.second_description}</p>
                <div className="delivery-wrap">
                  <div>
                    <ShoppingBagOutlinedIcon />
                    <p>Free Shipping & Returns: On Orders Over $200</p>
                  </div>
                  <div>
                    <LocalShippingOutlinedIcon />
                    <p>Estimated Delivery: 3-5 Business Days</p>
                  </div>

                  <div className="social-medias">
                    <span>Share:</span>
                    <div>
                      <a
                        href="https://www.twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTwitter size={20} color="#00ACEE" />
                      </a>
                      <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebook size={20} color="#3B5998" />
                      </a>
                      <a
                        href="https://www.pinterest.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaPinterest size={20} color="#C8232C" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ShopButtonsCon>
        </BuyingRight>
      </BuyingWrap>

      <MottoCon>
        <div className="motto-components">
          <LocalShippingOutlinedIcon fontSize="large" />
          <div>
            <b>Fast Delivery</b>
            <p>Delivery within 24 Hours in any Place</p>
          </div>
        </div>
        <div className="motto-components">
          <SupportAgentOutlinedIcon fontSize="large" />
          <div>
            <b>24/7 Support</b>
            <p>Get our support any time at any hour</p>
          </div>
        </div>
        <div className="motto-components">
          <GppGoodOutlinedIcon fontSize="large" />
          <div>
            <b>Secure Shopping</b>
            <p>Highly secured online payment method</p>
          </div>
        </div>
        <div className="motto-components">
          <CachedOutlinedIcon fontSize="large" />
          <div>
            <b>Moneyback Guarantee</b>
            <p>Guaranteed money back in 30 days</p>
          </div>
        </div>
      </MottoCon>

      <ShopPopPros>
        <div>
          <h1>Popular Products</h1>
          <p>Don't Miss The Most Popular Products!</p>
        </div>
        <ShopPopProsWrap>
          {popularData.map((value) => (
            <Link
              className="popular-products"
              key={value.id}
              to={`/collection/${value.id}`}
            >
              <img
                src={value.photo}
                alt="Popular Product"
                className="product-image"
              />
              <div className="texts-wrap">
                <img src={stars} alt="rating" />
                <h1>{value.header}</h1>
                <p>{value.price}</p>
              </div>
            </Link>
          ))}
        </ShopPopProsWrap>
      </ShopPopPros>

      <ShopNewCon>
        <div>
          <h1>New Arrivals</h1>
          <p>Don't Miss The Newest Products!</p>
        </div>
        <ShopNewWrap>
          {NewArrivalData.map((value) => (
            <Link
              className="new-products"
              key={value.id}
              to={`/collection/${value.id}`}
            >
              <img
                src={value.photo}
                alt="New Product"
                className="product-image"
              />
              <div className="texts-wrap">
                <img src={stars} alt="rating" />
                <h1>{value.header}</h1>
                <p>{value.price}</p>
              </div>
            </Link>
          ))}
        </ShopNewWrap>
      </ShopNewCon>
    </ShopCon>
  );
};

export default CollectionComponent;
