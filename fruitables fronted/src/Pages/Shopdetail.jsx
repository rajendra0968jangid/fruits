import React from "react";
import Navbar from "../Components/Navbar";
import CartPage from "../Components/CartPage";
import Footer from "../Components/Footer";
import SinglePageHeader from "../Components/SinglePageHeader";
function Shopdetail() {
  return (
    <>
      {/* navbar */}
      <Navbar />
      <SinglePageHeader one={{title:"Shop Detail"}}/>
      <h1>Shop detail</h1>
      <Footer />
    </>
  );
}

export default Shopdetail;
