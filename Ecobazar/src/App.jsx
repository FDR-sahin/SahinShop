import React from 'react'
import Home from './pages/home/Home'
import {Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import ShopPage from './pages/shop/ShopPage'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import ShippingCart from './pages/shipping_cart/ShippingCart'
import Checkout from './pages/checkout/Checkout'
import Wishlist from './pages/wishlist/Wishlist'
import BlogList from './pages/blog_list/BlogList'
import Signin from './pages/sign_in/Signin'
import Signup from './pages/signup/Signup'
import Single from './pages/single_blog_list/Single'



function App() {
  return (

   
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shoppage" element={<ShopPage />} />
        <Route path="/page" element={<Single />} />
        <Route path="/bloglist" element={<BlogList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shippingcart" element={<ShippingCart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>


      <Footer/>

    </>


  )
}

export default App
