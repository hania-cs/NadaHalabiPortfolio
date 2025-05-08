import React from 'react';
import './AboutSection.css';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
}
interface EducationItem {
    School: string;
    Major: string;
    period: string;
  }

const AboutSection: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "Monty Mobile",
      role: "Internship",
      period: "mon 2021 - mon 2022"
    },
    {
      company: "lorem ipsum",
      role: "lorem ipsum",
      period: "mon 2022 - mon 2024"
    },
   
  ];
  const Education: EducationItem[] = [
    {
      School: "Modern University for Business and Science",
      Major: "Graphic Design",
      period: "Oct 2022 - Present"
    },
   
   
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2 className="greeting">
            <span className="greeting-hi">Hi, I'm </span>
            <span className="greeting-name">Nada</span>
          </h2>
          
          <div className="about-description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate est cum nobis optio veniam voluptates quasi repudiandae consequatur sunt provident, voluptate iusto totam. Reiciendis accusamus magnam nesciunt laudantium totam et.
            </p>
          </div>
        </div>
        
        <div className="about-content">
          <div className="experience-section">
            <h3 className="section-title">
              <span className="title-text">Experience</span>
              <div className="title-line"></div>
            </h3>
            
            <div className="experience-list">
              {experiences.map((exp, index) => (
                <div className="experience-item" key={index}>
                  <h4 className="company-name">{exp.company}</h4>
                  <p className="role-title">{exp.role}</p>
                  <p className="period">{exp.period}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="experience-section">
            <h3 className="section-title">
              <span className="title-text">Education</span>
              <div className="title-line"></div>
            </h3>
            
            <div className="experience-list">
              {Education.map((edu, index) => (
                <div className="experience-item" key={index}>
                  <h4 className="company-name">{edu.School}</h4>
                  <p className="role-title">{edu.Major}</p>

                  <p className="period">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>
          
          
            </div>
        
        </div>

    </section>
  );
};

export default AboutSection;