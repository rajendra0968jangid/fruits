import React from "react";
import Navbar from "../Components/Navbar";
import CartPage from "../Components/CartPage";
import Footer from "../Components/Footer";
import SinglePageHeader from "../Components/SinglePageHeader";
import BannerSection from "../Components/BannerSection";
import Hero from "../Components/Hero";
function Home() {
  return (
    <>
      {/* navbar */}
      <Navbar />
      <Hero />
      <h1>Home</h1>
      <Footer />
    </>
  );
}

export default Home;
