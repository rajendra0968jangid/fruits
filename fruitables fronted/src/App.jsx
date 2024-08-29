import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import CheckOut from "./Pages/CheckOut";
import Contact from "./Pages/Contact";
import Page404 from "./Pages/Page404";
import Testimonial from "./Pages/Testimonial";
import Shopdetail from "./Pages/Shopdetail";
import Signup from "./Pages/Signup";
import SignIn from "./Pages/SignIn";
import Profile from "./Pages/Profile";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Page404 />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/shopdetail" element={<Shopdetail />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
