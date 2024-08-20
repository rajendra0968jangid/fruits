import React from "react";
import Navbar from "../Components/Navbar";
import CartPage from "../Components/CartPage";
import Footer from "../Components/Footer";
import SinglePageHeader from "../Components/SinglePageHeader";
import FruitShopFilter from "../Components/FruitShopFilter";
import Hero from "../Components/Hero";
function Shop() {
  return (
    <>
      {/* navbar */}
      <Navbar />
      <SinglePageHeader one={{title:"Shop"}}/>
      <FruitShopFilter/>
      {/* <h1>Shop</h1> */}
      <Footer />
    </>
  );
}

export default Shop;
