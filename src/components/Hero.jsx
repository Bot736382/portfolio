import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="name">Manan Mehta</span>
        </h1>
        <p className="hero-quote">"Stay hungry, stay foolish."</p>
        <p className="hero-quote-author">- Steve Jobs</p>
      </div>
      <div className="scroll-indicator">
        <div className="arrow-down">↓</div>
      </div>
    </section>
  );
};

export default Hero;
