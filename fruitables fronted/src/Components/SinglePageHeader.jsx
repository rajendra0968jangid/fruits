import React from "react";
function SinglePageHeader({ one }) {
  return (
    <>
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">{one["title"]}</h1>
        {(one["title"] == "SignIn" || one["title"] == "Signup") ? "" : <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item active text-white">{one["title"]}</li>
        </ol>}
      </div>
    </>
  );
}

export default SinglePageHeader;
