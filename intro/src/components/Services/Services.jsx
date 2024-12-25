import React from "react";
import "./Services.css";
import illustration1 from "./1.webp";
import illustration2 from "./2.webp";
import illustration3 from "./3.png";

const Services = () => {
  return (
    <section className="services">
      <h5>OUR SERVICES</h5>
      <h2>Explore All Our Presentation Digital Services</h2>
      <div className="service-cards">
        <div className="service-card">
          <div className="service-content">
            <h3>Database Security</h3>
            <p>In Order To Scale New Customer</p>
            <button className="explore-btn">Explore Now →</button>
          </div>
          <div className="service-image">
            <img
              src={illustration1}
              alt="Database Security"
            />
          </div>
        </div>

        <div className="service-card featured">
          <div className="service-content">
            <h3>Brand Design Identity</h3>
            <p>In Order To Scale New Customer</p>
            <button className="explore-btn">Explore Now →</button>
          </div>
          <div className="service-image">
            <img
              src={illustration2}
              alt="Brand Design Identity"
            />
          </div>
        </div>

        <div className="service-card">
          <div className="service-content">
            <h3>Web App Development</h3>
            <p>In Order To Scale New Customer</p>
            <button className="explore-btn">Explore Now →</button>
          </div>
          <div className="service-image">
            <img
              src={illustration3}
              alt="Web App Development"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
