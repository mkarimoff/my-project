import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useCallback,
  useRef,
} from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { baseApi } from "../../utils/api";

export interface FavoriteItem {
  id: string;
  photo: string;
  title: string;
  price: number;
}

interface FavoritesContextType {
  favorites: FavoriteItem[];
  addToFavorites: (item: FavoriteItem, userEmail?: string) => void;
  removeFromFavorites: (id: string, userEmail?: string) => void;
  clearFavorites: () => void;
  toggleFavorite: (item: FavoriteItem, userEmail?: string) => boolean;
  syncFavorites: () => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });
  const isSyncing = useRef(false);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const validateFavoriteItem = (item: FavoriteItem): boolean => {
    return (
      typeof item.id === "string" &&
      item.id !== "0" &&
      item.id.trim() !== "" &&
      typeof item.title === "string" &&
      item.title.trim() !== "" &&
      typeof item.price === "number" &&
      !isNaN(item.price) &&
      typeof item.photo === "string"
    );
  };

  useEffect(() => {
    const invalidItems = favorites.filter((item) => !validateFavoriteItem(item));
    if (invalidItems.length > 0) {
      console.warn("Invalid favorite items found:", invalidItems);
      setFavorites(favorites.filter(validateFavoriteItem));
    }
  }, [favorites]);

  const syncFavorites = useCallback(async () => {
    if (isSyncing.current) {
      console.log("Sync already in progress, skipping...");
      return;
    }

    const token = localStorage.getItem("authToken");
    if (!token) {
      console.warn("No auth token found for syncing favorites");
      return;
    }

    isSyncing.current = true;
    try {
      const response = await axios.get(`${baseApi}/cart/favorites`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.data.favorites || !Array.isArray(response.data.favorites)) {
        throw new Error("Invalid response structure from server");
      }

      const mappedFavorites = response.data.favorites.map((item: any) => ({
        id: item.id,
        photo: item.photo || "",
        title: item.title,
        price: Number(item.price || 0),
      }));

      const validFavorites = mappedFavorites.filter(validateFavoriteItem);
      if (validFavorites.length !== mappedFavorites.length) {
        console.warn("Filtered out invalid favorites:", mappedFavorites);
      }

      setFavorites(validFavorites);
      localStorage.setItem("favorites", JSON.stringify(validFavorites));
    } catch (error: any) {
        console.error("Failed to sync favorites:", {
        message: error.message,
        response: error.response?.data,
      });
    } finally {
      isSyncing.current = false;
    }
  }, []);

  const addToFavorites = (item: FavoriteItem, userEmail?: string) => {
    if (!validateFavoriteItem(item)) {
      toast.error("Invalid item cannot be added to favorites");
      return;
    }

    setFavorites((prevFavorites) => {
      const exists = prevFavorites.some((fav) => fav.id === item.id);
      if (exists) {
        return prevFavorites;
      }
      const newFavorites = [...prevFavorites, item];
      if (userEmail) {
        localStorage.setItem(`favorites_${userEmail}`, JSON.stringify(newFavorites));
      }

      const token = localStorage.getItem("authToken");
      if (token) {
        axios
          .post(
            `${baseApi}/cart/favorites`,
            {
              favorites: newFavorites.map((fav) => ({
                id: fav.id,
                title: fav.title,
                photo: fav.photo || "",
                price: Number(fav.price),
              })),
            },
            { headers: { Authorization: `Bearer ${token}` } }
          )
          .then((response) => {
            console.log("POST /cart/favorites response:", response.data);
            if (!response.data.favorites || !Array.isArray(response.data.favorites)) {
              return;
            }
            const syncedFavorites = response.data.favorites.map((fav: any) => ({
              id: fav.id,
              photo: fav.photo || "",
              title: fav.title,
              price: Number(fav.price || 0),
            }));
            const validSyncedFavorites = syncedFavorites.filter(validateFavoriteItem);
            setFavorites(validSyncedFavorites);
            if (userEmail) {
              localStorage.setItem(`favorites_${userEmail}`, JSON.stringify(validSyncedFavorites));
            }
          })
          .catch((error: any) => {
            console.error("Failed to sync favorites after add:", error);
            toast.error("Failed to sync favorites with server");
          });
      }

      return newFavorites;
    });
  };

  const removeFromFavorites = (id: string, userEmail?: string) => {
    if (!id || id === "0" || id.trim() === "") {
      console.error("Invalid favorite item ID for removal:", id);
      toast.error("Cannot remove item with invalid ID");
      return;
    }

    setFavorites((prevFavorites) => {
      const newFavorites = prevFavorites.filter((fav) => fav.id !== id);
      if (userEmail) {
        localStorage.setItem(`favorites_${userEmail}`, JSON.stringify(newFavorites));
      }

      const token = localStorage.getItem("authToken");
      if (token) {
        axios
          .delete(`${baseApi}/cart/favorites/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((response) => {
            console.log("DELETE /cart/favorites response:", response.data);
            if (!response.data.favorites || !Array.isArray(response.data.favorites)) {
              console.error("Invalid response structure from server");
              return;
            }
            const syncedFavorites = response.data.favorites.map((fav: any) => ({
              id: fav.id,
              photo: fav.photo || "",
              title: fav.title,
              price: Number(fav.price || 0),
            }));
            const validSyncedFavorites = syncedFavorites.filter(validateFavoriteItem);
            setFavorites(validSyncedFavorites);
            if (userEmail) {
              localStorage.setItem(`favorites_${userEmail}`, JSON.stringify(validSyncedFavorites));
            }
          })
          .catch((error: any) => {
            console.error("Failed to sync favorites after remove:", error);
            toast.error("Failed to sync favorites with server");
          });
      }

      return newFavorites;
    });
  };

  const clearFavorites = () => {
    setFavorites([]);
    localStorage.removeItem("favorites");
    const token = localStorage.getItem("authToken");
    if (token) {
      axios
        .post(
          `${baseApi}/cart/favorites`,
          { favorites: [] },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .catch((error: any) => {
          console.error("Failed to clear favorites on server:", error);
          toast.error("Failed to clear favorites on server");
        });
    }
  };

  const toggleFavorite = (item: FavoriteItem, userEmail?: string): boolean => {
    if (!validateFavoriteItem(item)) {
      toast.error("Invalid item cannot be toggled");
      return false;
    }

    const exists = favorites.some((fav) => fav.id === item.id);
    if (exists) {
      removeFromFavorites(item.id, userEmail);
      return false;
    } else {
      addToFavorites(item, userEmail);
      return true;
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        clearFavorites,
        toggleFavorite,
        syncFavorites,
      }}
    >
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