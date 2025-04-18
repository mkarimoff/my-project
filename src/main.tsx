import { createRoot } from 'react-dom/client'
import './index.css'
import RouterComponent from './router'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './components/navbar/cart/CartContext';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <BrowserRouter>
      <CartProvider> 
        <RouterComponent />
      </CartProvider>
    </BrowserRouter>
  );
} else {
  console.error("Root element not found.");
}

