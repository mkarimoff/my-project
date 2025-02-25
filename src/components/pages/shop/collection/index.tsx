import arrow from '../../../../assets/svg/smallarrow.svg'
import grids from '../../../../assets/svg/Grids.svg'
import chair from "../../../../assets/images/chair.png"
import sofa from "../../../../assets/images/sofa.png"
import chair2 from "../../../../assets/images/chair-category.png"
import drawer from "../../../../assets/images/drawer.png"
import WhiteChair from "../../../../assets/images/white-chair.png"
import blackchair from "../../../../assets/images/black-chair.png"
import table2 from "../../../../assets/images/table2.webp"
import stars from "../../../../assets/svg/stars.svg"
import table from "../../../../assets/images/wooden-table.avif"
import MultipleSelectChip from './mui/category'
import MultipleSelectCheckmarks from './mui/discount'
import GroupedSelect from './mui/price'
import IconLabelButtons from './mui/search'
import { CollectBgWrap, CollectFilter,  CollectionWrap, FilteredProsWrap, FilteredtPros, GridsWrap } from './style'
const CollectionComponent = () => {
  return (
    <>
        <CollectionWrap>
            <div className="collection-bg">
               <CollectBgWrap>
               <b>Products</b>
               <div style={{width:'900px',height:'0.5px',backgroundColor:'white',marginBottom:'-25px',marginRight:'-155px'}}></div>
                <div >
                    <p>Home</p>
                    <img src={arrow} alt="arrow" />
                    <p>Collections</p>
                </div>
               </CollectBgWrap>
            </div>
            <div>
                <CollectFilter>
                    <p>Filter:</p>
                    <MultipleSelectChip/>
                    <GroupedSelect/>
                    <MultipleSelectCheckmarks/>
                    <IconLabelButtons/> 
                </CollectFilter>
                <GridsWrap>
                    <p>25 Results Found</p>
                    <img src={grids} alt="grids" />
                </GridsWrap>
                <FilteredProsWrap>
                    <FilteredtPros>
                       <div className="pros-bg">
                          <img src={chair} alt="forniture-image" />
                       </div>
                       <div className="texts-wrap">
                          <img src={stars} alt="stars-icon" />
                          <b>Single cushioned Chair </b>
                          <p>$250.00</p>
                       </div>
                    </FilteredtPros>
                    <FilteredtPros>
                       <div className="pros-bg">
                          <img src={chair2} alt="forniture-image" />
                       </div>
                       <div className="texts-wrap">
                          <img src={stars} alt="stars-icon" />
                          <b>Single cushioned Chair </b>
                          <p>$250.00</p>
                       </div>
                    </FilteredtPros>
                    <FilteredtPros>
                       <div className="pros-bg">
                          <img src={sofa} alt="forniture-image" />
                       </div>
                       <div className="texts-wrap">
                          <img src={stars} alt="stars-icon" />
                          <b>Single cushioned Chair </b>
                          <p>$600.00</p>
                       </div>
                    </FilteredtPros>
                    <FilteredtPros>
                       <div className="pros-bg">
                          <img src={WhiteChair} alt="forniture-image" />
                       </div>
                       <div className="texts-wrap">
                          <img src={stars} alt="stars-icon" />
                          <b>Single cushioned Chair </b>
                          <p>$250.00</p>
                       </div>
                    </FilteredtPros>
                    <FilteredtPros>
                       <div className="pros-bg">
                          <img src={table} alt="forniture-image" />
                       </div>
                       <div className="texts-wrap">
                          <img src={stars} alt="stars-icon" />
                          <b>Wooden Table </b>
                          <p>$150.00</p>
                       </div>
                    </FilteredtPros>
                    <FilteredtPros>
                       <div className="pros-bg">
                          <img src={blackchair} alt="forniture-image" />
                       </div>
                       <div className="texts-wrap">
                          <img src={stars} alt="stars-icon" />
                          <b>Soft Chair </b>
                          <p>$350.00</p>
                       </div>
                    </FilteredtPros>
                    <FilteredtPros>
                       <div className="pros-bg">
                          <img src={table2} alt="forniture-image" />
                       </div>
                       <div className="texts-wrap">
                          <img src={stars} alt="stars-icon" />
                          <b>Best wooden Table </b>
                          <p>$130.00</p>
                       </div>
                    </FilteredtPros>
                    <FilteredtPros>
                       <div className="pros-bg">
                          <img src={drawer} alt="forniture-image" />
                       </div>
                       <div className="texts-wrap">
                          <img src={stars} alt="stars-icon" />
                          <b>Drawer </b>
                          <p>$750.00</p>
                       </div>
                    </FilteredtPros>
                    <FilteredtPros>
                       <div className="pros-bg">
                          <img src={chair} alt="forniture-image" />
                       </div>
                       <div className="texts-wrap">
                          <img src={stars} alt="stars-icon" />
                          <b>Single cushioned Chair </b>
                          <p>$250.00</p>
                       </div>
                    </FilteredtPros>
                    <FilteredtPros>
                       <div className="pros-bg">
                          <img src={chair2} alt="forniture-image" />
                       </div>
                       <div className="texts-wrap">
                          <img src={stars} alt="stars-icon" />
                          <b>Single cushioned Chair </b>
                          <p>$250.00</p>
                       </div>
                    </FilteredtPros>
                    <FilteredtPros>
                       <div className="pros-bg">
                          <img src={sofa} alt="forniture-image" />
                       </div>
                       <div className="texts-wrap">
                          <img src={stars} alt="stars-icon" />
                          <b>Single cushioned Chair </b>
                          <p>$600.00</p>
                       </div>
                    </FilteredtPros>
                    <FilteredtPros>
                       <div className="pros-bg">
                          <img src={WhiteChair} alt="forniture-image" />
                       </div>
                       <div className="texts-wrap">
                          <img src={stars} alt="stars-icon" />
                          <b>Single cushioned Chair </b>
                          <p>$250.00</p>
                       </div>
                    </FilteredtPros>
                </FilteredProsWrap>
           </div>
        </CollectionWrap>
    </>
  )
}

export default CollectionComponent