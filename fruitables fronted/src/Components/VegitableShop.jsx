import React from "react";

const VegitableShop = () => {
  return (
    <div className="container-fluid vesitable py-5">
      <div className="container py-5">
        <h1 className="mb-0">Fresh Organic Vegetables</h1>
        <div id="vegetableCarousel" className="carousel slide">
          <div className="carousel-inner">
            {[
              { src: "img/vegetable-item-6.jpg", name: "Parsely", price: "$4.99 / kg" },
              { src: "img/vegetable-item-1.jpg", name: "Parsely", price: "$4.99 / kg" },
              { src: "img/vegetable-item-3.png", name: "Banana", price: "$7.99 / kg" },
              { src: "img/vegetable-item-4.jpg", name: "Bell Papper", price: "$7.99 / kg" },
              { src: "img/vegetable-item-5.jpg", name: "Potatoes", price: "$7.99 / kg" }
            ].map((item, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="border border-primary rounded position-relative vesitable-item">
                  <div className="vesitable-img">
                    <img
                      src={item.src}
                      className="img-fluid w-100 rounded-top"
                      alt={item.name}
                    />
                  </div>
                  <div
                    className="text-white bg-primary px-3 py-1 rounded position-absolute"
                    style={{ top: 10, right: 10 }}
                  >
                    Vegetable
                  </div>
                  <div className="p-4 rounded-bottom">
                    <h4>{item.name}</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                      eiusmod te incididunt
                    </p>
                    <div className="d-flex justify-content-between flex-lg-wrap">
                      <p className="text-dark fs-5 fw-bold mb-0">{item.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a
            className="carousel-control-prev"
            href="#vegetableCarousel"
            role="button"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#vegetableCarousel"
            role="button"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default VegitableShop;
