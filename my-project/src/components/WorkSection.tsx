import React from 'react';
import './WorkSection.css';
import image from '../assets/image.png'; // Import the image

interface WorkItem {
  title: string;
  category: string;
  imageUrl: string;
}

const WorkSection: React.FC = () => {
  const workItems: WorkItem[] = [
    {
      title: "Lorem Ipsum",
      category: "Lorem",
      imageUrl: image // Use the imported image
    },
    {
      title: "Lorem Ipsum",
      category: "Lorem",
      imageUrl: image
    },
    {
      title: "Lorem Ipsum",
      category: "Lorem",
      imageUrl: image
    },
    {
      title: "Lorem Ipsum",
      category: "Lorem",
      imageUrl: image
    }
  ];

  return (
    <section className="work-section">
      <div className="work-container">
        <div className="work-header">
          <div className="work-title-wrapper">
            <h2 className="work-title-script">My Work</h2>
          </div>
        </div>
        
        <div className="work-grid">
          {workItems.map((item, index) => (
            <div className="work-item" key={index}>
              <div className="work-item-image">
                <img src={item.imageUrl} alt={item.title} />
                <div className="work-item-overlay">
                  <div className="work-item-content">
                    <span className="work-item-category">{item.category}</span>
                    <h3 className="work-item-title">{item.title}</h3>
                    <a href="#" className="work-item-link">
                      View Project
                      <span className="link-arrow">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-all-container">
          <a href="#" className="view-all-link">
            View All Projects
            <span className="link-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
