import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import arrow from "../../../../assets/svg/smallarrow.svg";
import { AboutBgWrap } from "../style";
import { BlogsMockData } from "../../mockdata/blogs.mock";
import { BlogDetailCon } from "./style";
import AOS from 'aos';
import 'aos/dist/aos.css';

const BlogDetail = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Animations trigger every time elements come into view
      mirror: true, // Animations trigger when scrolling up
    });

    AOS.refresh(); // Ensure animations are recalculated after initialization

    return () => {
      AOS.refreshHard(); // Reset AOS state on component unmount
    };
  }, []); // Empty dependency array to run only on mount

  let { id } = useParams();
  console.log("detail:", BlogsMockData);

  const data = BlogsMockData.find((value) => value.id.toString() === id);

  console.log(id);
  console.log("data", data);

  return (
    <BlogDetailCon>
      <div className="collection-bg">
        <AboutBgWrap>
          <b>Blog Details</b>
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
            <p>Blog Details</p>
          </div>
        </AboutBgWrap>
      </div>
      <img src={data?.photo} alt="image" className="product-image" data-aos="fade-up" />
      <div className="texts-wrap" data-aos="fade-up">
        <h1>{data?.header}</h1>
        <div className="date-author-wrap">
          <div>
            <b>{data?.date_name}</b>
            <p>{data?.date}</p>
          </div>
          <div>
            <b>{data?.author}</b>
            <p>{data?.author_name}</p>
          </div>
        </div>
        <div className="descs-wrap">
          <p>{data?.description}</p>
          <p>{data?.second_description}</p>
        </div>
      </div>
      <div className="comments-wrap" data-aos="fade-up">
        <h2>0 Comments available</h2>
        <form action="">
          <textarea name="" id="" placeholder="Write a comment"></textarea>
          <button>Submit</button>
        </form>
      </div>
    </BlogDetailCon>
  );
};

export default BlogDetail;
