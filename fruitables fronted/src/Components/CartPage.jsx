import React, { useEffect, useState } from "react";

function CartPage() {
  let [cartData, setCartData] = useState(JSON.parse(localStorage.getItem('cartData')) || [])

  let [cartSum, setCartSum] = useState(0)

  let [coupon, setCoupon] = useState({ discount: 2.1, name: "hello" })
  let [discount, setDiscount] = useState({ name: "" })
  let [showDiscount, setShowDiscount] = useState({ price: 0 })

  useEffect(() => {
    let count = 0
    for (let i = 0; i < cartData.length; i++) {
      count += cartData[i]["fPrice"] * cartData[i]["quantity"]
    }
    setCartSum(count)
  }, [])

  const handleAdd = (product) => {
    let obj1 = { ...product, quantity: product["quantity"] + 1 }
    let previousOrNew = []
    for (let i = 0; i < cartData.length; i++) {
      if (cartData[i]["id"] == obj1["id"]) {
        previousOrNew[i] = obj1;
      }
      else {
        previousOrNew[i] = cartData[i]
      }
    }
    setCartData(previousOrNew)
  }

  const handleSubtract = (product) => {
    if (product["quantity"] > 1) {
      let obj1 = { ...product, quantity: product["quantity"] - 1 }
      let previousOrNew = []
      for (let i = 0; i < cartData.length; i++) {
        if (cartData[i]["id"] == obj1["id"]) {
          previousOrNew[i] = obj1;
        }
        else {
          previousOrNew[i] = cartData[i]
        }
      }
      setCartData(previousOrNew)
    }
    else {
      handleRemove(product)
    }
  }

  const handleRemove = (product) => {
    let previousOrNew = []
    for (let i = 0; i < cartData.length; i++) {
      if (cartData[i]["id"] != product["id"]) {
        previousOrNew.push(cartData[i])
      }
    }
    setCartData(previousOrNew)
  }
  const handleDiscount = () => {
    if (discount["name"] == coupon["name"]) {
      setShowDiscount({ price: coupon["discount"] })
    }
  }
  const handleChange = (e) => {
    setDiscount({ name: e["target"]["value"] })
  }
  localStorage.setItem('cartData', JSON.stringify(cartData))
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Products</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                {cartData.map((item, index) => (
                  <tr>
                    <th scope="row">
                      <div className="d-flex align-items-center">
                        <img
                          src={item["fImage"]}
                          className="img-fluid me-5 rounded-circle"
                          style={{ width: 80, height: 80 }}
                          alt=""
                        />
                      </div>
                    </th>
                    <td>
                      <p className="mb-0 mt-4">{item["fName"]}</p>
                    </td>
                    <td>
                      <p className="mb-0 mt-4">{item["fPrice"]} $</p>
                    </td>
                    <td>
                      <div
                        className="input-group quantity mt-4"
                        style={{ width: 100 }}
                      >
                        <div className="input-group-btn">
                          <button className="btn btn-sm btn-minus rounded-circle bg-light border" onClick={() => handleSubtract(item)}>
                            <i className="fa fa-minus" />
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-control form-control-sm text-center border-0"
                          value={item["quantity"]}
                        />
                        <div className="input-group-btn">
                          <button className="btn btn-sm btn-plus rounded-circle bg-light border" onClick={() => handleAdd(item)}>
                            <i className="fa fa-plus" />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="mb-0 mt-4">{item["quantity"] * item["fPrice"]} $</p>
                    </td>
                    <td>
                      <button className="btn btn-md rounded-circle bg-light border mt-4" onClick={() => handleRemove(item)}>
                        <i className="fa fa-times text-danger" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5">
            <input
              type="text"
              className="border-0 border-bottom rounded me-5 py-3 mb-4"
              placeholder="Coupon Code"
              onChange={(e) => handleChange(e)}
              value={discount["name"]}
            />
            <button
              className="btn border-secondary rounded-pill px-4 py-3 text-primary"
              type="button"
              onClick={handleDiscount}
            >
              Apply Coupon
            </button>
          </div>
          <div className="row g-4 justify-content-end">
            <div className="col-8" />
            <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
              <div className="bg-light rounded">
                <div className="p-4">
                  <h1 className="display-6 mb-4">
                    Cart <span className="fw-normal">Total</span>
                  </h1>
                  <div className="d-flex justify-content-between mb-4">
                    <h5 className="mb-0 me-4">Subtotal:</h5>
                    <p className="mb-0">${cartSum}</p>
                  </div>
                  <div className="d-flex justify-content-between mb-4">
                    <h5 className="mb-0 me-4">Discount:</h5>
                    <p className="mb-0">${showDiscount["price"]}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5 className="mb-0 me-4">Shipping</h5>
                    <div className="">
                      <p className="mb-0">Flat rate: $0.00</p>
                    </div>
                  </div>
                  {/* <p className="mb-0 text-end">Shipping to Ukraine.</p> */}
                </div>
                <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                  <h5 className="mb-0 ps-4 me-4">Total</h5>
                  <p className="mb-0 pe-4">$99.00</p>
                </div>
                <button
                  className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4"
                  type="button"
                >
                  Proceed Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
