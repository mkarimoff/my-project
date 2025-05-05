import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { baseApi } from "../../utils/api";

export interface CartItem {
  id: string;
  photo?: string;
  title: string;
  price: number;
  quantity: number;
  discount?: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem, userEmail?: string) => void;
  removeFromCart: (id: string, userEmail?: string) => void;
  toggleCart: (item: CartItem, userEmail?: string) => boolean;
  updateQuantity: (id: string, quantity: number, userEmail?: string) => void;
  clearCart: () => void;
  syncCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const validateCartItem = (item: CartItem): boolean => {
    return (
      typeof item.id === "string" &&
      item.id !== "0" &&
      item.id.trim() !== "" &&
      typeof item.title === "string" &&
      item.title.trim() !== "" &&
      typeof item.price === "number" &&
      !isNaN(item.price) &&
      typeof item.quantity === "number" &&
      item.quantity > 0
    );
  };

  useEffect(() => {
    const invalidItems = cart.filter((item) => !validateCartItem(item));
    if (invalidItems.length > 0) {
      console.warn("Invalid cart items found:", invalidItems);
      setCart(cart.filter(validateCartItem));
    }
  }, [cart]);

  const syncCart = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      console.warn("No auth token found for syncing cart");
      return;
    }

    try {
      const response = await axios.get(`${baseApi}/cart`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const syncedCart = response.data.cart || [];
      const validCart = syncedCart.filter(validateCartItem);
      setCart(validCart);
      localStorage.setItem("cart", JSON.stringify(validCart));
    } catch (error: any) {
      toast.error(error.response?.data?.error || "Failed to sync cart");
    }
  };

  const addToCart = (item: CartItem, userEmail?: string) => {
    if (!validateCartItem(item)) {
      console.error("Invalid cart item, not adding:", item);
      toast.error("Invalid item cannot be added to cart");
      return;
    }

    setCart((prevCart) => {
      const exists = prevCart.find((cartItem) => cartItem.id === item.id);
      let newCart;
      if (exists) {
        newCart = prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        newCart = [...prevCart, item];
      }

      if (userEmail) {
        localStorage.setItem(`cart_${userEmail}`, JSON.stringify(newCart));
      }

      const token = localStorage.getItem("authToken");
      if (token) {
        axios
          .post(
            `${baseApi}/cart`,
            { cart: newCart },
            { headers: { Authorization: `Bearer ${token}` } }
          )
          .then((response) => {
            const syncedCart = response.data.cart || [];
            const validCart = syncedCart.filter(validateCartItem);
            setCart(validCart);
            if (userEmail) {
              localStorage.setItem(`cart_${userEmail}`, JSON.stringify(validCart));
            }
          })
          .catch((error: any) => {
            console.error("Failed to sync cart after add:", error);
            toast.error("Failed to sync cart with server");
          });
      }

      return newCart;
    });
  };

  const removeFromCart = (id: string, userEmail?: string) => {
    if (!id || id === "0" || id.trim() === "") {
      console.error("Invalid cart item ID for removal:", id);
      toast.error("Cannot remove item with invalid ID");
      return;
    }

    setCart((prevCart) => {
      const newCart = prevCart.filter((item) => item.id !== id);
      if (userEmail) {
        localStorage.setItem(`cart_${userEmail}`, JSON.stringify(newCart));
      }

      const token = localStorage.getItem("authToken");
      if (token) {
        axios
          .delete(`${baseApi}/cart/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((response) => {
            const syncedCart = response.data.cart || [];
            const validCart = syncedCart.filter(validateCartItem);
            setCart(validCart);
            if (userEmail) {
              localStorage.setItem(`cart_${userEmail}`, JSON.stringify(validCart));
            }
          })
          .catch((error: any) => {
            console.error("Failed to sync cart after remove:", error);
            toast.error("Failed to sync cart with server");
          });
      }

      return newCart;
    });
  };

  const toggleCart = (item: CartItem, userEmail?: string): boolean => {
    if (!validateCartItem(item)) {
      console.error("Invalid cart item, cannot toggle:", item);
      toast.error("Invalid item cannot be toggled");
      return false;
    }

    const exists = cart.some((cartItem) => cartItem.id === item.id);
    if (exists) {
      removeFromCart(item.id, userEmail);
      return false;
    } else {
      addToCart(item, userEmail);
      return true;
    }
  };

  const updateQuantity = (id: string, quantity: number, userEmail?: string) => {
    if (!id || id === "0" || id.trim() === "") {
      console.error("Invalid cart item ID for update:", id);
      toast.error("Cannot update item with invalid ID");
      return;
    }

    if (quantity < 1) {
      removeFromCart(id, userEmail);
      return;
    }

    setCart((prevCart) => {
      const newCart = prevCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
      if (userEmail) {
        localStorage.setItem(`cart_${userEmail}`, JSON.stringify(newCart));
      }

      const token = localStorage.getItem("authToken");
      if (token) {
        axios
          .put(
            `${baseApi}/cart/update`,
            { itemId: id, quantity },
            { headers: { Authorization: `Bearer ${token}` } }
          )
          .then((response) => {
            const syncedCart = response.data.cart || [];
            const validCart = syncedCart.filter(validateCartItem);
            setCart(validCart);
            if (userEmail) {
              localStorage.setItem(`cart_${userEmail}`, JSON.stringify(validCart));
            }
          })
          .catch((error: any) => {
            console.error("Failed to sync cart after update:", error);
            toast.error("Failed to sync cart with server");
          });
      }

      return newCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
    const token = localStorage.getItem("authToken");
    if (token) {
      axios
        .post(
          `${baseApi}/cart`,
          { cart: [] },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .catch((error: any) => {
          console.error("Failed to clear cart on server:", error);
          toast.error("Failed to clear cart on server");
        });
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        toggleCart,
        updateQuantity,
        clearCart,
        syncCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};