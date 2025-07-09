import React, { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [url, setUrl] = useState(window.location.pathname)
  let [cartData, setCartData] = useState(JSON.parse(localStorage.getItem('cartData')) || 0)
  let [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')) || 0)
  return (
    <>
      <div className="container-fluid fixed-top">
        <div className="container topbar bg-primary d-none d-lg-block">
          <div className="d-flex justify-content-between">
            <div className="top-info ps-2">
              <small className="me-3">
                <i className="fas fa-map-marker-alt me-2 text-secondary" />{" "}
                <Link to="#" className="text-white">
                  123 Street, India
                </Link>
              </small>
              <small className="me-3">
                <i className="fas fa-envelope me-2 text-secondary" />
                <Link to="#" className="text-white">
                  Email@Example.com
                </Link>
              </small>
            </div>
            <div className="top-link pe-2">
              <Link to="#" className="text-white">
                <small className="text-white mx-2">Privacy Policy</small>/
              </Link>
              <Link to="#" className="text-white">
                <small className="text-white mx-2">Terms of Use</small>/
              </Link>
              <Link to="#" className="text-white">
                <small className="text-white ms-2">Sales and Refunds</small>
              </Link>
            </div>
          </div>
        </div>
        <div className="container px-0">
          <nav className="navbar navbar-light bg-white navbar-expand-xl">
            <Link to="/" className="navbar-brand">
              <h1 className="text-primary display-6">Fruitables</h1>
            </Link>
            <button
              className="navbar-toggler py-2 px-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars text-primary" />
            </button>
            <div
              className="collapse navbar-collapse bg-white"
              id="navbarCollapse"
            >
              <div className="navbar-nav mx-auto">
                <Link to="/" className={`nav-item nav-link ${(url == "/") ? "active" : ""}`}>
                  Home
                </Link>
                <Link to="/shop" className={`nav-item nav-link ${(url == "/shop") ? "active" : ""}`}>
                  Shop
                </Link>
                <Link to="/shopdetail" className={`nav-item nav-link ${(url == "/shopdetail") ? "active" : ""}`}>
                  Shop Detail
                </Link>
                <div className="nav-item dropdown">
                  <Link
                    to="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </Link>
                  <div className="dropdown-menu m-0 bg-secondary rounded-0">
                    <Link to="/cart" className="dropdown-item">
                      Cart
                    </Link>
                    <Link to="/checkout" className="dropdown-item">
                      Chackout
                    </Link>
                    <Link to="/testimonial" className="dropdown-item">
                      Testimonial
                    </Link>
                    <Link to="/404" className="dropdown-item">
                      404 Page
                    </Link>
                  </div>
                </div>
                <Link to="/contact" className={`nav-item nav-link ${(url == "/contact") ? "active" : ""}`}>
                  Contact
                </Link>
              </div>
              <div className="d-flex m-3 me-0">
                <button
                  className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4"
                  data-bs-toggle="modal"
                  data-bs-target="#searchModal"
                >
                  <i className="fas fa-search text-primary" />
                </button>
                <Link to="#" className="position-relative me-4 my-auto">
                  <i className="fa fa-shopping-bag fa-2x" />
                  <span
                    className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                    style={{ top: "-5px", left: 15, height: 20, minWidth: 20 }}
                  >
                    {cartData.length || 0}
                  </span>
                </Link>
                {userData ? (
                  <Link to="/profile" className="my-auto">
                    <i className="fas fa-user fa-2x" />
                  </Link>
                ) : (
                  <Link to="/signin">
                    <button
                      type="submit"
                      className="btn btn-primary border-2 border-secondary rounded-pill text-white h-100"
                      style={{ top: 0, right: "25%" }}
                    >
                      Sign in
                    </button>
                  </Link>
                )}
              </div>

            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
