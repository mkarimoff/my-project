import {
  AddingImgCon,
  CategoryCon,
  CategoryDiv,
  CategoryWrap,
  DelivCon,
  DownloadApp,
  FeaturedAdding,
  FeaturedPros,
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
import chair2 from "../../../assets/images/chair-category.png";
import drawer from "../../../assets/images/drawer.png";
import table from "../../../assets/images/wooden-table.avif";
import stars from "../../../assets/svg/stars.svg";
import colors from "../../../assets/svg/color container.svg";
import WhiteChair from "../../../assets/images/white-chair.png";
import blackchair from "../../../assets/images/black-chair.png";
import google from "../../../assets/images/google.png";
import appstore from "../../../assets/images/appstore.png";
import forniture from "../../../assets/images/forniture.jpeg";
import sofa2 from "../../../assets/images/sofa2.jpg";
import drawer2 from "../../../assets/images/drawer2.webp";
import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import { BlogsMockData } from "../mockdata/blogs.mock";
import Carousel from "./carousel";
import LinkData from "./popular products/linkdata";

const HomeComponent: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const filteredData = BlogsMockData.filter((item) => item.type === "home");
  const filteredPopular = BlogsMockData.filter(
    (item) => item.type === "popular"
  );

  return (
    <HomeContainer>
      <HomeMain>
        <div className="bg-image-left">
          <div className="Home-left">
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
            <button>
              <span>Explore</span>
            </button>
          </div>
        </div>
        <div>
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
              Highly secured online payment <br /> method{" "}
            </p>
          </div>
        </SecureCon>
        <MoneyCon>
          <div className="moneyback-div">
            <img src={arrow} alt="arrow-icon" />
            <b>Moneyback Guarantee </b>
            <p>
              Guaranteed money back in <br /> 30 days{" "}
            </p>
          </div>
        </MoneyCon>
      </HomeInfo>
      <CategoryCon>
        <div>
          <h2>Categories</h2>
          <p>Don't Miss The Most Popular Products!</p>
        </div>
        <CategoryWrap>
          {filteredPopular.map((value) => (
            <CategoryDiv key={value.id} to={`/BlogsDetail/${value.id}`}>
              <img src={value.photo} alt="popular-product-iamage" />
              <div className="text-wrap">
                <b>{value.header}</b>
                <div className="price-wrap">
                  <h6>Starts from</h6>
                  <p>{value.prise}</p>
                </div>
              </div>
            </CategoryDiv>
          ))}
        </CategoryWrap>
      </CategoryCon>
      <ProductsMain>
        <div className="products-header">
          <h1>Popular Products</h1>
          <p>Don't Miss The Most Popular Products!</p>
        </div>
        <LinkData />
      </ProductsMain>
      <FeaturedPros>
        <div className="Menu-featured-head">
          <h2>Featured Products</h2>
          <p>Choose your desired products from our featured product</p>
        </div>
        <div style={{ display: "flex", gap: "60px" }}>
          <FeaturedAdding>
            <div className="featured-left">
              <div className="first-part">
                <h1>Single Cushioned Leather Chair </h1>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <b>$120.00</b>
                  <p>$25.00</p>
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
            <div style={{ display: "flex" }}>
              <MainAddWrap>
                <div style={{ display: "flex", gap: "30px" }}>
                  <b>Color:</b>
                  <img src={colors} alt="colors-img" />
                </div>
                <div style={{ display: "flex", gap: "30px" }}>
                  <b>Serial:</b>
                  <p>W123D514XQ899</p>
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
                <button>Add To Cart</button>
              </MainAddWrap>
              <MainAddWrap>
                <div style={{ display: "flex", gap: "30px" }}>
                  <b>Availability:</b>
                  <p>Only 7 Left In Stock</p>
                </div>
                <div style={{ display: "flex", gap: "30px" }}>
                  <b>Product Type:</b>
                  <p>Furniture & Decor</p>
                </div>
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
                  width: "310px",
                  height: "385px",
                  background:
                    "url(<path-to-image>) lightgray 50% / cover no-repeat",
                }}
              >
                <img src={chair2} alt="chair" />
              </div>
            </div>
            <div className="little-imgs">
              <div
                style={{
                  width: "100px",
                  height: "115px",
                  background:
                    "url(<path-to-image>) lightgray 50% / cover no-repeat",
                }}
              >
                <img src={WhiteChair} alt="chair" style={{ width: "100px" }} />
              </div>
              <div
                style={{
                  width: "100px",
                  height: "115px",
                  background:
                    "url(<path-to-image>) lightgray 50% / cover no-repeat",
                }}
              >
                <img src={blackchair} alt="chair" style={{ width: "100px" }} />
              </div>
              <div
                style={{
                  width: "100px",
                  height: "115px",
                  background:
                    "url(<path-to-image>) lightgray 50% / cover no-repeat",
                }}
              >
                <img src={table} alt="chair" style={{ width: "100px" }} />
              </div>
            </div>
          </AddingImgCon>
        </div>
      </FeaturedPros>
      <SummerSale>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <h2>35% Summer Sales Discount. Use Coupon Code:</h2>
          <p>Furnimart</p>
        </div>
        <button>Shop Now</button>
      </SummerSale>
      <LatestPickCon>
        <div className="latest-header">
          <h1>Latest Picks For You</h1>
          <p>Don't Miss The Most Popular Products!</p>
        </div>
        <LatestPickWrap>
          {filteredData.map((value) => (
            <LatestProducts key={value.id} to={`/BlogsDetail/${value.id}`}>
              <img src={value.photo} alt="image" className="product-image" />
              <div className="texts-wrap">
                <img src={stars} alt="img" />
                <h1>{value.header}</h1>
                <p>{value.prise}</p>
              </div>
            </LatestProducts>
          ))}
        </LatestPickWrap>
      </LatestPickCon>
      <DownloadApp>
        <div className="download-wrap">
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
                <img src={appstore} alt="Appstore-image" />
              </div>
            </div>
          </div>
          <div>
            <img src={drawer} alt="forniture-image" className="drawer-img" />
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
                  label="Your email adress"
                  variant="standard"
                />
              </Box>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </DownloadApp>
      <SummerSale></SummerSale>
      <ReadAboutIndustry>
        <div className="read-header">
          <h1>Blogs & Insights</h1>
          <p>Read About Furniture Industry</p>
        </div>
        <ReadAboutWrap>
          <ReadAboutDivs>
            <img src={sofa2} alt="forniture-image" />
            <div className="read-text">
              <h2>The best wooden furniture for apartments</h2>
              <p>
                One may not need charts and graphs at this point to know that,
                in the past couple of years especially, the buying and selling
                o...
              </p>
              <b>Read More</b>
            </div>
          </ReadAboutDivs>
          <ReadAboutDivs>
            <img src={drawer2} alt="forniture-image" />
            <div className="read-text">
              <h2>The best wooden furniture for apartments</h2>
              <p>
                One may not need charts and graphs at this point to know that,
                in the past couple of years especially, the buying and selling
                o...
              </p>
              <b>Read More</b>
            </div>
          </ReadAboutDivs>
          <ReadAboutDivs>
            <img src={forniture} alt="forniture-image" />
            <div className="read-text">
              <h2>The best wooden furniture for apartments</h2>
              <p>
                One may not need charts and graphs at this point to know that,
                in the past couple of years especially, the buying and selling
                o...
              </p>
              <b>Read More</b>
            </div>
          </ReadAboutDivs>
        </ReadAboutWrap>
      </ReadAboutIndustry>
      <ProductsImg>
        <Carousel />
      </ProductsImg>
    </HomeContainer>
  );
};

export default HomeComponent;
