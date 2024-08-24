import React, { useEffect, useState } from "react";

function CheckOutPage() {
  let [cartData, setCartData] = useState(JSON.parse(localStorage.getItem('cartData')) || [])
  let [subTotal, setSubTotal] = useState(0)
  let [formData, setFormData] = useState({ firstName: "", lastName: "", address: "", city: "", country: "", zip: 0, mobile: 0, orderNote: "" })
  useEffect(() => {
    let sum = 0
    for (let i = 0; i < cartData.length; i++) {
      sum += cartData[i]["fPrice"] * cartData[i]["quantity"]
    }
    setSubTotal(sum)
  }, [])
  const handleSubmit = async () => {
    let obj = { data: cartData, formData: formData, subTotal: subTotal };
    //api call
    const response = await fetch("http://localhost:8800/checkout/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
    const jsonResponse = await response.json();
    
  }
  const handleChange = (e) => {
    let name = e["target"]["name"]
    let value = e["target"]["value"]
    let previousOrNew = { ...formData, [name]: value }
    setFormData(previousOrNew)
  }

  return (
    <>
      <div className="container-fluid py-5">
        <div className="container py-5">
          <h1 className="mb-4">Billing details</h1>
          <form action="#">
            <div className="row g-5">
              <div className="col-md-12 col-lg-6 col-xl-7">
                <div className="row">
                  <div className="col-md-12 col-lg-6">
                    <div className="form-item w-100">
                      <label className="form-label my-3">
                        First Name<sup>*</sup>
                      </label>
                      <input type="text" className="form-control" value={formData["firstName"]} onChange={(e) => handleChange(e)} name="firstName" />
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6">
                    <div className="form-item w-100">
                      <label className="form-label my-3">
                        Last Name<sup>*</sup>
                      </label>
                      <input type="text" onChange={(e) => handleChange(e)} className="form-control" value={formData["lastName"]} name="lastName" />
                    </div>
                  </div>
                </div>
                <div className="form-item">
                  {/* <label className="form-label my-3">
                    Company Name<sup>*</sup>
                  </label>
                  <input type="text" className="form-control" /> */}
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                    Address <sup>*</sup>
                  </label>
                  <input
                    value={formData["address"]}
                    onChange={(e) => handleChange(e)}
                    type="text"
                    name="address"
                    className="form-control"
                    placeholder="House Number Street Name"
                  />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                    Town/City<sup>*</sup>
                  </label>
                  <input type="text" className="form-control" name="city" value={formData["city"]} onChange={(e) => handleChange(e)} />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                    Country<sup>*</sup>
                  </label>
                  <input type="text" className="form-control" name="country" value={formData["country"]} onChange={(e) => handleChange(e)} />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                    Postcode/Zip<sup>*</sup>
                  </label>
                  <input type="text" className="form-control" name="zip" value={formData["zip"]} onChange={(e) => handleChange(e)} />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                    Mobile<sup>*</sup>
                  </label>
                  <input type="tel" className="form-control" name="mobile" value={formData["mobile"]} onChange={(e) => handleChange(e)} />
                </div>
                {/* <div className="form-item">
                  <label className="form-label my-3">
                    Email Address<sup>*</sup>
                  </label>
                  <input type="email" className="form-control" />
                </div>
                <div className="form-check my-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="Account-1"
                    name="Accounts"
                    defaultValue="Accounts"
                  />
                  <label className="form-check-label" htmlFor="Account-1">
                    Create an account?
                  </label>
                </div> */}
                <hr />
                {/* <div className="form-check my-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="Address-1"
                    name="Address"
                    defaultValue="Address"
                  />
                  <label className="form-check-label" htmlFor="Address-1">
                    Ship to a different address?
                  </label>
                </div> */}
                <div className="form-item">
                  <textarea
                    name="orderNote"
                    className="form-control"
                    spellCheck="false"
                    cols={30}
                    rows={11}
                    placeholder="Oreder Notes (Optional)"
                    defaultValue={""}
                    value={formData["orderNote"]}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="col-md-12 col-lg-6 col-xl-5">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Products</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartData.map((item, index) => (
                        <tr>
                          <th scope="row">
                            <div className="d-flex align-items-center mt-2">
                              <img
                                src={item["fImage"]}
                                className="img-fluid rounded-circle"
                                style={{ width: 90, height: 90 }}
                                alt=""
                              />
                            </div>
                          </th>
                          <td className="py-5">{item["fName"]}</td>
                          <td className="py-5">${item["fPrice"]}</td>
                          <td className="py-5">{item["quantity"]}</td>
                          <td className="py-5">${item["fPrice"] * item["quantity"]}</td>
                        </tr>
                      ))}
                      <tr>
                        <th scope="row"></th>
                        <td className="py-5" />
                        <td className="py-5" />
                        <td className="py-5">
                          <p className="mb-0 text-dark py-3">Subtotal</p>
                        </td>
                        <td className="py-5">
                          <div className="py-3 border-bottom border-top">
                            <p className="mb-0 text-dark">${subTotal}</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"></th>
                        <td className="py-5">
                          <p className="mb-0 text-dark py-4">Shipping</p>
                        </td>
                        <td colSpan={3} className="py-5">
                          <div className="form-check text-start">
                            <input
                              type="checkbox"
                              className="form-check-input bg-primary border-0"
                              id="Shipping-1"
                              name="Shipping-1"
                              defaultValue="Shipping"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="Shipping-1"
                            >
                              Free Shipping
                            </label>
                          </div>
                          <div className="form-check text-start">
                            <input
                              type="checkbox"
                              className="form-check-input bg-primary border-0"
                              id="Shipping-2"
                              name="Shipping-1"
                              defaultValue="Shipping"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="Shipping-2"
                            >
                              Flat rate: $15.00
                            </label>
                          </div>
                          <div className="form-check text-start">
                            <input
                              type="checkbox"
                              className="form-check-input bg-primary border-0"
                              id="Shipping-3"
                              name="Shipping-1"
                              defaultValue="Shipping"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="Shipping-3"
                            >
                              Local Pickup: $8.00
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"></th>
                        <td className="py-5">
                          <p className="mb-0 text-dark text-uppercase py-3">
                            TOTAL
                          </p>
                        </td>
                        <td className="py-5" />
                        <td className="py-5" />
                        <td className="py-5">
                          <div className="py-3 border-bottom border-top">
                            <p className="mb-0 text-dark">$135.00</p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                  <div className="col-12">
                    <div className="form-check text-start my-3">
                      <input
                        type="checkbox"
                        className="form-check-input bg-primary border-0"
                        id="Transfer-1"
                        name="Transfer"
                        defaultValue="Transfer"
                      />
                      <label className="form-check-label" htmlFor="Transfer-1">
                        Direct Bank Transfer
                      </label>
                    </div>
                    <p className="text-start text-dark">
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference. Your order
                      will not be shipped until the funds have cleared in our
                      account.
                    </p>
                  </div>
                </div>
                <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                  <div className="col-12">
                    <div className="form-check text-start my-3">
                      <input
                        type="checkbox"
                        className="form-check-input bg-primary border-0"
                        id="Payments-1"
                        name="Payments"
                        defaultValue="Payments"
                      />
                      <label className="form-check-label" htmlFor="Payments-1">
                        Check Payments
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                  <div className="col-12">
                    <div className="form-check text-start my-3">
                      <input
                        type="checkbox"
                        className="form-check-input bg-primary border-0"
                        id="Delivery-1"
                        name="Delivery"
                        defaultValue="Delivery"
                      />
                      <label className="form-check-label" htmlFor="Delivery-1">
                        Cash On Delivery
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                  <div className="col-12">
                    <div className="form-check text-start my-3">
                      <input
                        type="checkbox"
                        className="form-check-input bg-primary border-0"
                        id="Paypal-1"
                        name="Paypal"
                        defaultValue="Paypal"
                      />
                      <label className="form-check-label" htmlFor="Paypal-1">
                        Paypal
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row g-4 text-center align-items-center justify-content-center pt-4">
                  <button
                    type="button"
                    className="btn border-secondary py-3 px-4 text-uppercase w-100 text-primary"
                    onClick={handleSubmit}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CheckOutPage;
