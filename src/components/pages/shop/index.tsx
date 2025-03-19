import arrow from "../../../assets/svg/smallarrow.svg";
import MultipleSelectChip from "./mui/category";
import MultipleSelectCheckmarks from "./mui/discount";
import {
  CollectBgWrap,
  CollectFilter,
  CollectionWrap,
  GridsWrap,
} from "./style";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import GroupedSelect from "./mui/price";
import { useState } from "react";
import VerticalMenu from "./vertical/vertical";
import HorizontMenu from "./horizontal/hmenu";

const ShopComponent = () => {
  const [active, seActive] = useState(true);

  const handleHMenu = () => {
    seActive(true);
  };
  const handleVMenu = () => {
    seActive(false);
  };
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
            <div style={{ display: "flex", gap: "850px" }}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <b>25</b>
                <p>Results Found</p>
              </div>
              <div style={{ display: "flex" }}>
                <div onClick={handleHMenu}>
                  <ViewModuleIcon
                    className={`menuH ${active ? "active" : ""}`}
                  />
                </div>
                <div onClick={handleVMenu}>
                  <ViewListIcon
                    className={`menuH ${!active ? "active" : ""}`}
                  />
                </div>
              </div>
            </div>
            {active ? (
              <div>
                <VerticalMenu />
              </div>
            ) : (
              <div>
                <HorizontMenu />
              </div>
            )}
          </GridsWrap>
        </div>
      </CollectionWrap>
    </>
  );
};

export default ShopComponent;
