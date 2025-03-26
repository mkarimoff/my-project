import { BlogsMockData } from "../../mockdata/blogs.mock"
import { PopularItems, PopularMain, PopularWrap } from "./style";
import stars from "../../../../assets/svg/stars.svg";

const Discounted = () => {

    const filteredDiscounted = BlogsMockData.filter(
    (item) => item.type === "discounted"
    );
  return (

    <div>
            <PopularMain>
      {filteredDiscounted.map((value) => (
          <PopularWrap key={value.id} to={`/BlogsDetail/${value.id}`}>
            <PopularItems>
              <div className="products-div">
                <img src={value.photo} alt="forniture-image" />
              </div>
              <div className="texts-wrap">
                <img src={stars} alt="stars-icon" />
                <b>{value.header}</b>
                <p style={{color:'#83868C',textDecoration:'line-through solid 1px black'}}>{value.old_prise}</p>
                <p>{value.new_price}</p>
              </div>
            </PopularItems>
          </PopularWrap>
      ))}
      </PopularMain>
    </div>
  )
}

export default Discounted