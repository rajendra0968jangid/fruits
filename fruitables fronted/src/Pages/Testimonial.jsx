import React from "react";
import Navbar from "../Components/Navbar";
import CartPage from "../Components/CartPage";
import Footer from "../Components/Footer";
import SinglePageHeader from "../Components/SinglePageHeader";
function Testimonial() {
  return (
    <>
      {/* navbar */}
      <Navbar />
      <SinglePageHeader one={{title:"Testimonial"}}/>
      {/* <h1>Testimonial</h1> */}
      <Footer />
    </>
  );
}

export default Testimonial;
