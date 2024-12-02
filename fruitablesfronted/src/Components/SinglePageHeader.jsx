import React from "react";
import { Link } from "react-router-dom";
function SinglePageHeader({ one }) {
  return (
    <>
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">{one["title"]}</h1>
        {(one["title"] == "SignIn" || one["title"] == "Signup") ? "" : <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="#">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="#">Pages</Link>
          </li>
          <li className="breadcrumb-item active text-white">{one["title"]}</li>
        </ol>}
      </div>
    </>
  );
}

export default SinglePageHeader;
