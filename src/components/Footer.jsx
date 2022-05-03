import React from 'react'
// Created a Footer component with bootstrap styling that includes a copyright message and social media links
function Footer() {
  return (
    <>
    <footer class="footer mt-auto py-3 bg-light border-top border-3 fixed-bottom" id="border-shadow">
                 <div class="container-fluid text-center" >
                   <div class="row">
                      <div class="col-12 col-md d-flex justify-content-center">
                      <a class="text-dark mx-1" href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                      <a class="text-dark mx-1" href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                      <a class="text-dark mx-1" href="#"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
                      <a class="text-dark mx-1" href="#"><i class="fa fa-github" aria-hidden="true"></i></a>
                        </div>
                      <span class="text-dark fw-bold">&copy;FauxMart 2022</span>
                 </div>
                 </div>
             </footer>
    </>
  );
};

export default Footer