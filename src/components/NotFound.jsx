import React from "react";

const NotFound = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center p-5 mt-5">
      <div className="row">
        <div className="col-md-12 text-center flex-column">
          <h1 className="mt-5 ">404</h1>
          <h2>Page not found</h2>
          <p className="lead">
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
