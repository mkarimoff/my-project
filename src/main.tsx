import { createRoot } from "react-dom/client";
import "./index.css";
import RouterComponent from "./router";
import { BrowserRouter } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./components/context/authContext";
import { CartProvider } from "./components/context/cartContext";
import { FavoritesProvider } from "./components/context/favoritesContext";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <FavoritesProvider> 
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <RouterComponent />
          </FavoritesProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
} else {
  console.error("Root element not found.");
}
