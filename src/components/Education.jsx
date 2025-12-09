import React from "react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Mechanical Engineering (Minor in CSE with Honors)",
      institution: "Indian Institute of Technology Bombay",
      location: "Mumbai, India",
      period: "2022 - Present",
      description:
        "Pursuing a Minor degree in Computer Science & Engineering with Honors in Mechanical Engineering",
      achievements: [
        "Selected for semester exchange to Technical University of Denmark (DTU) for Spring '24-'25",
        "Secured 99.20 percentile in JEE Advanced (top 0.16 million candidates)",
        "Earned AP Scholar with perfect scores (5/5) in 3 AP exams",
        "Selected for Indian National Math Olympiad (INMO) from Mumbai Region",
      ],
    },
    {
      degree: "Exchange Semester",
      institution: "Technical University of Denmark (DTU)",
      location: "Copenhagen, Denmark",
      period: "Spring 2024-2025",
      description:
        "Semester exchange program focusing on advanced engineering and robotics",
      achievements: [
        "Completed coursework in CFD, UAV Design, and Advanced Control Systems",
        "Conducted research on maritime vessel classification using deep learning",
        "Collaborated with international research teams on autonomous systems",
      ],
    },
    {
      degree: "Higher Secondary Certificate (HSC) - 12th Grade",
      institution: "Alpha Junior College of Science and Commerce",
      location: "Mumbai, India",
      period: "2022",
      description: "Intermediate education with focus on Science stream",
      achievements: [
        "Secured 96.17% in HSC examinations",
        "Earned AP Scholar with perfect scores (5/5) in 3 AP exams",
        "Strong foundation in Physics, Chemistry, and Mathematics",
      ],
    },
    {
      degree: "Secondary School Certificate (SSC) - 10th Grade",
      institution: "The Somaiya School (CBSE)",
      location: "Mumbai, India",
      period: "2020",
      description: "Matriculation with comprehensive academic foundation",
      achievements: [
        "Secured 96.40% in CBSE examinations",
        "Selected for Indian National Math Olympiad (INMO) from Mumbai Region",
        "Excelled in Mathematics and Sciences",
      ],
    },
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{edu.degree}</h3>
                  <span className="timeline-period">{edu.period}</span>
                </div>
                <h4 className="institution">{edu.institution}</h4>
                <p className="location">{edu.location}</p>
                <p className="description">{edu.description}</p>
                <ul className="achievements">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
