import arrow from "../../../assets/svg/smallarrow.svg";
import grids from "../../../assets/svg/Grids.svg";
import stars from "../../../assets/svg/stars.svg";
import MultipleSelectChip from "./mui/category";
import MultipleSelectCheckmarks from "./mui/discount";
import GroupedSelect from "./mui/price";
import IconLabelButtons from "./mui/search";
import {
  CollectBgWrap,
  CollectFilter,
  CollectionWrap,
  GridsWrap,
  ShopCon,
  ShopProducts,
  ShopProductsWrap,
} from "./style";
import { BlogsMockData } from "../mockdata/blogs.mock";

const ShopComponent = () => {

  return (
    <>
      <CollectionWrap>
        <div className="collection-bg">
          <CollectBgWrap>
            <b>Products</b>
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
              <p>Collections</p>
            </div>
          </CollectBgWrap>
        </div>
        <div>
          <CollectFilter>
            <p>Filter:</p>
            <MultipleSelectChip />
            <GroupedSelect />
            <MultipleSelectCheckmarks />
            <IconLabelButtons />
          </CollectFilter>
          <GridsWrap>
            <p>25 Results Found</p>
            <img src={grids} alt="grids" />
          </GridsWrap>
          <ShopCon>
            <ShopProductsWrap>
              {BlogsMockData.map((value) => (
                  <ShopProducts
                    key={value.id}
                    to={`/collection/${value.id}`}
                  >
                    <img
                      src={value.photo}
                      alt="image"
                      className="product-image"
                    />
                    <div className="texts-wrap">
                      <img src={stars} alt="img" />
                      <h1>{value.header}</h1>
                      <p>{value.prise}</p>
                    </div>
                  </ShopProducts>

              ))}
            </ShopProductsWrap>
          </ShopCon>
        </div>
      </CollectionWrap>
    </>
  );
};

export default ShopComponent;
