import React from "react";
import { Link } from "react-router-dom";
function CopyRight() {
  return (
    <>
      <div className="container-fluid copyright bg-dark py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <span className="text-light">
                <Link to="#">
                  <i className="fas fa-copyright text-light me-2" />
                  Your Site Name
                </Link>
                , All right reserved.
              </span>
            </div>
            <div className="col-md-6 my-auto text-center text-md-end text-white">
              {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
              {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
              {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
              Designed By{" "}
              <Link className="border-bottom" to="https://htmlcodex.com">
                HTML Codex
              </Link>{" "}
              Distributed By{" "}
              <Link className="border-bottom" to="https://themewagon.com">
                ThemeWagon
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CopyRight;
