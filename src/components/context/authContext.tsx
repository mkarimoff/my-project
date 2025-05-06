import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { baseApi } from '../../utils/api';

export interface CartItem {
  id: string;
  title: string;
  photo?: string;
  price: number;
  quantity: number;
  discount?: number;
}

export interface FavoriteItem {
  id: string;
  photo: string;
  title: string;
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
    const controller = new AbortController();
    const initializeAuth = async () => {
      const token = localStorage.getItem('authToken');
      const storedUser = localStorage.getItem('user');

      if (!token || !storedUser) {
        logout(); // No token or user data, trigger logout
        return;
      }

      try {
        const userData = JSON.parse(storedUser);
        await axios.get(baseApi + '/auth/users', {
          headers: { Authorization: `Bearer ${token}` },
          signal: controller.signal,
        });

        setIsAuthenticated(true);
        setUser(userData);

        const storedCart = localStorage.getItem(`cart_${userData.email}`);
        const storedFavorites = localStorage.getItem(`favorites_${userData.email}`);
        setCart(storedCart ? JSON.parse(storedCart) : []);
        setFavorites(storedFavorites ? JSON.parse(storedFavorites) : []);

        const [cartResponse, favoritesResponse] = await Promise.all([
          axios.get(baseApi + '/cart', {
            headers: { Authorization: `Bearer ${token}` },
            signal: controller.signal,
          }),
          axios.get(baseApi + '/cart/favorites', {
            headers: { Authorization: `Bearer ${token}` },
            signal: controller.signal,
          }),
        ]);

        const mappedFavorites = (favoritesResponse.data.favorites || []).map((item: any) => ({
          id: item.id,
          photo: item.photo || '',
          title: item.title,
          price: item.price || 0,
        }));

        setCart(cartResponse.data.cart || []);
        setFavorites(mappedFavorites);
        localStorage.setItem(`cart_${userData.email}`, JSON.stringify(cartResponse.data.cart || []));
        localStorage.setItem(`favorites_${userData.email}`, JSON.stringify(mappedFavorites));
      } catch (error: any) {
        if (error.name === 'AbortError') return;
        logout(); // Trigger logout on any error, including 401 for expired/invalid token
      }
    };

    initializeAuth();
    return () => controller.abort();
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
        baseApi + '/auth/login',
        { email, password },
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (response.data.message === 'Login successful') {
        localStorage.setItem('authToken', response.data.token);
        const userData = response.data.user;
        localStorage.setItem('user', JSON.stringify(userData));

        setIsAuthenticated(true);
        setUser(userData);

        const token = response.data.token;
        const [cartResponse, favoritesResponse] = await Promise.all([
          axios.get(baseApi + '/cart', {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get(baseApi + '/cart/favorites', {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        const userCart = cartResponse.data.cart || [];
        const userFavorites = (favoritesResponse.data.favorites || []).map((item: any) => ({
          id: item.id,
          photo: item.photo || '',
          title: item.title,
          price: item.price || 0,
        }));

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

          await axios.post(baseApi + '/cart', { cart: mergedCart }, { headers: { Authorization: `Bearer ${token}` } });
          await axios.post(baseApi + '/cart/favorites', { favorites: mergedFavorites }, { headers: { Authorization: `Bearer ${token}` } });

          localStorage.removeItem('guestCart');
          localStorage.removeItem('guestFavorites');
        }

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

  const logout = useCallback(() => {
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
  }, [user?.email, navigate]);

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