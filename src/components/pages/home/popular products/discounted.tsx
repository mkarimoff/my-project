import { BlogsMockData } from "../../mockdata/blogs.mock";
import { PopularItems, PopularWrap } from "./style";
import stars from "../../../../assets/svg/stars.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Discounted = () => {
  const filteredDiscounted = BlogsMockData.filter(
    (item) => item.type === "discounted"
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div style={{ width: "100%", maxWidth: "1100px" }}>
      <Slider {...settings}>
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
      </Slider>
    </div>
  );
};

export default Discounted;
