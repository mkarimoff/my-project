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
import granit from "../../../assets/images/granit.jpg";
import whitechair from "../../../assets/images/white-chair.png";
import blackchair from "../../../assets/images/black-chair.png";
import stars from "../../../assets/svg/stars.svg";
import chair2 from "../../../assets/images/chair-category.png";
import drawer from "../../../assets/images/drawer.png";
import woodentable from "../../../assets/images/wooden-table.avif";
import sofa from "../../../assets/images/sofa.png";
import modernchair from "../../../assets/images/modern-chair.png";
import table2 from "../../../assets/images/table2.webp";
import chair from "../../../assets/images/chair.png";
import quantity from "../../../assets/images/Quantity.png";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import Checkbox from "@mui/material/Checkbox";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import { FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const ShopComponent = () => {
  return (
    <>
      <ShopCon>
        <div
          style={{ width: "100%", height: "55px", backgroundColor: "#F6F6F6" }}
        ></div>
          <BuyingWrap>
            <div className="imgs-wrap">
              <img src={granit} alt="Product-image" className="big-image" />
              <div className="lower-3pic">
                <img src={blackchair} alt="Product-image" />
                <img src={whitechair} alt="Product-image" />
                <img src={granit} alt="Product-image" />
              </div>
            </div>
            <BuyingRight>
              <div className="buying-head">
                <h1>Single Cushioned Chair</h1>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <b>$20.00</b>
                  <p>$25.00</p>
                </div>
                <img src={stars} alt="rating-img" />
              </div>
              <ShopButtonsCon>
                <img src={quantity} alt="" />
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
                    <p>
                      Basically, the kit consists of more than a hundred
                      ready-to-use elements that you can combine to get the
                      exact prototype you want. We tried to make it as versatile
                      as possible, at the same time getting rid of all the
                      redundant features to help you save time
                    </p>
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
            <h1>Popular Products</h1>
            <p>Don't Miss The Most Popular Products!</p>
            <ShopPopProsWrap>
              <div className="popular-products">
                <div className="products-div">
                  <img src={chair2} alt="forniture-image" />
                </div>
                <div className="texts-wrap">
                  <img src={stars} alt="stars-icon" />
                  <b>Single cushioned Chair </b>
                  <p>$250.00</p>
                </div>
              </div>
              <div className="popular-products">
                <div className="products-div">
                  <img src={table2} alt="forniture-image" />
                </div>
                <div className="texts-wrap">
                  <img src={stars} alt="stars-icon" />
                  <b>Table </b>
                  <p>$150.00</p>
                </div>
              </div>
              <div className="popular-products">
                <div className="products-div">
                  <img src={chair} alt="forniture-image" />
                </div>
                <div className="texts-wrap">
                  <img src={stars} alt="stars-icon" />
                  <b>Single cushioned Chair </b>
                  <p>$430.00</p>
                </div>
              </div>
              <div className="popular-products">
                <div className="products-div">
                  <img src={sofa} alt="forniture-image" />
                </div>
                <div className="texts-wrap">
                  <img src={stars} alt="stars-icon" />
                  <b>Soft Sofa </b>
                  <p>$200.00</p>
                </div>
              </div>
            </ShopPopProsWrap>
          </ShopPopPros>
          <ShopNewCon>
            <h1>New Arrivals</h1>
            <p>Don't Miss The Newest Products!</p>
            <ShopNewWrap>
              <div className="popular-products">
                <div className="products-div">
                  <img src={blackchair} alt="forniture-image" />
                </div>
                <div className="texts-wrap">
                  <img src={stars} alt="stars-icon" />
                  <b>Single cushioned Chair </b>
                  <p>$250.00</p>
                </div>
              </div>
              <div className="popular-products">
                <div className="products-div">
                  <img src={drawer} alt="forniture-image" />
                </div>
                <div className="texts-wrap">
                  <img src={stars} alt="stars-icon" />
                  <b>Drawer </b>
                  <p>$150.00</p>
                </div>
              </div>
              <div className="popular-products">
                <div className="products-div">
                  <img src={modernchair} alt="forniture-image" />
                </div>
                <div className="texts-wrap">
                  <img src={stars} alt="stars-icon" />
                  <b>Single cushioned Chair </b>
                  <p>$430.00</p>
                </div>
              </div>
              <div className="popular-products">
                <div className="products-div">
                  <img src={woodentable} alt="forniture-image" />
                </div>
                <div className="texts-wrap">
                  <img src={stars} alt="stars-icon" />
                  <b>Table </b>
                  <p>$200.00</p>
                </div>
              </div>
            </ShopNewWrap>
          </ShopNewCon>
      </ShopCon>
    </>
  );
};

export default ShopComponent;
