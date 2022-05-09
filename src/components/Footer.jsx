import React from 'react'
// Created a Footer component with bootstrap styling that includes a copyright message and social media links
function Footer() {
  return (
    <>
    <footer className="footer mt-auto py-3 bg-light border-top border-3" id="border-shadow">
                 <div className="container-fluid text-center" >
                   <div className="row">
                      <div className="col-12 col-md d-flex justify-content-center">
                      <a className="text-dark mx-1" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                      <a className="text-dark mx-1" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                      <a className="text-dark mx-1" href="#"><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
                      <a className="text-dark mx-1" href="#"><i className="fa fa-github" aria-hidden="true"></i></a>
                        </div>
                      <span className="text-dark fw-bold">&copy;FauxMart 2022</span>
                 </div>
                 </div>
             </footer>
    </>
  );
};

export default Footer