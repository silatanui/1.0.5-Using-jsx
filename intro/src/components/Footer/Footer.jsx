import React from 'react';
import './Footer.css'; // Include your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="top-banner">
        <p>Find the Greatest Supplier of Business Services and Solutions.</p>
        <button>GET IN TOUCH</button>
      </div>
      <div className="footer-section">
        <div className="company-info">
            <h2>Growub</h2>
            <p>Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a lacinia curabitur lacinia mollis.</p>
            <br /><br />
            <div className="social-media">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
        </div>
        <div className="quick-links">
            <h3>Growub About</h3>
            <a href="#services">Our Services</a>
            <a href="#blogs">Our Blogs</a>
            <a href="#faq">FAQ'S</a>
            <a href="#contact">Contact Us</a>
        </div>
        <div className="recent-posts">
            <h3>Recent Posts</h3>
            <p>08 August, 2024 - Top 5 Most Famous Technology Trend In 2024</p>
            <p>15 Dec, 2024 - The Surfing Man Will Blow Your Mind</p>
        </div>
        <div className="contact-us">
            <p>Email: info@example.com</p>
            <p>Phone: +208-6666-0112</p>
            <input type="email" placeholder="Enter your email" />
            <label>
            <input type="checkbox" /> I agree to the Privacy Policy
            </label>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© All Copyright 2024 by Growub</p>
        <a href="#terms">Terms & Condition</a>
        <a href="#privacy">Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer;
