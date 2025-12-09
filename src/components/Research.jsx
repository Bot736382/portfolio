import React from "react";

const Research = () => {
  const researchAreas = [
    {
      title: "Autonomous Robotics & Multi-robot Systems",
      description:
        "Designing real-time algorithms for autonomous mobile manipulators and decentralised reinforcement learning for efficient path planning in cluttered environments",
    },
    {
      title: "Computer Vision & Deep Learning",
      description:
        "Developing YOLOv9-based object detection pipelines for maritime vessel classification with transfer learning and optimization techniques",
    },
    {
      title: "Control Systems & Mechatronics",
      description:
        "Implementing torque control algorithms, traction control, and Electronic Control Units (ECU) for electric race cars and autonomous systems",
    },
  ];

  const publications = [
    {
      title: "Autonomous Robots & Multi-robot Systems Lab",
      authors: "Manan Mehta, Advisor: Prof. Arpita Sinha",
      venue: "IIT Bombay, Jun 2025 - Ongoing",
      status: "Ongoing",
      link: "#",
    },
    {
      title: "Maritime Vessel Classification using YOLOv9",
      authors: "Manan Mehta, Advisor: Assoc. Prof. Roberto Galeazzi",
      venue: "Technical University of Denmark, Mar-Jun 2025",
      status: "Completed",
      link: "#",
    },
  ];

  return (
    <section id="research" className="research">
      <div className="container">
        <h2 className="section-title">Research</h2>

        <div className="research-interests">
          <h3 className="subsection-title">Research Interests</h3>
          <div className="interests-grid">
            {researchAreas.map((area, index) => (
              <div key={index} className="interest-card">
                <div className="interest-icon">🔬</div>
                <h4>{area.title}</h4>
                <p>{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="publications">
          <h3 className="subsection-title">Publications & Presentations</h3>
          <div className="publications-list">
            {publications.map((pub, index) => (
              <div key={index} className="publication-item">
                <div className="pub-header">
                  <h4>{pub.title}</h4>
                  <span
                    className={`pub-status status-${pub.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {pub.status}
                  </span>
                </div>
                <p className="pub-authors">{pub.authors}</p>
                <p className="pub-venue">{pub.venue}</p>
                {pub.link !== "#" && (
                  <a
                    href={pub.link}
                    className="pub-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Paper →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
