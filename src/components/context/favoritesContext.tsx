import { createContext, useContext, useState, ReactNode, useEffect } from "react";

// Define the structure of a Favorite Item
export interface FavoriteItem {
  id: number;
  photo: string;
  header: string;
  price: string | number;
}

// Define the type of the context
interface FavoritesContextType {
  favorites: FavoriteItem[];
  addToFavorites: (item: FavoriteItem) => void;
  removeFromFavorites: (id: number) => void;
  clearFavorites: () => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>(() => {
    // Check if there are any saved favorites in localStorage
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    // Whenever favorites change, update localStorage
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Function to add an item to favorites
  const addToFavorites = (item: FavoriteItem) => {
    setFavorites((prevFavorites) => {
      // If item already exists, no need to add it again
      if (prevFavorites.find((favorite) => favorite.id === item.id)) {
        return prevFavorites;
      }
      return [...prevFavorites, item];
    });
  };

  // Function to remove an item from favorites
  const removeFromFavorites = (id: number) => {
    setFavorites((prevFavorites) => prevFavorites.filter((item) => item.id !== id));
  };

  // Function to clear all favorites
  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, clearFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
