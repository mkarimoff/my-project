import {
  BuyingRight,
  BuyingWrap,
  MottoCon,
  ShopButtonsCon,
  ShopCon,
  ShopNewCon,
  ShopNewWrap,
  ShopPopPros,
  ShopPopProsWrap,
} from "./style";
import stars from "../../../../assets/svg/stars.svg";
import {
  Favorite,
  FavoriteBorder,
  ShoppingBagOutlined,
  LocalShippingOutlined,
  SupportAgentOutlined,
  GppGoodOutlined,
  CachedOutlined,
} from "@mui/icons-material";
import Checkbox from "@mui/material/Checkbox";
import { FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { IncrDecrContainer } from "../../home/style";
import { toast } from "react-toastify";
import axios from "axios";
import { baseApi } from "../../../../utils/api";
import { useCart } from "../../../context/cartContext";
import { useFavorites } from "../../../context/favoritesContext";
import { useAuth } from "../../../context/authContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Product {
  _id: string;
  title: string;
  price: number;
  quantity: number;
  discount?: number;
  description?: string;
  type: string;
  MainImage: string;
  image2?: string;
  image3?: string;
  image4?: string;
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

const CollectionComponent: React.FC = () => {
  const navigate = useNavigate();
  const { _id } = useParams<{ _id: string }>();
  const { isAuthenticated } = useAuth();
  const { cart, toggleCart, syncCart } = useCart();
  const { favorites, toggleFavorite, syncFavorites } = useFavorites();
  const [product, setProduct] = useState<Product | null>(null);
  const [mainImage, setMainImage] = useState<string>("");
  const [popularProducts, setPopularProducts] = useState<Product[]>([]);
  const [newArrivalProducts, setNewArrivalProducts] = useState<Product[]>([]);
  const [count, setCount] = useState<number>(1);
  const [isCartButtonDisabled, setIsCartButtonDisabled] =
    useState<boolean>(false);
  const [isProductLoading, setIsProductLoading] = useState<boolean>(true);
  const [isPopularLoading, setIsPopularLoading] = useState<boolean>(true);
  const [isNewArrivalsLoading, setIsNewArrivalsLoading] =
    useState<boolean>(true);
  const hasSynced = useRef(false);

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsProductLoading(true);
        const res = await axios.get(`${baseApi}/products/getProduct/${_id}`);
        setProduct(res.data.product || null);
      } catch (error) {
        console.error("Error fetching product:", error);
        toast.error("Failed to load product");
      } finally {
        setIsProductLoading(false);
      }
    };

    const fetchPopularAndNewProducts = async () => {
      try {
        setIsPopularLoading(true);
        setIsNewArrivalsLoading(true);
        const res = await axios.get(`${baseApi}/products/getProducts`);
        const products = res.data.products || [];
        const randomPopular = products
          .sort(() => 0.5 - Math.random())
          .slice(0, 4);
        const randomNewArrivals = products
          .sort(() => 0.5 - Math.random())
          .slice(0, 4);

        setPopularProducts(randomPopular);
        setNewArrivalProducts(randomNewArrivals);
      } catch (error) {
        console.error("Error fetching popular and new products:", error);
        toast.error("Failed to load products");
      } finally {
        setIsPopularLoading(false);
        setIsNewArrivalsLoading(false);
      }
    };

    if (_id) fetchProduct();
    fetchPopularAndNewProducts();
  }, [_id]);

  useEffect(() => {
    if (product) {
      setMainImage(product.MainImage || "");
    }
  }, [product]);

  useEffect(() => {
    if (isAuthenticated && !hasSynced.current) {
      hasSynced.current = true;
      syncFavorites();
      syncCart();
    }
  }, [isAuthenticated, syncFavorites, syncCart]);

  const handleImageClick = (clickedImage: string) => {
    if (product && clickedImage !== mainImage) {
      setMainImage(clickedImage);
    }
  };

  const getLowerImages = () => {
    if (!product) return [];
    const images = [product.image2, product.image3, product.image4].filter(
      Boolean
    ) as string[];
    if (product.MainImage !== mainImage) {
      images.push(product.MainImage);
    }
    return images.filter((img) => img !== mainImage);
  };

  const handleCartToggle = async (product: Product) => {
    if (!isAuthenticated) {
      toast.error("Please sign in to add products to cart");
      setTimeout(() => {
        navigate("/");
      }, 2000);
      return;
    }

    const cartItem: CartItem = {
      id: product._id,
      title: product.title,
      photo: product.MainImage || "",
      price: Number(product.price) || 0,
      quantity: count,
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
      const wasAdded = await toggleCart(cartItem);
      toast.success(wasAdded ? "Added to Cart" : "Removed from Cart");
      if (wasAdded) {
        setIsCartButtonDisabled(true);
        setTimeout(() => {
          setIsCartButtonDisabled(false);
        }, 2000);
      }
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

    const favoriteItem: FavoriteItem = {
      id: product._id.toString(),
      title: product.title,
      price: Number(product.price) || 0,
      photo: product.MainImage || "",
    };

    if (!favoriteItem.id || !favoriteItem.title || isNaN(favoriteItem.price)) {
      console.error("Invalid favorite item:", favoriteItem);
      toast.error("Cannot toggle favorite: Invalid item data");
      return;
    }

    try {
      const wasAdded = await toggleFavorite(favoriteItem);
      toast.success(wasAdded ? "Added to Favorites" : "Removed from Favorites");
      await syncFavorites();
    } catch (error: any) {
      console.error("Failed to toggle favorite:", error.response?.data);
      toast.error(error.response?.data?.error || "Failed to update favorites");
    }
  };

  const handleBuyNow = () => {
    navigate("/order");
  };
  return (
    <ShopCon>
      <div
        style={{ width: "100%", height: "55px", backgroundColor: "#F6F6F6" }}
      ></div>

      <BuyingWrap>
        <div className="imgs-wrap">
          {isProductLoading ? (
            <>
              <Skeleton height={400} width="100%" />
              <div className="lower-3pic">
                <Skeleton width={100} height={100} />
                <Skeleton width={100} height={100} />
                <Skeleton width={100} height={100} />
              </div>
            </>
          ) : (
            <>
              <img src={mainImage || ""} alt="Product" className="big-image" />
              <div className="lower-3pic">
                {getLowerImages().map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Product-${i}`}
                    onClick={() => handleImageClick(img)}
                    style={{ cursor: "pointer" }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        <BuyingRight>
          {isProductLoading ? (
            <div className="buying-head">
              <Skeleton height={40} width={200} />
              <Skeleton height={30} width={100} />
              <Skeleton height={20} width={150} />
            </div>
          ) : (
            <div className="buying-head">
              <h1>{product?.title}</h1>
              <div
                style={{ display: "flex", gap: "20px", alignItems: "center" }}
              >
                {product?.discount ? (
                  <>
                    <b
                      style={{ textDecoration: "line-through", color: "gray" }}
                    >
                      ${product.price.toFixed(2)}
                    </b>
                    <b style={{ color: "red" }}>
                      ${(product.price - product.discount).toFixed(2)}
                    </b>
                    <span style={{ color: "green" }}>
                      (-${product.discount} OFF)
                    </span>
                  </>
                ) : (
                  <b>${product?.price.toFixed(2)}</b>
                )}
              </div>

              <img src={stars} alt="rating" />
            </div>
          )}

          <ShopButtonsCon>
            {isProductLoading ? (
              <>
                <Skeleton height={50} width={200} />
                <Skeleton height={20} width={150} />
                <Skeleton height={40} width={300} />
              </>
            ) : (
              <>
                <IncrDecrContainer>
                  <b style={{ fontSize: "20px" }}>Quantity:</b>
                  <div>
                    <button
                      className="IncrDecrButtons"
                      onClick={handleIncrement}
                    >
                      +
                    </button>
                    <p>{count}</p>
                    <button
                      className="IncrDecrButtons"
                      onClick={handleDecrement}
                    >
                      -
                    </button>
                  </div>
                </IncrDecrContainer>

                <p>Only {product?.quantity} Left In Stock</p>

                <div className="buttons-wrap">
                  <button
                    onClick={() => product && handleCartToggle(product)}
                    disabled={!product || count === 0 || isCartButtonDisabled}
                  >
                    {isCartButtonDisabled
                      ? "Added to Cart"
                      : cart.some((item) => item.id === product?._id)
                      ? "Remove from Cart"
                      : "Add to Cart"}
                  </button>
                  <button onClick={handleBuyNow}>Buy Now</button>
                </div>

                <div className="texts-con">
                  <div className="icons-wrap">
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite sx={{ color: "red" }} />}
                      checked={favorites.some(
                        (item) => item.id === product?._id
                      )}
                      onChange={() => product && handleFavoriteToggle(product)}
                      sx={{ color: "black" }}
                    />
                    <p>
                      {favorites.some((item) => item.id === product?._id)
                        ? "Remove from Wishlist"
                        : "Add to Wishlist"}
                    </p>
                  </div>

                  <div className="texts-wrap">
                    <p>{product?.description}</p>
                    <div className="delivery-wrap">
                      <div>
                        <ShoppingBagOutlined />
                        <p>Free Shipping & Returns: On Orders Over $200</p>
                      </div>
                      <div>
                        <LocalShippingOutlined />
                        <p>Estimated Delivery: 3-5 Business Days</p>
                      </div>

                      <div className="social-medias">
                        <span>Share:</span>
                        <div>
                          <a
                            href="https://www.twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaTwitter size={20} color="#00ACEE" />
                          </a>
                          <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaFacebook size={20} color="#3B5998" />
                          </a>
                          <a
                            href="https://www.pinterest.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaPinterest size={20} color="#C8232C" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </ShopButtonsCon>
        </BuyingRight>
      </BuyingWrap>

      <MottoCon>
        <div className="motto-components">
          <LocalShippingOutlined fontSize="large" />
          <div>
            <b>Fast Delivery</b>
            <p>Delivery within 24 Hours in any Place</p>
          </div>
        </div>
        <div className="motto-components">
          <SupportAgentOutlined fontSize="large" />
          <div>
            <b>24/7 Support</b>
            <p>Get our support any time at any hour</p>
          </div>
        </div>
        <div className="motto-components">
          <GppGoodOutlined fontSize="large" />
          <div>
            <b>Secure Shopping</b>
            <p>Highly secured online payment method</p>
          </div>
        </div>
        <div className="motto-components">
          <CachedOutlined fontSize="large" />
          <div>
            <b>Moneyback Guarantee</b>
            <p>Guaranteed money back in 30 days</p>
          </div>
        </div>
      </MottoCon>

      <ShopPopPros>
        <div>
          <h1>Popular Products</h1>
          <p>Don't Miss The Most Popular Products!</p>
        </div>
        <ShopPopProsWrap>
          {isPopularLoading
            ? Array(4)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="popular-products">
                    <Skeleton height={200} width="100%" />
                    <div className="texts-wrap">
                      <Skeleton height={20} width={100} />
                      <Skeleton height={30} width={150} />
                      <Skeleton height={20} width={80} />
                    </div>
                  </div>
                ))
            : popularProducts.map((value) => (
                <Link
                  className="popular-products"
                  key={value._id}
                  to={`/collection/${value._id}`}
                >
                  <img
                    src={value.MainImage}
                    alt="Popular Product"
                    className="product-image"
                  />
                  <div className="texts-wrap">
                    <img src={stars} alt="rating" />
                    <h1>{value.title}</h1>
                    <p>${value.price.toFixed(2)}</p>
                  </div>
                </Link>
              ))}
        </ShopPopProsWrap>
      </ShopPopPros>

      <ShopNewCon>
        <div>
          <h1>New Arrivals</h1>
          <p>Don't Miss The Newest Products!</p>
        </div>
        <ShopNewWrap>
          {isNewArrivalsLoading
            ? Array(4)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="new-products">
                    <Skeleton height={200} width="100%" />
                    <div className="texts-wrap">
                      <Skeleton height={20} width={100} />
                      <Skeleton height={30} width={150} />
                      <Skeleton height={20} width={80} />
                    </div>
                  </div>
                ))
            : newArrivalProducts.map((value) => (
                <Link
                  className="new-products"
                  key={value._id}
                  to={`/collection/${value._id}`}
                >
                  <img
                    src={value.MainImage}
                    alt="New Product"
                    className="product-image"
                  />
                  <div className="texts-wrap">
                    <img src={stars} alt="rating" />
                    <h1>{value.title}</h1>
                    <p>${value.price.toFixed(2)}</p>
                  </div>
                </Link>
              ))}
        </ShopNewWrap>
      </ShopNewCon>
    </ShopCon>
  );
};

export default CollectionComponent;
