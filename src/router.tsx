import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import HomeComponent from './components/pages/home/home';
import AboutComponent from './components/pages/about/about';
import PagesComponet from './components/pages/pages/pages';
import BlogsComponent from './components/pages/blogs/blogs';
import ContactComponent from './components/pages/contact/contact';
import CollectionComponent from './components/pages/shop/collection/collection';
import PrivacyPolicy from './components/footer/PrivacyPolicy/privacy';
import TermsOfUse from './components/footer/TermsOfUse/terms';
import ScrollToTop from './scollToTop';
import ErrorPage from './components/404/404';
import BlogDetail from './components/pages/blogs/detail-page/blog.detail';
import CartComponent from './components/pages/cart/cart';
import Profile from './components/navbar/profile/profile';
import Signin from './components/signin/signin';
import Signup from './components/signup/signup';
import ShopComponent from './components/pages/shop';
import Loader from "./components/loading/loader";

const RouterComponent = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation(); // Detect route changes

  useEffect(() => {
    setLoading(true); // Show loader
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after delay
    }, 1500); // Adjust timing if needed

    return () => clearTimeout(timer);
  }, [location.pathname]); // Trigger when the route changes

  return (
    <>
      {loading ? (
        <Loader /> // Show loader while loading
      ) : (
        <>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<HomeComponent />} />
            <Route path='/about' element={<AboutComponent />} />
            <Route path='/shop' element={<ShopComponent />} />
            <Route path='/pages' element={<PagesComponet />} />
            <Route path='/blog' element={<BlogsComponent />} />
            <Route path='/contact' element={<ContactComponent />} />
            <Route path='/collection/:id' element={<CollectionComponent />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/terms-of-use' element={<TermsOfUse />} />
            <Route path='/BlogsDetail/:id' element={<BlogDetail />} />
            <Route path='/cart' element={<CartComponent />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/*' element={<ErrorPage />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
};

export default RouterComponent;
