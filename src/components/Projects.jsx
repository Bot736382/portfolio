import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Pose Estimation and Control of Turtlebot",
      category: "Course Project",
      description:
        "Implemented Extended Kalman Filter (EKF) to estimate 2D pose of a robot. Used trilateration from three landmarks in Gazebo simulation and implemented closed-loop feedback control for trajectory tracking.",
      technologies: ["Python", "ROS", "Gazebo", "EKF"],
      links: {
        github: "https://github.com/Bot736382/SC649_Turtlebot",
        site: null,
      },
    },
    {
      title: "CFD Solver for Lid-Driven Cavity Flow",
      category: "Course Project",
      description:
        "Developed a 2D incompressible Navier-Stokes solver using Finite Volume Method. Implemented Central Difference Scheme for discretization and optimized pressure solver via LU factorization.",
      technologies: ["MATLAB", "Python", "NumPy", "FVM"],
      links: {
        github: "#",
        site: null,
      },
    },
    {
      title: "UAV Design for Mars Operations",
      category: "Course Project",
      description:
        "Designed conceptual UAV model for Mars based on NASA's Ingenuity Rover. Optimized airfoil and wing structures increasing payload capacity by 173% and flight time by 124%. Achieved horizontal flight speeds up to 12m/s.",
      technologies: ["MATLAB", "CAD", "Aerodynamics"],
      links: {
        github: "#",
        site: null,
      },
    },
    {
      title: "Microdroplet Generator",
      category: "Research Project",
      description:
        "Manufactured PDMS master device using micro-milling to create millipede-style microdroplet generator. Achieved 12,000+ 1 microlitre droplets from immiscible fluids (water and HFE7500).",
      technologies: ["CAD", "FDM 3D Printing", "Micro-milling", "SLA"],
      links: {
        github: "https://github.com/Bot736382/Microdroplet_Generator/tree/main",
        site: null,
      },
    },
    {
      title: "Pressure Field Prediction in Fluids",
      category: "Machine Learning Project",
      description:
        "Built ML model to predict pressure fields using 15,000+ velocity data points from RANS equations. Achieved 95% accuracy with Multi-Layer Perceptron having 5 hidden layers and 1800+ parameters.",
      technologies: ["Python", "TensorFlow", "NumPy", "Pandas"],
      links: {
        github: "#",
        site: null,
      },
    },
    {
      title: "IITB Racing - Formula Student Electric Car",
      category: "Team Project",
      description:
        "Part of 36-member team that secured Overall Winners in Electric Category. Formulated torque control algorithms including torque vectoring and traction control. Designed BMS PCB system with SPI communication.",
      technologies: ["C++", "Autodesk EAGLE", "Arduino", "CAN"],
      links: {
        github: null,
        site: "https://www.iitbracing.org/",
      },
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-category">{project.category}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.links.github && project.links.github !== "#" && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub
                  </a>
                )}
                {project.links.demo && project.links.demo !== "#" && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Demo
                  </a>
                )}
                {project.links.paper && project.links.paper !== "#" && (
                  <a
                    href={project.links.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Paper
                  </a>
                )}
                {project.links.report && project.links.report !== "#" && (
                  <a
                    href={project.links.report}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Report
                  </a>
                )}
                {project.links.site && project.links.site !== "#" && (
                  <a
                    href={project.links.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Site
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
