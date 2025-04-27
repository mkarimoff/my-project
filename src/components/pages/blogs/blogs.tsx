import { useEffect, useState } from "react";
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
import CircularProgress from "@mui/material/CircularProgress"; // Added for loading spinner
import recentpost from "../../../assets/images/recen-post.jpg";
import recentpost2 from "../../../assets/images/recent-post2.jpeg";
import { BlogsMockData } from "../mockdata/blogs.mock";
import { Stack } from "@mui/system";
import { Pagination } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogsComponent = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Track the input value
  const [filteredBlogs, setFilteredBlogs] = useState(
    BlogsMockData.filter((item) => item.type === "blogs")
  ); // Track filtered blogs
  const [loading, setLoading] = useState(false); // Track loading state

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    AOS.refresh();

    return () => {
      AOS.refreshHard();
    };
  }, []);

  // Handle search input change (only updates the input value, doesn't filter yet)
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Handle search form submission (triggered by clicking the search icon)
  const handleSearchSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Start loading

    // Simulate a search delay (e.g., 1 second) to show the loading state
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Filter blogs based on the search query
    const filtered = BlogsMockData.filter((item) => {
      const matchesType = item.type === "blogs";
      const matchesQuery = searchQuery
        ? item.header.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
        : true;
      return matchesType && matchesQuery;
    });

    setFilteredBlogs(filtered); // Update the filtered blogs
    setLoading(false); // Stop loading
  };

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
        <BlogsLeftWrap data-aos="fade-right">
          <form onSubmit={handleSearchSubmit} style={{ display: "flex" }}>
            <input
              type="search"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button
              type="submit"
              style={{
                height: "45px",
                width: "70px",
                backgroundColor: "#5F9999",
                padding: "8px 18px 8px 20px",
                cursor: "pointer",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SearchIcon sx={{ fontSize: "30px", color: "white" }} />
            </button>
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
        <BlogsRightCon data-aos="fade-left">
          {loading ? (
            <div className="loading-container">
              <CircularProgress size={40} sx={{ color: "#5F9999" }} />
              <p>Searching...</p>
            </div>
          ) : filteredBlogs.length > 0 ? (
            filteredBlogs.map((value) => (
              <BlogsRightWrap key={value.id} to={`/BlogsDetail/${value.id}`}>
                <img src={value.photo} alt="image" />
                <div className="texts-wrap">
                  <h1>{value.header}</h1>
                  <p>{value.date}</p>
                  <h3>
                    The denim resurgence is the result of the long, secretive
                    days that people have to stay indoors. The era of sportswear
                    emerged a...
                  </h3>
                  <ReadMore>Read More</ReadMore>
                </div>
              </BlogsRightWrap>
            ))
          ) : (
            <p className="no-results">No blogs found matching your search.</p>
          )}
        </BlogsRightCon>
      </BlogsMainWrap>
      <Stack spacing={2} sx={{ margin: "20px 0px 80px", marginLeft: "-100px" }}>
        <Pagination count={2} />
      </Stack>
    </BlogsCon>
  );
};

export default BlogsComponent;
