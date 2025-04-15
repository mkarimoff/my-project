import arrow from "../../../assets/svg/smallarrow.svg";
import {
  CollectBgWrap,
  CollectFilter,
  CollectionWrap,
  GridsWrap,
} from "./style";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import { useState } from "react";
import VerticalMenu from "./vertical/vertical";
import HorizontMenu from "./horizontal/hmenu";
import { BlogsMockData } from "../mockdata/blogs.mock";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  OutlinedInput,
  Chip,
} from "@mui/material"; // Importing MUI components for dropdowns

const ShopComponent = () => {
  
  const [active, setActive] = useState(true); // True for vertical, false for horizontal
  const [filters, setFilters] = useState({
    categories: [] as string[],
    selectedPriceRange: "", // Default: no price range
  });

  const handleHMenu = () => {
    setActive(true); // Switch to vertical layout
  };

  const handleVMenu = () => {
    setActive(false); // Switch to horizontal layout
  };

  const handleCategoryChange = (event: any) => {
    const selectedCategories = event.target.value;
    setFilters((prev) => ({
      ...prev,
      categories: selectedCategories,
    }));
  };

  const handlePriceChange = (event: any) => {
    const selectedPrice = event.target.value;
    setFilters((prev) => ({
      ...prev,
      selectedPriceRange: selectedPrice,
    }));
  };

  const priceRanges = [
    { id: 1, label: "0$ - 100$", min: 0, max: 100 },
    { id: 2, label: "101$ - 200$", min: 101, max: 200 },
    { id: 3, label: "201$ - 300$", min: 201, max: 300 },
    { id: 4, label: "301$ - 400$", min: 301, max: 400 },
    { id: 5, label: "401$ and above", min: 401, max: 10000 },
  ];

  // Filter the mock data based on the selected filters
  const filteredData = BlogsMockData.filter((product) => {
    const category = product.category || "Uncategorized"; // Fallback to "Uncategorized" if no category
    const prise = product.prise ? parseFloat(product.prise.replace(/[^0-9.]/g, "")) : 0; // Convert price to number

    const isCategoryMatch =
      filters.categories.length === 0 || filters.categories.includes(category);

    const isPriseMatch =
      filters.selectedPriceRange === "" || // No price range selected, show all prices
      (prise >= priceRanges[parseInt(filters.selectedPriceRange as string) - 1]?.min &&
        prise <= priceRanges[parseInt(filters.selectedPriceRange as string) - 1]?.max);

    return isCategoryMatch && isPriseMatch;
  });

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
          <CollectFilter data-aos="fade-up">
            <p>Filter:</p>
            {/* Category Filter */}
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                multiple
                value={filters.categories}
                onChange={handleCategoryChange}
                input={<OutlinedInput label="Category" />}
                renderValue={(selected) => (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </div>
                )}
              >
                {["Tables", "Sofas", "Drawers", "Chairs"].map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Price Filter */}
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="price-label">Price Range</InputLabel>
              <Select
                labelId="price-label"
                value={filters.selectedPriceRange}
                onChange={handlePriceChange}
                input={<OutlinedInput label="Price Range" />}
              >
                <MenuItem value="">
                  <em>All</em>
                </MenuItem>
                {priceRanges.map((range) => (
                  <MenuItem key={range.id} value={range.id.toString()}>
                    {range.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </CollectFilter>

          <GridsWrap>
            <div style={{ display: "flex", gap: "850px" }}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
                data-aos="fade-up"
              >
                <b>{filteredData.length}</b>
                <p>Results Found</p>
              </div>
              <div style={{ display: "flex" }} data-aos="fade-up">
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
              <VerticalMenu products={filteredData} /> // Pass filtered data to VerticalMenu
            ) : (
              <HorizontMenu products={filteredData} /> // Pass filtered data to HorizontMenu
            )}
          </GridsWrap>
        </div>
      </CollectionWrap>
    </>
  );
};

export default ShopComponent;
