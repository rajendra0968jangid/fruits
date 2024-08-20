import React, { useState } from "react";

function BestSeller() {
  let [sellerData, setSellerData] = useState([{
    image: "img/best-product-1.jpg",
    name: "Organic Tomato",
    price: 3.12,
    text_primary: ["text-primary", "text-primary", "text-primary", "text-primary", ""]
  }, {
    image: "img/best-product-2.jpg",
    name: "Organic Tomato",
    price: 3.12,
    text_primary: ["text-primary", "text-primary", "text-primary", "text-primary", ""]
  }, {
    image: "img/best-product-3.jpg",
    name: "Organic Tomato",
    price: 3.12,
    text_primary: ["text-primary", "text-primary", "text-primary", "text-primary", ""]
  }, {
    image: "img/best-product-4.jpg",
    name: "Organic Tomato",
    price: 3.12,
    text_primary: ["text-primary", "text-primary", "text-primary", "text-primary", ""]
  }, {
    image: "img/best-product-5.jpg",
    name: "Organic Tomato",
    price: 3.12,
    text_primary: ["text-primary", "text-primary", "text-primary", "text-primary", ""]
  }, {
    image: "img/best-product-6.jpg",
    name: "Organic Tomato",
    price: 3.12,
    text_primary: ["text-primary", "text-primary", "text-primary", "text-primary", ""]
  }])
  
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 700 }}>
            <h1 className="display-4">Bestseller Products</h1>
            <p>
              Latin words, combined with a handful of model sentence structures,
              to generate Lorem Ipsum which looks reasonable.
            </p>
          </div>
          <div className="row g-4">
            {sellerData.map((item, index) => (
              <div key={index} className="col-lg-6 col-xl-4">
                <div className="p-4 rounded bg-light">
                  <div className="row align-items-center">

                    <div className="col-6">
                      <img
                        src={item["image"]}
                        className="img-fluid rounded-circle w-100"
                        alt=""
                      />
                    </div>
                    <div className="col-6">
                      <a href="#" className="h5">
                        {item["name"]}
                      </a>
                      <div className="d-flex my-3">
                        {item["text_primary"].map((item1, index1) => (
                          <i className={`fas fa-star ${item1}`} />
                        ))}
                      </div>
                      <h4 className="mb-3">{item["price"]} $</h4>
                      <a
                        href="#"
                        className="btn border border-secondary rounded-pill px-3 text-primary"
                      >
                        <i className="fa fa-shopping-bag me-2 text-primary" /> Add
                        to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="text-center">
                <img
                  src="img/fruite-item-1.jpg"
                  className="img-fluid rounded"
                  alt=""
                />
                <div className="py-4">
                  <a href="#" className="h5">
                    Organic Tomato
                  </a>
                  <div className="d-flex my-3 justify-content-center">
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star" />
                  </div>
                  <h4 className="mb-3">3.12 $</h4>
                  <a
                    href="#"
                    className="btn border border-secondary rounded-pill px-3 text-primary"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary" /> Add
                    to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="text-center">
                <img
                  src="img/fruite-item-2.jpg"
                  className="img-fluid rounded"
                  alt=""
                />
                <div className="py-4">
                  <a href="#" className="h5">
                    Organic Tomato
                  </a>
                  <div className="d-flex my-3 justify-content-center">
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star" />
                  </div>
                  <h4 className="mb-3">3.12 $</h4>
                  <a
                    href="#"
                    className="btn border border-secondary rounded-pill px-3 text-primary"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary" /> Add
                    to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="text-center">
                <img
                  src="img/fruite-item-3.jpg"
                  className="img-fluid rounded"
                  alt=""
                />
                <div className="py-4">
                  <a href="#" className="h5">
                    Organic Tomato
                  </a>
                  <div className="d-flex my-3 justify-content-center">
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star" />
                  </div>
                  <h4 className="mb-3">3.12 $</h4>
                  <a
                    href="#"
                    className="btn border border-secondary rounded-pill px-3 text-primary"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary" /> Add
                    to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="text-center">
                <img
                  src="img/fruite-item-4.jpg"
                  className="img-fluid rounded"
                  alt=""
                />
                <div className="py-2">
                  <a href="#" className="h5">
                    Organic Tomato
                  </a>
                  <div className="d-flex my-3 justify-content-center">
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star text-primary" />
                    <i className="fas fa-star" />
                  </div>
                  <h4 className="mb-3">3.12 $</h4>
                  <a
                    href="#"
                    className="btn border border-secondary rounded-pill px-3 text-primary"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary" /> Add
                    to cart
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default BestSeller;
