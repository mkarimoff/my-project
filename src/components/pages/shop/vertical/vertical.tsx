// vertical/vertical.tsx
import { ShopCon, ShopProducts, ShopProductsWrap } from './style'
import stars from '../../../../assets/svg/stars.svg'
import { BlogsMockData } from '../../mockdata/blogs.mock'

interface VerticalMenuProps {
  products: typeof BlogsMockData; // Type the products prop to match the data structure
}

const VerticalMenu = ({ products }: VerticalMenuProps) => {
  return (
    <div data-aos="fade-up">
      <ShopCon>
        <ShopProductsWrap>
          {products.map((value) => (
            <ShopProducts key={value.id} to={`/collection/${value.id}`}>
              <img src={value.photo} alt="image" className="product-image" />
              <div className="texts-wrap">
                <img src={stars} alt="img" />
                <h1>{value.header}</h1>
                <p>{value.price}</p>
              </div>
            </ShopProducts>
          ))}
        </ShopProductsWrap>
      </ShopCon>
    </div>
  );
};

export default VerticalMenu;
