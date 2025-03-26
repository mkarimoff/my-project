import { BlogsMockData } from "../../mockdata/blogs.mock";
import stars from "../../../../assets/svg/stars.svg";
import { PopularItems, PopularMain, PopularWrap } from "./style";

const NewArrival = () => {
  const filteredNewarrival = BlogsMockData.filter(
    (item) => item.type === "new"
  );
  return (
    <div>
      <PopularMain>
      {filteredNewarrival.map((value) => (
          <PopularWrap key={value.id} to={`/BlogsDetail/${value.id}`}>
            <PopularItems>
              <div className="products-div">
                <img src={value.photo} alt="forniture-image" />
              </div>
              <div className="texts-wrap">
                <img src={stars} alt="stars-icon" />
                <b>{value.header}</b>
                <p>{value.prise}</p>
              </div>
            </PopularItems>
          </PopularWrap>
      ))}
      </PopularMain>
    </div>
  );
};

export default NewArrival;
