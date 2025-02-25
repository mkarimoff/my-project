import { AddingImgCon, BestSellerMain, BestSellerPros, CategoryCon, CategoryDiv, CategoryWrap, DelivCon, DownloadApp, FeaturedAdding, FeaturedPros, HomeContainer, HomeInfo, HomeMain, LatestPickCon, LatestPickWrap, LatestProducts, MainAddWrap, MoneyCon,  ProductsImg,  ProductsMain, ProductsMenu, ReadAboutDivs, ReadAboutIndustry, ReadAboutWrap, SecureCon,  SummerSale,  SupportCon, } from "./style"
import { FaFacebook, FaInstagram,  FaPinterest,  FaTwitter } from "react-icons/fa"
import chair from "../../../assets/images/chair.png"
import cyrcle from "../../../assets/svg/cyrcle.svg"
import delivery from "../../../assets/svg/delivery.svg"
import support from "../../../assets/svg/support.svg"
import security from "../../../assets/svg/security.svg"
import arrow from "../../../assets/svg/round-arrow.svg"
import sofa from "../../../assets/images/sofa.png"
import light from "../../../assets/images/light.webp"
import chair2 from "../../../assets/images/chair-category.png"
import drawer from "../../../assets/images/drawer.png"
import table from "../../../assets/images/wooden-table.avif"
import decor from "../../../assets/images/decor.webp"
import stars from "../../../assets/svg/stars.svg"
import table2 from "../../../assets/images/table2.webp"
import colors from "../../../assets/svg/color container.svg"
import add from "../../../assets/images/Quantity.png"
import WhiteChair from "../../../assets/images/white-chair.png"
import blackchair from "../../../assets/images/black-chair.png"
import google from "../../../assets/images/google.png"
import appstore from "../../../assets/images/appstore.png"
import forniture from "../../../assets/images/forniture.jpeg"
import sofa2 from "../../../assets/images/sofa2.jpg"
import drawer2 from "../../../assets/images/drawer2.webp"
import bgdecor from "../../../assets/images/bg-decor.jpg"
import bglight from "../../../assets/images/bg-light.jpg"
import granit from "../../../assets/images/granit.jpg"
import { Box, TextField } from "@mui/material"

