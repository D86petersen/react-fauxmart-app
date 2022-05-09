import React from 'react'

const Register = () => {
  return (
      // created a function that contains a registration form
    <div>
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12">
                    <h1 className="display-3 fw-bolder text-center text-shadow-navlinks">
                        Register
                    </h1>
                    <hr />
                    </div>
                    </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 mb-5 mx-auto col-md-8 text-center text-title text-uppercase">
                                <h1 className=" mb-3">Please fill in the form below</h1>

                                <form>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">
                                            Email address
                                        </label>
                                        <input

                                            type="email"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter email"
                                        />
                                        <small id="emailHelp" className="form-text text-muted">
                                            We'll never share your email with anyone else.
                                        </small>
                                    </div>
                                        </form>
                                        </div>
                                        </div>
                                        </div>
                                        </div>
  )
}

export default Register