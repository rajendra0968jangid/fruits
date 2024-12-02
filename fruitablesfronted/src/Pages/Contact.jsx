import React from "react";
import Navbar from "../Components/Navbar";
import CartPage from "../Components/CartPage";
import Footer from "../Components/Footer";
import SinglePageHeader from "../Components/SinglePageHeader";
import ContactPage from "../Components/ContactPage";
function Contact() {
  return (
    <>
      {/* navbar */}
      <Navbar />
      <SinglePageHeader one={{title:"Contact"}}/>
      <ContactPage/>
      {/* <h1>Contact</h1> */}
      <Footer />
    </>
  );
}

export default Contact;
