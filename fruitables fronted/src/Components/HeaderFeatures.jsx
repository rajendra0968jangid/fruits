import React from "react";
import CardHeaderFeature from "./CardHeaderFeature";

function HeaderFeatures() {
  return (
    <>
      <div className="container-fluid featurs py-5">
        <div className="container py-5">
          <div className="row g-4">
            <CardHeaderFeature one={{
              Icon: "car-side",
              PaymentType: "Free Shipping",
              DiscountType: "Free on order over $300"

            }} />
            <CardHeaderFeature one={{
              Icon: "user-shield",
              PaymentType: "Security Payment",
              DiscountType: "100% security payment"

            }} />
            <CardHeaderFeature one={{
              Icon: "exchange-alt ",
              PaymentType: "30 Day Return",
              DiscountType: "30 day money guarantee"

            }} />
            <CardHeaderFeature one={{
              Icon: "phone-alt",
              PaymentType: "24/7 Support",
              DiscountType: "Support every time fast"

            }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderFeatures;
