import React from 'react';

function CardHeaderFeature({one}) {
    console.log(one);
    
  return (
    <>
       <div className="col-md-6 col-lg-3">
              <div className="featurs-item text-center rounded bg-light p-4">
                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                  <i className={`fas fa-${one["Icon"]} fa-3x text-white`} />
                </div>
                <div className="featurs-content text-center">
                  <h5>{one["PaymentType"]}</h5>
                  <p className="mb-0">{one["DiscountType"]}</p>
                </div>
              </div>
            </div>
    </>
  );
}

export default CardHeaderFeature;
