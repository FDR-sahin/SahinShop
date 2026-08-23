import React from "react";

import Hero from "../../components/hero/Hero";
import Saleof from "../../components/selofmonth/Saleof";
import Offer from "../../components/offer/Offer";
import Subscrive from "../../components/subscribe/Subscrive";
import FollowInstra from "../../components/followinstra/FollowInstra";
import Testimonials from "../../components/testimonials/Testimonials";
import LatestNews from "../../components/LatestNews/LatestNews";

import PopularProduct from "../../components/popularProducts/PopularProduct";
import FeaturedProduct from "../../components/featuredProduct/FeaturedProduct";
import HotDeals from "../../components/HotDeals/HotDeals";
import PopularCatagories from "../../components/PopularCatagories/PopularCatagories";



function Home() {
  return (
    <>
      {/* <Header /> */}
      {/* <BlogList/> */}
      {/* <ShippingCart/> */}
      {/* <Wishlist/> */}
      {/* <Checkout/> */}
      {/* <ShopPage/> */}
      {/* <About/> */}
      {/* <Contact/> */}
      <Hero />
      <PopularCatagories />
      <PopularProduct />
      <Saleof />
      <HotDeals />
      <Offer />
      <FeaturedProduct />
      <LatestNews />
      <Testimonials />
      <FollowInstra />
      <Subscrive />
      {/* <Footer /> */}
    </>
  );
}

export default Home;
