import React from "react";
import Navbar from "../Components/Navbar";
import CartPage from "../Components/CartPage";
import Footer from "../Components/Footer";
import SinglePageHeader from "../Components/SinglePageHeader";
import BannerSection from "../Components/BannerSection";
import Hero from "../Components/Hero";
import HeaderFeatures from "../Components/HeaderFeatures";
import FruitShop from "../Components/FruitShop";
import Features from "../Components/Features";
import VegitableShop from "../Components/VegitableShop";
import BestSeller from "../Components/BestSeller";
import Fact from "../Components/Fact";
import Tastimonial from "../Components/Tastimonial";
import BackToTop from "../Components/BackToTop";
function Home() {
  return (
    <>
      {/* navbar */}
      <Navbar />
      <Hero />
      <HeaderFeatures/>
      <FruitShop/>
      <Features/>
      <VegitableShop/>
      <BannerSection/>
      <BestSeller/>
      <Fact/>
      <Tastimonial/>
      <BackToTop/>
      {/* <h1>Home</h1> */}
      <Footer />
    </>
  );
}

export default Home;
