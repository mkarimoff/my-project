import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

export interface CartItem {
  id: number;
  name: string;
  photo?: string;
  price: number;
  quantity: number;
  discount?: number;
}

export interface FavoriteItem {
  id: number;
  photo: string;
  header: string;
  price: number;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: { id: string; email: string; firstName: string; lastName: string; address: string; number: string; role: string } | null;
  cart: CartItem[];
  favorites: FavoriteItem[];
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  setCart: (cart: CartItem[]) => void;
  setFavorites: (favorites: FavoriteItem[]) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<{
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    address: string;
    number: string;
    role: string;
  } | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const storedUser = localStorage.getItem('user');

    if (token && storedUser) {
      const userData = JSON.parse(storedUser);
      setIsAuthenticated(true);
      setUser(userData);

      // Load from localStorage as fallback
      const storedCart = localStorage.getItem(`cart_${userData.email}`);
      const storedFavorites = localStorage.getItem(`favorites_${userData.email}`);
      setCart(storedCart ? JSON.parse(storedCart) : []);
      setFavorites(storedFavorites ? JSON.parse(storedFavorites) : []);

      // Fetch from backend
      const fetchData = async () => {
        try {
          const cartResponse = await axios.get('http://localhost:5050/dev-api/cart', {
            headers: { Authorization: `Bearer ${token}` },
          });
          const favoritesResponse = await axios.get('http://localhost:5050/dev-api/cart/favorites', {
            headers: { Authorization: `Bearer ${token}` },
          });

          // Map backend favorites to frontend structure
          const mappedFavorites = (favoritesResponse.data.favorites || []).map((item: any) => ({
            id: item.id,
            photo: item.photo || '',
            header: item.name, // Map `name` to `header`
            price: item.price || 0,
          }));

          setCart(cartResponse.data.cart || []);
          setFavorites(mappedFavorites);
          localStorage.setItem(`cart_${userData.email}`, JSON.stringify(cartResponse.data.cart || []));
          localStorage.setItem(`favorites_${userData.email}`, JSON.stringify(mappedFavorites));
        } catch (error) {
          console.error('Failed to fetch cart/favorites:', error);
        }
      };
      fetchData();
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated && location.pathname === '/login') {
      const from = location.state?.from || '/home';
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, location, navigate]);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(
        'http://localhost:5050/dev-api/auth/login',
        { email, password },
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (response.data.message === 'Login successful') {
        localStorage.setItem('authToken', response.data.token);
        const userData = response.data.user;
        localStorage.setItem('user', JSON.stringify(userData));

        setIsAuthenticated(true);
        setUser(userData);

        // Fetch cart/favorites
        const token = response.data.token;
        const cartResponse = await axios.get('http://localhost:5050/dev-api/cart', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const favoritesResponse = await axios.get('http://localhost:5050/dev-api/cart/favorites', {
          headers: { Authorization: `Bearer ${token}` },
        });

        // Map backend favorites to frontend structure
        const userCart = cartResponse.data.cart || [];
        const userFavorites = (favoritesResponse.data.favorites || []).map((item: any) => ({
          id: item.id,
          photo: item.photo || '',
          header: item.name, // Map `name` to `header`
          price: item.price || 0,
        }));

        // Merge guest data
        const guestCart = JSON.parse(localStorage.getItem('guestCart') || '[]') as CartItem[];
        const guestFavorites = JSON.parse(localStorage.getItem('guestFavorites') || '[]') as FavoriteItem[];
        if (guestCart.length > 0 || guestFavorites.length > 0) {
          const mergedCart = [
            ...userCart,
            ...guestCart.filter((gItem: CartItem) => !userCart.some((uItem: CartItem) => uItem.id === gItem.id)),
          ];
          const mergedFavorites = [
            ...userFavorites,
            ...guestFavorites.filter((gItem: FavoriteItem) => !userFavorites.some((uItem: FavoriteItem) => uItem.id === gItem.id)),
          ];

          // Update backend
          await axios.post(
            'http://localhost:5050/dev-api/cart',
            { cart: mergedCart },
            { headers: { Authorization: `Bearer ${token}` } }
          );
          await axios.post(
            'http://localhost:5050/dev-api/cart/favorites',
            {
              favorites: mergedFavorites.map((item: FavoriteItem) => ({
                id: item.id,
                name: item.header, // Map `header` to `name`
                photo: item.photo,
                price: item.price,
              })),
            },
            { headers: { Authorization: `Bearer ${token}` } }
          );
          localStorage.removeItem('guestCart');
          localStorage.removeItem('guestFavorites');
        }

        // Update state and localStorage
        setCart(userCart);
        setFavorites(userFavorites);
        localStorage.setItem(`cart_${userData.email}`, JSON.stringify(userCart));
        localStorage.setItem(`favorites_${userData.email}`, JSON.stringify(userFavorites));

        const from = location.state?.from || '/home';
        navigate(from, { replace: true });
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (error: any) {
      throw new Error(error.response?.data?.error || 'Login failed');
    }
  };

  const logout = async () => {
    try {
      const userEmail = user?.email;
  
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      localStorage.removeItem(`cart_${userEmail}`);
      localStorage.removeItem(`favorites_${userEmail}`);
      localStorage.removeItem('guestCart');
      localStorage.removeItem('guestFavorites');
      localStorage.removeItem('favorites');
  
      setIsAuthenticated(false);
      setUser(null);
      setCart([]);
      setFavorites([]);
  
      navigate('/');
    } catch (error: any) {
      console.error('Error during logout', error);
    }
  };
  
  return (
    <AuthContext.Provider value={{ isAuthenticated, user, cart, favorites, login, logout, setCart, setFavorites }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};