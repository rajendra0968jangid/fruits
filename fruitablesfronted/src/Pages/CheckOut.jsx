import React from "react";
import Navbar from "../Components/Navbar";
import CartPage from "../Components/CartPage";
import Footer from "../Components/Footer";
import SinglePageHeader from "../Components/SinglePageHeader";
import CheckOutPage from "../Components/CheckOutPage";
function CheckOut() {
  return (
    <>
      {/* navbar */}
      <Navbar />
      <SinglePageHeader one={{title:"Checkout"}}/>
      <CheckOutPage/>
      {/* <h1>Checkout</h1> */}
      <Footer />
    </>
  );
}

export default CheckOut;
