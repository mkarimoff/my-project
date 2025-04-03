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
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { IncrDecrContainer } from "../../home/style";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const CollectionComponent: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  let { id } = useParams();

  console.log("detail:", BlogsMockData);
  
  const popularData = BlogsMockData.filter(
    (item) => item.type === "popular"
  );
  const NewArrivalData = BlogsMockData.filter(
    (item) => item.type === "new"
  );
  const data = BlogsMockData.find((value) => value.id.toString() === id);
  
  return (
    <>
      <ShopCon>
        <div
          style={{ width: "100%", height: "55px", backgroundColor: "#F6F6F6" }}
        ></div>
        <BuyingWrap>
          <div className="imgs-wrap">
            <img src={data?.photo} alt="Product-image" className="big-image" />
            <div className="lower-3pic">
              <img src={data?.photo} alt="Product-image" />
              <img src={data?.photo} alt="Product-image" />
              <img src={data?.photo} alt="Product-image" />
            </div>
          </div>
          <BuyingRight>
            <div className="buying-head">
              <h1>{data?.header}</h1>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <b>{data?.prise}</b>
              </div>
              <img src={stars} alt="rating-img" />
            </div>
            <ShopButtonsCon>
              <IncrDecrContainer>
                <b style={{fontSize:'20px'}}>Quantity:</b>
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
                <button>Add To Cart</button>
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
              <b>Moneyback Guarantee </b>
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
              <Link className="popular-products"  key={value.id}
              to={`/collection/${value.id}`}>
                <img src={value.photo} alt="image" className="product-image" />
                <div className="texts-wrap">
                  <img src={stars} alt="img" />
                  <h1>{value.header}</h1>
                  <p>{value.prise}</p>
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
              <Link className="new-products"  key={value.id}
              to={`/collection/${value.id}`}>
                <img src={value.photo} alt="image" className="product-image" />
                <div className="texts-wrap">
                  <img src={stars} alt="img" />
                  <h1>{value.header}</h1>
                  <p>{value.prise}</p>
                </div>
              </Link>
            ))}
          </ShopNewWrap>
        </ShopNewCon>
      </ShopCon>
    </>
  );
};

export default CollectionComponent;
