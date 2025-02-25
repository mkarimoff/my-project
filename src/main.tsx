import { createRoot } from 'react-dom/client'
import './index.css'
import RouterComponent from './router'
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <BrowserRouter>
      <RouterComponent />
    </BrowserRouter>
  );
} else {
  console.error("Root element not found.");
}

