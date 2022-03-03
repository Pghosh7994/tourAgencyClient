import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Services from "../Services/Services";
import Banner from "./Banner/Banner";
import Policy from "./Policy/Policy";
import WhyUs from "./WhyUs/WhyUs";

const Home = () => {
  return (
    <div className="mt-3">
      <h1 className="mb-3 text-success">Welcome in
        <span class="text-warning ms-1">Tour</span>
        <span class="text-success">Plane</span>
      </h1>
      <Banner></Banner>
      <Services></Services>
      <Policy></Policy>
      <WhyUs></WhyUs>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
