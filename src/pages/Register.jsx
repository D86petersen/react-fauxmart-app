import React from "react";

const Register = () => {
  return (
    // created a function that contains a registration form
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-3 fw-bolder text-center text-shadow-navlinks">
              Register
            </h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mb-5 mx-auto text-center text-title text-uppercase">
            <h1 className=" mb-3">Please fill in the form below</h1>
            <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>

            <form className="mt-5">
              <div className="form-group">
              <div className="form-group">
                  <label for="name">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="form-group">
                  <label for="name">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your last name"
                  />
                </div>
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                 <label htmlFor="exampleInputEmail1">Confirm Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                    />

                    <label for="exampleInputPassword1">Confirm Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                    />

                    <button type="submit" className="btn btn-danger mt-4">Register</button>
                    </div>
               
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
