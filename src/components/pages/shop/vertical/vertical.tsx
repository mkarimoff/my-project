import { ShopCon, ShopProducts, ShopProductsWrap } from './style'
import stars from '../../../../assets/svg/stars.svg'
import { BlogsMockData } from '../../mockdata/blogs.mock'

const VerticalMenu = () => {
  return (
    <div data-aos="fade-up">
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
  )
}

export default VerticalMenu