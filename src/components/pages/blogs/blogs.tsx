import {
  AboutBgWrap,
  BlogsCon,
  BlogsLeftWrap,
  BlogsMainWrap,
  BlogsRightCon,
  BlogsRightWrap,
  NewsLetterCon,
  ReadMore,
  RecentPostsCon,
} from "./style";
import arrow from "../../../assets/svg/smallarrow.svg";
import SearchIcon from "@mui/icons-material/Search";
import recentpost from "../../../assets/images/recen-post.jpg";
import recentpost2 from "../../../assets/images/recent-post2.jpeg";
import { BlogsMockData } from "../mockdata/blogs.mock";
import { Stack } from "@mui/system";
import { Pagination } from "@mui/material";

const BlogsComponent = () => {
  const filteredData = BlogsMockData.filter((item) =>  item.type === "blogs");
  return (
    <BlogsCon>
      <div className="collection-bg">
        <AboutBgWrap>
          <b>Blogs</b>
          <div
            style={{
              width: "900px",
              height: "0.5px",
              backgroundColor: "white",
              marginBottom: "-25px",
              marginRight: "-155px",
            }}
          ></div>
          <div>
            <p>Home</p>
            <img src={arrow} alt="arrow" />
            <p>About</p>
          </div>
        </AboutBgWrap>
      </div>
      <BlogsMainWrap>
        <BlogsLeftWrap>
          <form action="" style={{ display: "flex" }}>
            <input type="search" placeholder="Search" />
            <div
              style={{
                height: "45px",
                width: "70px",
                backgroundColor: "#5F9999",
                padding: "8px 18px 8px 20px",
                cursor: "pointer",
              }}
            >
              <SearchIcon sx={{ fontSize: "30px", color: "white" }} />
            </div>
          </form>
          <h1>Categories</h1>
          <div className="categories-wrap">
            <div>
              <p>Furniture</p>
              <p>Fashionable</p>
              <p>Carpets</p>
              <p>Curtains</p>
            </div>
            <div>
              <p>(09)</p>
              <p>(02)</p>
              <p>(07)</p>
              <p>(01)</p>
            </div>
          </div>
          <h1>Recent Posts</h1>
          <RecentPostsCon>
            <div className="recent-posts">
              <img src={recentpost} alt="product-image" />
              <div>
                <h2>Sweater For Winter</h2>
                <p>April 01 , 2022</p>
              </div>
            </div>
            <div className="recent-posts">
              <img src={recentpost2} alt="product-image" />
              <div>
                <h2>Sweater For Winter</h2>
                <p>April 01 , 2022</p>
              </div>
            </div>
            <div className="recent-posts">
              <img src={recentpost} alt="product-image" />
              <div>
                <h2>Sweater For Winter</h2>
                <p>April 01 , 2022</p>
              </div>
            </div>
            <div className="recent-posts">
              <img src={recentpost2} alt="product-image" />
              <div>
                <h2>Sweater For Winter</h2>
                <p>April 01 , 2022</p>
              </div>
            </div>
          </RecentPostsCon>
          <h1>Newsletter</h1>
          <NewsLetterCon>
            <form action="">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </form>
          </NewsLetterCon>
        </BlogsLeftWrap>
        <BlogsRightCon>
          {filteredData.map((value) => {
            return (
              <BlogsRightWrap>
                <img src={value.photo} alt="image" />
                <div className="texts-wrap">
                  <h1>{value.header}</h1>
                  <p>{value.date}</p>
                  <h3>
                    The denim resurgence is the result of the long, secretive
                    days that people have to stay indoors.The era of sportswear
                    emerged a...
                  </h3>
                  <ReadMore key={value.id} to={`/BlogsDetail/${value.id}`}>
                    Read More
                  </ReadMore>
                </div>
              </BlogsRightWrap>
            );
          })}
        </BlogsRightCon>
      </BlogsMainWrap>
      <Stack spacing={2} sx={{ margin: "20px 0px 80px", marginLeft: "-100px" }}>
        <Pagination count={2} />
      </Stack>
    </BlogsCon>
  );
};

export default BlogsComponent;
