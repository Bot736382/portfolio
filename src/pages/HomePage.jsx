import React from "react";
import { Link } from "react-router-dom";
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
              B.Tech with Honors in Mechanical Engineering at IIT Bombay.
              Passionate about autonomous robotics, computer vision, and
              developing intelligent systems for real-world applications.
            </p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/education">Education</Link>
              <Link to="/research">Research</Link>
              <Link to="/projects">Projects</Link>
            </div>
          </div>

          <div className="footer-section">
            <h3>Connect</h3>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/manan-k-mehta/" className="footer-social-icon" aria-label="LinkedIn">
                in
              </a>
              <a href="https://github.com/Bot736382" className="footer-social-icon" aria-label="GitHub">
                {"<>"}
              </a>
              {/* <a href="#" className="footer-social-icon" aria-label="Scholar">
                📚
              </a> */}
              <a href="mailto:mananmehta2107@gmail.com" className="footer-social-icon" aria-label="Email">
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
