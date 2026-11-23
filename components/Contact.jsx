"use client";

import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setMessage("Thank you! Your message has been received.");

    e.target.reset();
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-heading">
        <p className="section-tag">✦ GET IN TOUCH</p>

        <h2>
          Let's Create
          <br />
          <span>Something Great.</span>
        </h2>

        <p>
          Have a project in mind? We'd love to hear from you.
          Let's work together and bring your ideas to life.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's Talk About Your Project</h3>

          <p>
            We are always excited to connect with creative people and businesses.
          </p>

          <div className="contact-detail">
            <span>Email</span>
            <p>hello@creativestudio.com</p>
          </div>

          <div className="contact-detail">
            <span>Location</span>
            <p>Chennai, India</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="userMessage">Your Message</label>
          <textarea
            id="userMessage"
            name="message"
            placeholder="Tell us about your project..."
            rows="5"
            required
          />

          <button type="submit">
            Send Message ↗
          </button>

          {message && (
            <p className="success-message" role="status">
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}