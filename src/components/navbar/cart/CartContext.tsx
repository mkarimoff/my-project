import React, { createContext, useContext, useState } from "react";

// Define the CartItem type
export type CartItem = {
  id: number;
  photo: string;
  header: string;
  price: string;
  quantity: number;
  discount?: number;
};

// Define the CartContextType
export type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  updateQuantity: (id: number, quantity: number) => void;
};

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// CartProvider component to provide cart data to the app
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    console.log('Adding to cart:', item);

    const cleanPrice = typeof item.price === 'string' ? item.price.replace(/[^0-9.]/g, '') : item.price;
    const parsedPrice = parseFloat(cleanPrice) || 0;
    if (parsedPrice <= 0) {
      console.warn(`Invalid or zero price for item ${item.header}: ${item.price}`);
    }

    const newItem = { ...item, price: parsedPrice > 0 ? item.price : parsedPrice.toFixed(2) };

    setCart((prev) => {
      const exist = prev.find((p) => p.id === item.id);
      if (exist) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + item.quantity } : p
        );
      }
      return [...prev, newItem];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    console.log(`Updating quantity for item ${id} to ${quantity}`);
    setCart((prev) => {
      // Prevent quantity from going below 1
      if (quantity < 1) {
        return prev; // Optionally: return prev.filter((p) => p.id !== id) to remove item
      }
      return prev.map((p) =>
        p.id === id ? { ...p, quantity } : p
      );
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};