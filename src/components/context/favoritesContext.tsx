import { createContext, useContext, useState, ReactNode, useEffect } from "react";

export interface FavoriteItem {
  id: number;
  photo: string;
  header: string;
  price: string | number;
}

interface FavoritesContextType {
  favorites: FavoriteItem[];
  addToFavorites: (item: FavoriteItem) => void;
  removeFromFavorites: (id: number) => void;
  clearFavorites: () => void;
  toggleFavorite: (item: FavoriteItem) => void;  
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (item: FavoriteItem) => {
    setFavorites((prevFavorites) => {
    
      if (prevFavorites.find((favorite) => favorite.id === item.id)) {
        return prevFavorites;
      }
      return [...prevFavorites, item];
    });
  };

  
  const removeFromFavorites = (id: number) => {
    setFavorites((prevFavorites) => prevFavorites.filter((item) => item.id !== id));
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  const toggleFavorite = (item: FavoriteItem) => {
    setFavorites((prevFavorites) => {
      const exists = prevFavorites.find((fav) => fav.id === item.id);
      if (exists) {

        return prevFavorites.filter((fav) => fav.id !== item.id);
      }

      return [...prevFavorites, item];
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, clearFavorites, toggleFavorite }}>
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