const HomeComponent = () => {
  return (
    <HomeContainer>
      <HomeMain>
        <div className="bg-image-left">
          <div className="Home-left">
            <img src={cyrcle} alt="change-img" style={{width:'140px',marginBottom:'-95px',marginLeft:'-55px'}} />
            <p>
               Save Upto 50%!
             </p>
             <h3>
               Clean & Classic <br />
                Hand made wood <br />
                furniture
             </h3>
             <button><span>Explore</span></button>
          </div>
        </div>
        <div>
           <img src= {chair} alt="chair-image" style={{width:'500px',height:'530px'}}/>
        </div>
      </HomeMain>
      <HomeInfo>
        <DelivCon>
           <div>
              <img src={delivery} alt="delivery-icon" />
              <b>Fast Delivery</b>
              <p>Delivery within 24 Hours in <br /> any Place</p>
           </div>
        </DelivCon>
        <SupportCon>
           <div>
              <img src={support} alt="support-icon" />
              <b>24/7 Support</b>
              <p>Get our support any time at <br /> any hour</p>
           </div>
        </SupportCon>
        <SecureCon>
           <div>
              <img src={security} alt="security-icon" />
              <b>Secure Shopping</b>
              <p>Highly secured online payment <br /> method </p>
           </div>
        </SecureCon>
        <MoneyCon>
           <div className="moneyback-div">
              <img src={arrow} alt="arrow-icon" />
              <b>Moneyback Guarantee </b>
              <p>Guaranteed money back in <br /> 30 days </p>
           </div>
        </MoneyCon>
      </HomeInfo>
      <CategoryCon>
         <div>
            <h2>Categories</h2>
            <p>Don't Miss The  Most Popular Products!</p>
         </div>
         <CategoryWrap>
          <CategoryDiv >
            <img src={sofa} alt="img" />
            <div className='text-wrap'>
            <b>Sofas</b>
            <div className="price-wrap">
            <h6>Starts from</h6>
            <p>200$</p>
             </div>
            </div>
          </CategoryDiv>
          <CategoryDiv >
            <img src={light} alt="img" />
            <div className='text-wrap'>
            <b>Lights</b>
            <div className="price-wrap">
            <h6>Starts from</h6>
            <p>120$</p>
             </div>
            </div>
          </CategoryDiv>
          <CategoryDiv >
            <img src={chair2} alt="img" />
            <div className='text-wrap'>
            <b>Chairs</b>
            <div className="price-wrap">
            <h6>Starts from</h6>
            <p>120$</p>
             </div>
            </div>
          </CategoryDiv>
          <CategoryDiv >
            <img src={drawer} alt="img" />
            <div className='text-wrap'>
            <b>Drawers</b>
            <div className="price-wrap">
            <h6>Starts from</h6>
            <p>130$</p>
             </div>
            </div>
          </CategoryDiv>
          <CategoryDiv >
            <img src={table} alt="img" />
            <div className='text-wrap'>
            <b>Wooden Tables</b>
            <div className="price-wrap">
            <h6>Starts from</h6>
            <p>90$</p>
             </div>
            </div>
          </CategoryDiv>
          <CategoryDiv >
            <img src={decor} alt="img" />
            <div className='text-wrap'>
            <b>Home Decor</b>
            <div className="price-wrap">
            <h6>Starts from</h6>
            <p>202$</p>
             </div>
            </div>
          </CategoryDiv>
          <CategoryDiv >
            <img src={sofa} alt="img" />
            <div className='text-wrap'>
            <b>Sofa</b>
            <div className="price-wrap">
            <h6>Starts from</h6>
            <p>200$</p>
             </div>
            </div>
          </CategoryDiv>
          <CategoryDiv >
            <img src={light} alt="img" />
            <div className='text-wrap'>
            <b>Lights</b>
            <div className="price-wrap">
            <h6>Starts from</h6>
            <p>120$</p>
             </div>
            </div>
          </CategoryDiv>
         </CategoryWrap>
      </CategoryCon>
      <ProductsMain>
        <div className="products-header">
          <h1>Popular Products</h1>
          <p>Don't Miss The  Most Popular Products!</p>
        </div>
        <ProductsMenu>
          <p>New Arrivals</p>
          <p>Best Sellers</p>
          <p>Discounted</p>
          <p>On Sale</p>
        </ProductsMenu>
        <BestSellerMain>
        <BestSellerPros>
           <div className="products-div">
              <img src={chair2} alt="forniture-image" />
           </div>
           <div className="texts-wrap">
              <img src={stars} alt="stars-icon" />
              <b>Single cushioned Chair </b>
              <p>$250.00</p>
           </div>
        </BestSellerPros>
        <BestSellerPros>
           <div className="products-div">
              <img src={table2} alt="forniture-image" />
           </div>
           <div className="texts-wrap">
              <img src={stars} alt="stars-icon" />
              <b>Table </b>
              <p>$150.00</p>
           </div>
        </BestSellerPros>
        <BestSellerPros>
           <div className="products-div">
              <img src={chair} alt="forniture-image" />
           </div>
           <div className="texts-wrap">
              <img src={stars} alt="stars-icon" />
              <b>Single cushioned Chair </b>
              <p>$430.00</p>
           </div>
        </BestSellerPros>
        <BestSellerPros>
           <div className="products-div">
              <img src={sofa} alt="forniture-image" />
           </div>
           <div className="texts-wrap">
              <img src={stars} alt="stars-icon" />
              <b>Soft Sofa </b>
              <p>$200.00</p>
           </div>
        </BestSellerPros>
        </BestSellerMain>
      </ProductsMain>
      <FeaturedPros>
        <div className="Menu-featured-head" >
          <h2>Featured Products</h2>
          <p>Choose your desired products from our featured product</p>
        </div>
        <div style={{display:'flex',gap:'60px'}}>
          <FeaturedAdding>
          <div className="featured-left">
            <div className="first-part">
               <h1>Single Cushioned Leather Chair </h1>
               <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
                  <b>$120.00</b>
                  <p>$25.00</p>
               </div>
                 <img src={stars} alt="stars-icon" />
                 <div style={{width: "590px",height: "2px",background:'var(--Border-Color, #E9E9E9)'}}></div>
            </div>
          </div>
            <div style={{display:'flex'}}>
            <MainAddWrap>
              <div style={{display:'flex',gap:'30px'}}>
                 <b>Color:</b>
                 <img src={colors} alt="colors-img" />
              </div>
              <div style={{display:'flex',gap:'30px'}}>
                 <b>Serial:</b>
                 <p>W123D514XQ899</p>
              </div>
              <div>
                 {/* <b>Quantity:</b> */}
                 <img src={add} alt="img" />
              </div>
              <button>Add To Cart</button>
            </MainAddWrap>
            <MainAddWrap>
              <div style={{display:'flex',gap:'30px'}}>
                 <b>Availability:</b>
                 <p>Only 7 Left In Stock</p>
              </div>
              <div style={{display:'flex',gap:'30px'}}>
                 <b>Product Type:</b>
                 <p>Furniture & Decor</p>
              </div>
              <div className="social-media-icons">
                 <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                   <FaPinterest size={20} color="#080005" />
                 </a>
                 <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                   <FaFacebook size={20} color="#080005" />
                 </a>
                 <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                   <FaInstagram size={20} color="#080005" />
                 </a>
                 <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                   <FaTwitter size={20} color="#080005" />
                 </a>
              </div>
            </MainAddWrap>
            </div>
          </FeaturedAdding>
          <AddingImgCon>
            <div>
              <div style={{width: "310px",height: "385px",background: "url(<path-to-image>) lightgray 50% / cover no-repeat"}}>
                <img src={chair2} alt="chair" />
              </div>
            </div>
            <div className="little-imgs">
              <div style={{width: "100px",height: "115px",background: "url(<path-to-image>) lightgray 50% / cover no-repeat"}}>
                <img src={WhiteChair} alt="chair" style={{width:'100px'}}/>
              </div>
              <div style={{width: "100px",height: "115px",background: "url(<path-to-image>) lightgray 50% / cover no-repeat"}}>
                <img src={blackchair} alt="chair" style={{width:'100px'}}/>
              </div>
              <div style={{width: "100px",height: "115px",background: "url(<path-to-image>) lightgray 50% / cover no-repeat"}}>
                <img src={table} alt="chair" style={{width:'100px'}}/>
              </div>
            </div>
          </AddingImgCon>
        </div>
      </FeaturedPros>
      <SummerSale>
        <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
           <h2>
              35% Summer Sales Discount. Use Coupon Code: 
           </h2>
           <p>
             Furnimart
           </p>
        </div>
        <button>Shop Now</button>
      </SummerSale>
      <LatestPickCon>
        <div className="latest-header">
          <h1>Latest Picks For You</h1>
          <p>Don't Miss The  Most Popular Products!</p>
        </div>
        <LatestPickWrap>
        <LatestProducts>
           <div className="picks-bg">
              <img src={chair} alt="forniture-image" />
           </div>
           <div className="texts-wrap">
              <img src={stars} alt="stars-icon" />
              <b>Single cushioned Chair </b>
              <p>$250.00</p>
           </div>
        </LatestProducts>
        <LatestProducts>
           <div className="picks-bg">
              <img src={chair2} alt="forniture-image" />
           </div>
           <div className="texts-wrap">
              <img src={stars} alt="stars-icon" />
              <b>Single cushioned Chair </b>
              <p>$250.00</p>
           </div>
        </LatestProducts>
        <LatestProducts>
           <div className="picks-bg">
              <img src={sofa} alt="forniture-image" />
           </div>
           <div className="texts-wrap">
              <img src={stars} alt="stars-icon" />
              <b>Single cushioned Chair </b>
              <p>$600.00</p>
           </div>
        </LatestProducts>
        <LatestProducts>
           <div className="picks-bg">
              <img src={WhiteChair} alt="forniture-image" />
           </div>
           <div className="texts-wrap">
              <img src={stars} alt="stars-icon" />
              <b>Single cushioned Chair </b>
              <p>$250.00</p>
           </div>
        </LatestProducts>
        <LatestProducts>
           <div className="picks-bg">
              <img src={table} alt="forniture-image" />
           </div>
           <div className="texts-wrap">
              <img src={stars} alt="stars-icon" />
              <b>Wooden Table </b>
              <p>$150.00</p>
           </div>
        </LatestProducts>
        <LatestProducts>
           <div className="picks-bg">
              <img src={blackchair} alt="forniture-image" />
           </div>
           <div className="texts-wrap">
              <img src={stars} alt="stars-icon" />
              <b>Soft Chair </b>
              <p>$350.00</p>
           </div>
        </LatestProducts>
        <LatestProducts>
           <div className="picks-bg">
              <img src={table2} alt="forniture-image" />
           </div>
           <div className="texts-wrap">
              <img src={stars} alt="stars-icon" />
              <b>Best wooden Table </b>
              <p>$130.00</p>
           </div>
        </LatestProducts>
        <LatestProducts>
           <div className="picks-bg">
              <img src={drawer} alt="forniture-image" />
           </div>
           <div className="texts-wrap">
              <img src={stars} alt="stars-icon" />
              <b>Drawer </b>
              <p>$750.00</p>
           </div>
        </LatestProducts>
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
              <div style={{width:'390px',height:'1px',opacity: '0.3',background: '#928E8B'}}></div>
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
                   sx={{  '& > :not(style)': { m: 1, width: '30ch' } }}
                   noValidate
                   autoComplete="off"
                    >
                      <TextField id="standard-basic" type="email"  required label="Your email adress" variant="standard" />
                    </Box>
                 <button>Submit</button>
              </div>
           </div>
         </div>
      </DownloadApp>
      <SummerSale>
      </SummerSale>
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
               <p>One may not need charts and graphs at this point to know that, in the past couple of years especially, the buying and selling o...</p>
               <b>Read More</b>
             </div>
          </ReadAboutDivs>
          <ReadAboutDivs>
               <img src={drawer2} alt="forniture-image" />
             <div className="read-text">
               <h2>The best wooden furniture for apartments</h2>
               <p>One may not need charts and graphs at this point to know that, in the past couple of years especially, the buying and selling o...</p>
               <b>Read More</b>
             </div>
          </ReadAboutDivs>
          <ReadAboutDivs>
               <img src={forniture} alt="forniture-image" />
             <div className="read-text">
               <h2>The best wooden furniture for apartments</h2>
               <p>One may not need charts and graphs at this point to know that, in the past couple of years especially, the buying and selling o...</p>
               <b>Read More</b>
             </div>
          </ReadAboutDivs>
          </ReadAboutWrap>
      </ReadAboutIndustry>
      <ProductsImg>
      <img src={drawer2} alt="products-img" />
        <img src={bgdecor} alt="products-img" />
        <div className="insta-wrap">
          <h1>Connect To Instagram</h1>
          <p>The pinnacle of versatality, our core collectiong is flattering.</p>
          <a href="https://www.instagram.com/m_karimoff/"><button>Join now</button></a>
        </div>
        <img src={granit} alt="products-img" />
        <img src={bglight} alt="products-img" />
      </ProductsImg>
    </HomeContainer>
  )
}

export default HomeComponent