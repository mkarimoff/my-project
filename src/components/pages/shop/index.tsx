import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import arrow from "../../../assets/svg/smallarrow.svg";
import {
  CollectBgWrap,
  CollectFilter,
  CollectionWrap,
  GridsWrap,
} from "./style";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import VerticalMenu from "./vertical/vertical";
import HorizontMenu from "./horizontal/hmenu";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  OutlinedInput,
  Chip,
} from "@mui/material";
import { toast } from "react-toastify";
import { useAuth } from "../../context/authContext";
import { useCart } from "../../context/cartContext";
import { useFavorites } from "../../context/favoritesContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseApi } from "../../../utils/api";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Product {
  _id: string;
  title: string;
  price: number;
  quantity: number;
  discount?: number;
  description?: string;
  type?: string;
  MainImage: string;
}

interface CartItem {
  id: string;
  title: string;
  photo: string;
  price: number;
  quantity: number;
  discount?: number;
}

interface FavoriteItem {
  id: string;
  photo: string;
  title: string;
  price: number;
}

const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

const ShopComponent = () => {
  const { isAuthenticated, user } = useAuth();
  const { cart, toggleCart } = useCart();
  const { favorites, toggleFavorite, syncFavorites } = useFavorites();
  const navigate = useNavigate();
  const [active, setActive] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState({
    categories: [] as string[],
    selectedPriceRange: "",
    selectedDiscount: "",
  });

  const predefinedCategories = [
    "Bed",
    "Cabinet",
    "Sofa",
    "Chair",
    "Desk",
    "Drawer",
    "Wardrobe",
    "Table",
  ].map(capitalize);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
    AOS.refresh();

    return () => {
      AOS.refreshHard();
    };
  }, [filters]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${baseApi}/products/getProducts`);
        console.log("ShopComponent products response:", response.data.products); // Debug log
        const fetchedProducts = response.data.products || [];
        setProducts(fetchedProducts);

        const serverTypes = Array.from(
          new Set(
            fetchedProducts.map((p: Product) =>
              p.type ? capitalize(p.type) : "Uncategorized"
            )
          )
        ) as string[];
        const combinedCategories = Array.from(
          new Set([...predefinedCategories, ...serverTypes])
        );
        setCategories(combinedCategories);
      } catch (error: any) {
        toast.error("Failed to load products");
        setCategories(predefinedCategories);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleHMenu = () => {
    setActive(true);
  };

  const handleVMenu = () => {
    setActive(false);
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

  const handleDiscountChange = (event: any) => {
    const selectedDiscount = event.target.value;
    setFilters((prev) => ({
      ...prev,
      selectedDiscount,
    }));
  };

  const handleCartToggle = async (product: Product) => {
    if (!isAuthenticated) {
      toast.error("Please sign in to add products to cart");
      setTimeout(() => {
        navigate("/");
      }, 2000);
      return;
    }

    if (!user?.email) {
      toast.error("User email not found. Please sign in again.");
      navigate("/");
      return;
    }

    const cartItem: CartItem = {
      id: product._id,
      title: product.title,
      photo: product.MainImage || "",
      price: Number(product.price - (product.discount || 0)) || 0,
      quantity: 1,
      discount: product.discount || 0,
    };

    if (
      !cartItem.id ||
      !cartItem.title ||
      isNaN(cartItem.price) ||
      !cartItem.quantity
    ) {
      console.error("Invalid cart item:", cartItem);
      toast.error("Cannot add to cart: Invalid item data");
      return;
    }

    try {
      const wasAdded = toggleCart(cartItem, user.email);
      toast.success(wasAdded ? "Added to Cart" : "Removed from Cart");
    } catch (error: any) {
      console.error("Backend Error:", error.response?.data);
      toast.error(error.response?.data?.error || "Failed to update cart");
    }
  };

  const handleFavoriteToggle = async (product: Product) => {
    if (!isAuthenticated) {
      toast.error("Please sign in to add products to favorites");
      setTimeout(() => {
        navigate("/");
      }, 2000);
      return;
    }

    if (!user?.email) {
      toast.error("User email not found. Please sign in again.");
      navigate("/");
      return;
    }

    const favoriteItem: FavoriteItem = {
      id: product._id.toString(),
      title: product.title,
      price: Number(product.price - (product.discount || 0)) || 0,
      photo: product.MainImage || "",
    };

    if (!favoriteItem.id || !favoriteItem.title || isNaN(favoriteItem.price)) {
      console.error("Invalid favorite item:", favoriteItem);
      toast.error("Cannot toggle favorite: Invalid item data");
      return;
    }

    try {
      const wasAdded = toggleFavorite(favoriteItem, user.email);
      toast.success(wasAdded ? "Added to Favorites" : "Removed from Favorites");
      await syncFavorites();
    } catch (error: any) {
      console.error("Failed to toggle favorite:", error.response?.data);
      toast.error(error.response?.data?.error || "Failed to update favorites");
    }
  };

  const priceRanges = [
    { id: 1, label: "0$ - 100$", min: 0, max: 100 },
    { id: 2, label: "101$ - 200$", min: 101, max: 200 },
    { id: 3, label: "201$ - 300$", min: 201, max: 300 },
    { id: 4, label: "301$ - 400$", min: 301, max: 400 },
    { id: 5, label: "401$ and above", min: 401, max: 10000 },
  ];

  const discountRanges = [
    { id: 1, label: "Any Discount", min: 0 },
    { id: 2, label: "$10 or more", min: 10 },
    { id: 3, label: "$20 or more", min: 20 },
    { id: 4, label: "$30 or more", min: 30 },
  ];

  const filteredData = products.filter((product) => {
    const type = product.type ? capitalize(product.type) : "Uncategorized";
    const price = Number(product.price - (product.discount || 0)) || 0;
    const discount = Number(product.discount) || 0;

    const isTypeMatch =
      filters.categories.length === 0 || filters.categories.includes(type);

    const isPriceMatch =
      filters.selectedPriceRange === "" ||
      (price >= priceRanges[parseInt(filters.selectedPriceRange) - 1]?.min &&
        price <= priceRanges[parseInt(filters.selectedPriceRange) - 1]?.max);

    const isDiscountMatch =
      filters.selectedDiscount === "" ||
      discount >= discountRanges[parseInt(filters.selectedDiscount) - 1]?.min;

    return isTypeMatch && isPriceMatch && isDiscountMatch;
  });

  return (
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
        <CollectFilter data-aos="fade-up" data-aos-duration="1000">
          <p>Filter:</p>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="type-label">Type</InputLabel>
            <Select
              labelId="type-label"
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
              {categories.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="discount-label">Discount</InputLabel>
            <Select
              labelId="discount-label"
              value={filters.selectedDiscount}
              onChange={handleDiscountChange}
              input={<OutlinedInput label="Discount" />}
            >
              <MenuItem value="">
                <em>All</em>
              </MenuItem>
              {discountRanges.map((range) => (
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
              data-aos-duration="1000"
            >
              {isLoading ? (
                <Skeleton width={100} height={20} />
              ) : (
                <>
                  <b>{filteredData.length}</b>
                  <p>Results Found</p>
                </>
              )}
            </div>
            <div
              style={{ display: "flex" }}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div onClick={handleHMenu}>
                <ViewModuleIcon className={`menuH ${active ? "active" : ""}`} />
              </div>
              <div onClick={handleVMenu}>
                <ViewListIcon className={`menuH ${!active ? "active" : ""}`} />
              </div>
            </div>
          </div>
          {active ? (
            <VerticalMenu
              products={filteredData}
              isLoading={isLoading}
              toggleCart={handleCartToggle}
              handleFavoriteToggle={handleFavoriteToggle}
              favorites={favorites}
              cart={cart}
            />
          ) : (
            <HorizontMenu
              products={filteredData}
              isLoading={isLoading}
              toggleCart={handleCartToggle}
              handleFavoriteToggle={handleFavoriteToggle}
              favorites={favorites}
              cart={cart}
            />
          )}
        </GridsWrap>
      </div>
    </CollectionWrap>
  );
};

export default ShopComponent;