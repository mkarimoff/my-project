import { BlogsMockData } from "../../mockdata/blogs.mock";
import { PopularItems, PopularWrap } from "./style";
import stars from "../../../../assets/svg/stars.svg";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

const Discounted = () => {
  const filteredDiscounted = BlogsMockData.filter(
    (item) => item.type === "discounted"
  );
  return (
    <div style={{ width: "100%", maxWidth: "1400px" }}>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        infinite={true}
        autoPlay={false}
        keyBoardControl={true}
        customTransition="transform 0.5s ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        arrows={true}
        slidesToSlide={1}
        responsive={{
          fixed: {
            breakpoint: { max: 4000, min: 0 },
            items: 3,
            partialVisibilityGutter: 0,
          },
        }}
      >
        {filteredDiscounted.map((value) => (
          <PopularWrap key={value.id} to={`/BlogsDetail/${value.id}`}>
            <PopularItems>
              <div className="products-div">
                <img src={value.photo} alt="forniture-image" />
              </div>
              <div className="texts-wrap">
                <img src={stars} alt="stars-icon" />
                <b>{value.header}</b>
                <div style={{ display: "flex", gap: "20px" }}>
                  <p
                    style={{
                      color: "#83868C",
                      textDecoration: "line-through solid 1px black",
                    }}
                  >
                    {value.old_prise}
                  </p>
                  <p>{value.new_price}</p>
                </div>
              </div>
            </PopularItems>
          </PopularWrap>
        ))}
      </Carousel>
    </div>
  );
};

export default Discounted;
