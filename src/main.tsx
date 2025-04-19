import { createRoot } from "react-dom/client";
import "./index.css";
import RouterComponent from "./router";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./components/context/authContext.tsx";
import { CartProvider } from "./components/context/cartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
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
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
} else {
  console.error("Root element not found.");
}