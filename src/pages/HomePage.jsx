import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";

const HomePage = () => {
  return (
    <div className="page">
      <Hero />
      <About />
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
    </div>
  );
};

export default HomePage;
