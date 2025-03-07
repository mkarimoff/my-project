import {  Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import HomeComponent from './components/pages/home/home'
import AboutComponent from './components/pages/about/about'

import PagesComponet from './components/pages/pages/pages'
import BlogsComponent from './components/pages/blogs/blogs'
import ContactComponent from './components/pages/contact/contact'
import CollectionComponent from './components/pages/shop/collection/collection'
import PrivacyPolicy from './components/footer/PrivacyPolicy/privacy'
import TermsOfUse from './components/footer/TermsOfUse/terms'
import ScrollToTop from './scollToTop'
import ErrorPage from './components/404/404'
import ShopComponent from './components/pages/shop'
import BlogDetail from './components/pages/blogs/detail-page/blog.detail'


const RouterComponent = () => {
  return (
    <>
    <Navbar/>
    <ScrollToTop/>
    <Routes>
        <Route path='/' element= {<HomeComponent/>}/>
        <Route path='/about' element= {<AboutComponent/>}/>
        <Route path='/shop' element= {<ShopComponent/>}/>
        <Route path='/pages' element= {<PagesComponet/>}/>
        <Route path='/blog' element= {<BlogsComponent/>}/>
        {/* <Route path='/featured' element= {<CollectionComponent/>}/> */}
        <Route path='/contact' element= {<ContactComponent/>}/>
        <Route path='/collection/:id' element= {<CollectionComponent/>}/> 
        <Route path='/privacy-policy' element= {<PrivacyPolicy/>}/> 
        <Route path='/terms-of-use' element= {<TermsOfUse/>}/>
        <Route path='/BlogsDetail/:id' element= {<BlogDetail/>}/>
        <Route path='/*' element= {<ErrorPage/>}/>
    </Routes>
    <Footer/>
    </>
  )
}
export default RouterComponent