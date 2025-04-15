import { ShopConH, ShopProducts, ShopProductsWrap } from './style'
import stars from '../../../../assets/svg/stars.svg'
import { BlogsMockData } from '../../mockdata/blogs.mock'

interface HorizontMenuProps {
  products: typeof BlogsMockData; 
}

const HorizontMenu = ({ products }: HorizontMenuProps) => {
  return (
    <div data-aos="fade-up">
      <ShopConH>
        <ShopProductsWrap>
          {products.map((value) => (
            <ShopProducts key={value.id} to={`/collection/${value.id}`}>
              <img
                src={value.photo}
                alt="image"
                className="product-image"
              />
              <div className="texts-wrap">
                <div>
                  <h1>{value.header}</h1>
                  <p>{value.prise}</p>
                </div>
                <img src={stars} alt="img" className="star-name" />
              </div>
            </ShopProducts>
          ))}
        </ShopProductsWrap>
      </ShopConH>
    </div>
  );
};

export default HorizontMenu;
