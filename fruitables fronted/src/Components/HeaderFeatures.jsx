import React from "react";
import CardHeaderFeature from "./CardHeaderFeature";

function HeaderFeatures() {
  return (
    <>
      <div className="container-fluid featurs py-5">
        <div className="container py-5">
          <div className="row g-4">
           <CardHeaderFeature one={{
       Icon:"car-side",
       PaymentType:"Free Shipping",
       DiscountType:"Free on order over $300"

           }}/>
             <CardHeaderFeature one={{
       Icon:"user-shield",
       PaymentType:"Security Payment",
       DiscountType:"100% security payment"

           }}/>
            {/* <div className="col-md-6 col-lg-3">
              <div className="featurs-item text-center rounded bg-light p-4">
                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                  <i className="fas fa-user-shield fa-3x text-white" />
                </div>
                <div className="featurs-content text-center">
                  <h5>Security Payment</h5>
                  <p className="mb-0">100% security payment</p>
                </div>
              </div>
            </div> */}
                         <CardHeaderFeature one={{
       Icon:"exchange-alt ",
       PaymentType:"30 Day Return",
       DiscountType:"30 day money guarantee"

           }}/>
                        <CardHeaderFeature one={{
       Icon:"phone-alt",
       PaymentType:"24/7 Support",
       DiscountType:"Support every time fast"

           }}/>
            {/* <div className="col-md-6 col-lg-3">
              <div className="featurs-item text-center rounded bg-light p-4">
                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                  <i className="fas fa-exchange-alt fa-3x text-white" />
                </div>
                <div className="featurs-content text-center">
                  <h5>30 Day Return</h5>
                  <p className="mb-0">30 day money guarantee</p>
                </div>
              </div>
            </div> */}
            {/* <div className="col-md-6 col-lg-3">
              <div className="featurs-item text-center rounded bg-light p-4">
                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                  <i className="fa fa-phone-alt fa-3x text-white" />
                </div>
                <div className="featurs-content text-center">
                  <h5>24/7 Support</h5>
                  <p className="mb-0">Support every time fast</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderFeatures;
