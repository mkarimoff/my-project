import { useState, useEffect, useRef } from "react";
import { AboutBgWrap } from "../../pages/about/style";
import arrow from "../../../assets/svg/smallarrow.svg";
import { FavoriteWrap, FavoriteMainCon } from "./style";
import AOS from "aos";
import "aos/dist/aos.css";
import { useAuth } from "../../context/authContext";
import { useFavorites } from "../../context/favoritesContext";
import { useCart } from "../../context/cartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";

interface FavoriteItem {
  id: string;
  photo: string;
  title: string;
  price: number;
}

interface CartItem {
  id: string;
  title: string;
  photo?: string;
  price: number;
  quantity: number;
  discount?: number;
}

const FavoriteComponent = () => {
  const { isAuthenticated, user } = useAuth();
  const { favorites, syncFavorites, removeFromFavorites } = useFavorites();
  const { cart, toggleCart, syncCart } = useCart();
  const [loading, setLoading] = useState<string | null>(null);
  const hasSynced = useRef(false);

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
  }, []);

  useEffect(() => {
    if (isAuthenticated && !hasSynced.current) {
      hasSynced.current = true;
      syncFavorites();
      syncCart();
    }
  }, [isAuthenticated, syncFavorites, syncCart]);

  const handleCartToggle = async (product: FavoriteItem) => {
    if (!isAuthenticated) {
      toast.error("Please sign in to manage cart");
      return;
    }

    if (!product.id || product.id === "0") {
      console.warn("Invalid product ID for cart:", product.id);
      toast.error("Cannot toggle item with invalid ID");
      return;
    }

    const cartItem: CartItem = {
      id: product.id,
      title: product.title,
      photo: product.photo,
      price: product.price,
      quantity: 1,
      discount: 0,
    };

    setLoading(product.id);
    try {
      const wasAdded = toggleCart(cartItem, user?.email);
      toast.success(wasAdded ? "Added to Cart" : "Removed from Cart");
    } catch (error: any) {
      console.error("Failed to toggle cart:", error);
      toast.error(error.response?.data?.error || "Failed to update cart");
    } finally {
      setLoading(null);
    }
  };

  const handleRemove = (id: string) => {
    if (!isAuthenticated) {
      toast.error("Please sign in to manage favorites");
      return;
    }

    if (!id || id === "0") {
      console.warn("Invalid ID for removal:", id);
      toast.error("Cannot remove item with invalid ID");
      return;
    }
    toast.success("Product removed from favorites");
    console.log("Removing favorite with ID:", id);
    removeFromFavorites(id, user?.email);

    if (cart.some((cartItem) => cartItem.id === id)) {
      toggleCart({ id, title: "", price: 0, quantity: 1 }, user?.email);
    }
  };

  return (
    <FavoriteMainCon>
      <div className="collection-bg">
        <AboutBgWrap>
          <b>Favorites</b>
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
            <p>Favorites</p>
          </div>
        </AboutBgWrap>
      </div>

      <FavoriteWrap>
        <div className="Products-wrap" data-aos="fade-up">
          {favorites.length === 0 ? (
            <p>Your favorites list is empty.</p>
          ) : (
            <>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr
                    style={{
                      textAlign: "left",
                      borderBottom: "1px solid #ccc",
                    }}
                  >
                    <th style={{ padding: "12px" }}>Product</th>
                    <th style={{ padding: "12px", textAlign: "center" }}>
                      Price
                    </th>
                    <th style={{ padding: "12px", textAlign: "center" }}></th>
                    <th style={{ padding: "12px", textAlign: "center" }}></th>
                  </tr>
                </thead>
                <tbody>
                  {favorites.map((item: FavoriteItem) => (
                    <tr
                      key={item.id}
                      style={{ borderBottom: "1px solid #eee" }}
                    >
                      <td
                        style={{
                          padding: "12px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {item.photo && (
                          <img
                            src={item.photo}
                            alt={item.title}
                            style={{
                              height: "70px",
                              objectFit: "cover",
                              marginRight: "15px",
                            }}
                          />
                        )}
                        {item.title || "Unknown Product"}
                      </td>
                      <td
                        style={{
                          padding: "12px",
                          textAlign: "center",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        ${item.price.toFixed(2)}
                      </td>
                      <td style={{ padding: "12px", textAlign: "center" }}>
                        <button
                          onClick={() => handleCartToggle(item)}
                          style={{
                            padding: "5px 10px",
                            backgroundColor: cart.some(
                              (cartItem) => cartItem.id === item.id
                            )
                              ? "#575c58"
                              : "#000",
                            color: "#fff",
                            border: "none",
                            borderRadius: "5px",
                            cursor:
                              loading === item.id ? "not-allowed" : "pointer",
                            fontSize: "12px",
                            opacity: loading === item.id ? 0.6 : 1,
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                          }}
                          disabled={loading === item.id}
                        >
                          {loading === item.id ? (
                            <CircularProgress size={16} color="inherit" />
                          ) : cart.some((cartItem) => cartItem.id === item.id) ? (
                            <ShoppingCartIcon style={{ fontSize: "16px" }} />
                          ) : (
                            <ShoppingCartOutlinedIcon
                              style={{ fontSize: "16px" }}
                            />
                          )}
                          {loading === item.id
                            ? "Processing..."
                            : cart.some((cartItem) => cartItem.id === item.id)
                            ? "Remove from Cart"
                            : "Add to Cart"}
                        </button>
                      </td>
                      <td style={{ padding: "12px", textAlign: "center" }}>
                        <button
                          onClick={() => handleRemove(item.id)}
                          style={{
                            border: "none",
                            backgroundColor: "white",
                            cursor: "pointer",
                            fontSize: "16px",
                          }}
                        >
                          <DeleteIcon style={{ color: "red" }} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      </FavoriteWrap>
    </FavoriteMainCon>
  );
};

export default FavoriteComponent;