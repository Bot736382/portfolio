import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-hero">
        <h2 className="contact-title">Let's Connect</h2>
        <p className="contact-subtitle">
          Have a question or want to collaborate? I'd love to hear from you.
        </p>
      </div>

      <div className="container">
        <div className="contact-content-wrapper">
          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="form-card">
              <h3>Send a Message</h3>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social */}
          <div className="contact-info-section">
            <div className="info-card">
              <h3>Contact Information</h3>
              <div className="info-items">
                <div className="info-item-modern">
                  <div className="icon-wrapper email-icon">
                    <span>✉</span>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:manangaurkar@iitb.ac.in">
                      manangaurkar@iitb.ac.in
                    </a>
                  </div>
                </div>

                <div className="info-item-modern">
                  <div className="icon-wrapper location-icon">
                    <span>📍</span>
                  </div>
                  <div>
                    <h4>Location</h4>
                    <p>Mumbai, India</p>
                  </div>
                </div>

                <div className="info-item-modern">
                  <div className="icon-wrapper institution-icon">
                    <span>🎓</span>
                  </div>
                  <div>
                    <h4>Institution</h4>
                    <p>IIT Bombay</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="social-card">
              <h3>Find Me Online</h3>
              <div className="social-grid">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <span className="social-icon-modern">in</span>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <span className="social-icon-modern">{"<>"}</span>
                  <span>GitHub</span>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <span className="social-icon-modern">𝕏</span>
                  <span>Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Manan Mehta</h3>
            <p>
              B.Tech in Mechanical Engineering (Minor in CSE) at IIT Bombay.
              Passionate about autonomous robotics, computer vision, and
              developing intelligent systems for real-world applications.
            </p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <div className="footer-links">
              <a href="/">Home</a>
              <a href="/education">Education</a>
              <a href="/research">Research</a>
              <a href="/projects">Projects</a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Connect</h3>
            <div className="footer-social">
              <a href="#" className="footer-social-icon" aria-label="LinkedIn">
                in
              </a>
              <a href="#" className="footer-social-icon" aria-label="GitHub">
                {"<>"}
              </a>
              <a href="#" className="footer-social-icon" aria-label="Scholar">
                📚
              </a>
              <a href="#" className="footer-social-icon" aria-label="Email">
                ✉
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Manan Mehta. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
