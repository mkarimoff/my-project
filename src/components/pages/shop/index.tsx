import arrow from "../../../assets/svg/smallarrow.svg";
import stars from "../../../assets/svg/stars.svg";
import MultipleSelectChip from "./mui/category";
import MultipleSelectCheckmarks from "./mui/discount";
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
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import GroupedSelect from "./mui/price";

const ShopComponent = () => {

  let food = document.querySelectorAll('.food');
    food.forEach((value) => {
        value.addEventListener('click', () => {
            food.forEach(value => {
                value.classList.remove('active')
            })
            value.classList.add('active')
        })
    })

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
       
          </CollectFilter>
          <GridsWrap>
            <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
              <b>25</b>
              <p>Results Found</p>
            </div>
           <div>
            <ViewModuleIcon style={{fontSize:'40px',fill:'gray',cursor:'pointer'}}/>
            <ViewListIcon style={{fontSize:'40px',fill:'gray',cursor:'pointer'}}/>
           </div>
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
