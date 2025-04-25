import { useEffect } from "react";
import { AboutBgWrap } from "../../pages/about/style";
import arrow from "../../../assets/svg/smallarrow.svg";
import { FavoriteWrap, FavoriteMainCon } from "./style";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCart } from "../../context/cartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import { FavoriteItem, useFavorites } from "../../context/favoritesContext";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const FavoriteComponent = () => {
  
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

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

  const { addToCart } = useCart();
  const { favorites, removeFromFavorites } = useFavorites();

  const handleAddToCart = (product: any) => {
    if (!isAuthenticated) {
      toast.error("Please sign in to add products to cart");
      setTimeout(() => {
        navigate("/");
      }, 2000);
      return;
    }

    const cartItem = {
      id: product.id,
      photo: product.photo,
      header: product.header,
      price: product.price ?? "0",
      quantity: 1,
    };

    try {
      addToCart(cartItem);
      toast.success("Product added to cart!");
    } catch (error: any) {
      toast.error(error.message || "Failed to add product to cart");
    }
  };

  const handleRemove = (id: number) => {
    removeFromFavorites(id);
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
                    <th
                      style={{
                        padding: "12px",
                        textAlign: "center",
                      }}
                    >
                      Price
                    </th>
                    <th
                      style={{
                        padding: "12px",
                        textAlign: "center",
                      }}
                    ></th>
                    <th
                      style={{
                        padding: "12px",
                        textAlign: "center",
                      }}
                    ></th>
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
                            alt={item.header}
                            style={{
                              height: "70px",
                              objectFit: "cover",
                              marginRight: "15px",
                            }}
                          />
                        )}
                        {item.header || "Unknown Product"}
                      </td>
                      <td
                        style={{
                          padding: "12px",
                          textAlign: "center",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        {item.price}
                      </td>
                      <td style={{ padding: "12px", textAlign: "center" }}>
                        <button
                          onClick={() => handleAddToCart(item)}
                          style={{
                            padding: "5px 10px",
                            backgroundColor: "#000",
                            color: "#fff",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            fontSize: "12px",
                          }}
                        >
                          Add to Cart
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
                          <DeleteIcon style={{ color: "red" }} />{" "}
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

