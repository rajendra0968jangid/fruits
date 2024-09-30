import React from "react";

function CardFruitShop({one}) {
    
  return (
    <>
      <div className="col-md-6 col-lg-4 col-xl-3">
        <div className="rounded position-relative fruite-item">
          <div className="fruite-img">
            <img
              src={one["fImage"]}
              className="img-fluid w-100 rounded-top"
              alt=""
            />
          </div>
          <div
            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
            style={{ top: 10, left: 10 }}
          >
            {one["type"]}
          </div>
          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
            <h4>{one["fName"]}</h4>
            <p>
              {one["fTitle"]}
            </p>
            <div className="d-flex justify-content-between flex-lg-wrap">
              <p className="text-dark fs-5 fw-bold mb-0">${one["fPrice"]} / kg</p>
              <a
                href="#"
                className="btn border border-secondary rounded-pill px-3 text-primary"
              >
                <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardFruitShop;
