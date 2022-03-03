import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container className="text-white mt-5">
      <div class="mb-0 bg-light w-100">
        <div class="bg-light text-dark ms-4 me-4">
          <div class="pt-4 text-success row row-cols-lg-3 row-cols-1">
            <div class="text-success mb-2 col">
              <h5 class="fw-bold">
                {/* <img alt="logo" src="../../image/logo.png" width="50"></img> */}
                <span class="text-warning ms-1">Tour</span>
                <span class="text-success">Plane</span>
              </h5>
              <p>House #6 , Road-2</p>
              <p>Gandaria,Dhaka-1100</p>
              <p>Bangladesh</p>
            </div>
            <div class="text-success mb-2 col">
              <h5 class="fw-bold text-warning">Services</h5>
              <p><i class="fas fa-plane-departure me-2" aria-hidden="true">
              </i>Booking Ticket</p>
              <p>
                <i class="fas fa-globe-asia me-2" aria-hidden="true"></i>
                Planning Tours
              </p>
              <p>
                <i class="fas fa-medkit me-2" aria-hidden="true"></i>
                Travel Insurance
              </p>
              <p>
                <i class="fas fa-hand-holding-usd me-2" aria-hidden="true"></i>
                Best Price Guarantee
              </p>
            </div>
            <div class="text-success mb-2 col">
              <h5 class="fw-bold text-warning">CONTACT</h5>
              <p class="text-success">
                <i class="fas fa-phone-alt" aria-hidden="true"></i>
                01634567129</p>
              <p class="text-success">
                <i class="far fa-envelope" aria-hidden="true"></i>
                tour_plane@gmail.com</p>
              <p>24 hours (seven days a week)</p>
            </div>
          </div>
        </div>
        <hr class="bg-success w-75 mx-auto"></hr>
        <div class="container">
          <div class="mt-1 row">
            <div class="pb-1 col text-center">
              <small class="text-success">Copyright
                <i class="far fa-copyright text-success" aria-hidden="true">
                </i>
                2022 by <span class="text-warning">
                  Tour</span>Plane.</small>
            </div>
          </div>
        </div>
      </div>
    </Container>

  );
};

export default Footer;
