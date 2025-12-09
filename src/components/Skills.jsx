import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "C++", level: 85 },
        { name: "C", level: 85 },
        { name: "MATLAB", level: 80 },
        { name: "HTML", level: 75 },
      ],
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { name: "PyTorch", level: 85 },
        { name: "TensorFlow", level: 80 },
        { name: "NumPy", level: 90 },
        { name: "Pandas", level: 85 },
        { name: "Matplotlib", level: 85 },
        { name: "SciPy", level: 80 },
      ],
    },
    {
      category: "Software & Tools",
      skills: [
        { name: "ROS", level: 85 },
        { name: "Docker", level: 75 },
        { name: "Autodesk Fusion 360", level: 80 },
        { name: "Autodesk EAGLE", level: 85 },
        { name: "LaTeX", level: 90 },
        { name: "Arduino", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
