import React from "react";
import "./ContactSection.css";


const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card">
            <h4>Mailing Address</h4>
            <p>901 N Pitt Str., Suite 170<br />Alexandria, USA</p>
          </div>
          <div className="info-card">
            <h4>Quick Contact</h4>
            <p>+91 0256 201 003<br />+41 0003 5569 04</p>
          </div>
          <div className="info-card">
            <h4>Support Email</h4>
            <p>contact@rentxsupport.com<br />info@rentol.com</p>
          </div>
        </div>
        <div className="contact-form-section">
          <div className="contact-image">
            <img src='https://cdn.leonardo.ai/users/c1f6f8a6-26f6-465f-b33b-193bcfa9466d/generations/d740aad1-ac38-4a65-81f4-280a1a70a118/Leonardo_Phoenix_09_A_stunning_young_woman_with_a_flawless_hea_3.jpg' alt="Person working on laptop" />
          </div>
          <form className="contact-form">
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email Address" required />
            <select name="subject" required>
              <option value="">Select Subject</option>
              <option value="general">General Inquiry</option>
              <option value="support">Support</option>
              <option value="feedback">Feedback</option>
            </select>
            <textarea
              name="message"
              rows="4"
              placeholder="Write Message..."
              required
            ></textarea>
            <button type="submit" className="send-message-btn">
              SEND MESSAGE <span>&rarr;</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
