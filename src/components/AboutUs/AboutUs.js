import React from "react";
// import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div class="mt-2 mb-2">
      <div class="w-75 mx-auto mt-5 mb-5">
        <h4 class="text-center">
          About
          <span class="text-warning">Tour</span>
          <span class="text-success">Plane</span>
        </h4>
        <hr class="w-25 bg-success mx-auto"></hr>
        <div class="card mb-4 border-0 mt-3">
          <div class="row g-0">
            <div class="col-md-6 col-sm-12 ">
              <img src="https://tj-web-prod.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2018/11/Manage-Your-Agency-with-The-Best-Tour-Travel-Software_1.png" class="img-fluid rounded mt-2" alt="img"></img>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="card-body text-start">
                <h5 class="card-title">
                  Discover
                  <span class="text-warning">Tour</span>
                  <span class="text-success">Plane</span>
                </h5>
                <p class="card-text"
                >We're one of the largest travel companies serving both commercial and residential clients. Our dedicated staff has the expertise to handle a project of any complexity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
