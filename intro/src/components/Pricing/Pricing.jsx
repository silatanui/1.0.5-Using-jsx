import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <section className="pricing">
      <div className="pricing-content">
        <h5>OUR PRICING</h5>
        <h2>Tailored pricing plans for everyone.</h2>
        <p>
          We are excited for our work and how it positively impacts clients.
          With over 12 years of experience, we have been constantly providing
          excellent solutions.
        </p>
        <button className="view-plans-btn">View All Plans →</button>
      </div>
      <div className="pricing-cards">
        <div className="pricing-card">
          <div className="card-header">
            <h3>Basic Plan</h3>
            <p className="price">$99.99 <span>/Monthly</span></p>
          </div>
          <p>And you spend over half of it on non-core functions like:</p>
          <ul>
            <li>✔ Great Customer Support</li>
            <li>✔ Market Growth Solution</li>
            <li>✔ Mobile Phone Optimized Ready</li>
            <li>✖ Free Custom Domain</li>
            <li>✖ Annual Purchase</li>
          </ul>
          <button className="get-started-btn">Get Started →</button>
        </div>

        <div className="pricing-card featured">
          <div className="card-header">
            <h3>Standard Plan</h3>
            <p className="price">$199.99 <span>/Monthly</span></p>
          </div>
          <p>And you spend over half of it on non-core functions like:</p>
          <ul>
            <li>✔ Great Customer Support</li>
            <li>✔ Market Growth Solution</li>
            <li>✔ Mobile Phone Optimized Ready</li>
            <li>✔ Free Custom Domain</li>
            <li>✔ Annual Purchase</li>
          </ul>
          <button className="get-started-btn">Get Started →</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
