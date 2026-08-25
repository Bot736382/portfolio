import React from "react";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am currently a graduate master's student at Carnegie Mellon University, Pittsburgh, PA. I am pursuing the research track in the department of Mechanical Engineering (MSME-R)
            </p>
            <p className="lead-text">
              I completed my undergraduate studies from IIT Bombay, graduating with a Honors in the Department of Mechanical Engineering. My academic journey has been driven by a
              passion for robotics, autonomous systems, and computational methods.
            </p>
            <p>
              At IITB, I was researcher at the Autonomous Robots & Multi-robot Systems Lab under the guidance of Professor{" "}
              <a
                href="https://www.sc.iitb.ac.in/~asinha/Pages/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Arpita Sinha
              </a>{" "}
              and Late Professor{" "}
              <a
                href="https://sites.google.com/site/anirbanguha1/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                Anirban Guha
              </a>
              , working on real-time algorithms for
              autonomous mobile manipulators and decentralised reinforcement
              learning for path planning. I have also conducted research at the
              Technical University of Denmark on object detection for maritime
              vessel classification using YOLOv9.
            </p>
            {/* <p>
              Beyond academics, I am actively involved in student organizations
              including Krittika (Astronomy Club), ELIT mentorship program, and
              E-Cell IIT Bombay. I was also part of IITB Racing, where I worked
              on electrical systems and control algorithms for Formula Student
              competitions.
            </p> */}
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
