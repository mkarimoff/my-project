import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import AboutComponent from './components/pages/about/about';
import PagesComponet from './components/pages/pages/pages';
import BlogsComponent from './components/pages/blogs/blogs';
import ContactComponent from './components/pages/contact/contact';
import CollectionComponent from './components/pages/shop/collection/collection';
import PrivacyPolicy from './components/footer/PrivacyPolicy/privacy';
import TermsOfUse from './components/footer/TermsOfUse/terms';
import ScrollToTop from './scollToTop';
import BlogDetail from './components/pages/blogs/detail-page/blog.detail';
import CartComponent from './components/navbar/cart/cart';
import Profile from './components/navbar/profile/profile';
import Signin from './components/signin/signin';
import ShopComponent from './components/pages/shop';
import Loader from "./components/loading/loader";
import Register from "./components/register/register";
import ErrorPage from "./components/404/404";
import HomeComponent from "./components/pages/home/home";
import FavoriteComponent from "./components/navbar/favorites/favorite";
import SearchPage from "./components/navbar/search";
import CheckoutForm from "./components/navbar/cart/order";

const RouterComponent = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    setLoading(true); 
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 1500);

    return () => clearTimeout(timer);
  }, [location.pathname]); 

  return (
    <>
      {loading ? (
        <Loader /> 
      ) : (
        <>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Signin />} />
            <Route path='/home' element={<HomeComponent />} /> 
            <Route path='/about' element={<AboutComponent />} />
            <Route path='/shop' element={<ShopComponent />} />
            <Route path='/pages' element={<PagesComponet />} />
            <Route path='/blog' element={<BlogsComponent />} />
            <Route path='/contact' element={<ContactComponent />} />
            <Route path='/collection/:_id' element={<CollectionComponent />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/terms-of-use' element={<TermsOfUse />} />
            <Route path='/BlogsDetail/:id' element={<BlogDetail />} />
            <Route path='/cart' element={<CartComponent />} />
            <Route path='/favorites' element={<FavoriteComponent />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/register' element={<Register />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/order' element={<CheckoutForm />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
};

export default RouterComponent;

