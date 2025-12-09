import React from "react";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="lead-text">
              I am an undergraduate student at IIT Bombay, pursuing a B.Tech in
              Mechanical Engineering with a Minor in Computer Science &
              Engineering with Honors. My academic journey has been driven by a
              passion for robotics, autonomous systems, and computational
              methods.
            </p>
            <p>
              Currently, I am a researcher at the Autonomous Robots &
              Multi-robot Systems Lab, working on real-time algorithms for
              autonomous mobile manipulators and decentralised reinforcement
              learning for path planning. I have also conducted research at the
              Technical University of Denmark on object detection for maritime
              vessel classification using YOLOv9.
            </p>
            <p>
              Beyond academics, I am actively involved in student organizations
              including Krittika (Astronomy Club), ELIT mentorship program, and
              E-Cell IIT Bombay. I was also part of IITB Racing, where I worked
              on electrical systems and control algorithms for Formula Student
              competitions.
            </p>
            {/* <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-number">6+</span>
                <span className="highlight-label">Research Projects</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">99.20</span>
                <span className="highlight-label">JEE Percentile</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">DTU</span>
                <span className="highlight-label">Exchange Semester</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
