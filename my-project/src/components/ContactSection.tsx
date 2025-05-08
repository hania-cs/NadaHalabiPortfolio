import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend or email service
    alert('Thank you for your message. I will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <div className="contact-title-wrapper">
            <h2 className="contact-title-main">Contact Me</h2>
          </div>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="info-title">Let's create something beautiful together</h3>
            <p className="info-text">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="detail-icon location-icon"></div>
                <div className="detail-text">
                  <h4>Location</h4>
                  <p>Bshamoun, Lebanon</p>
                </div>
              </div>
              
              <div className="contact-detail-item">
                <div className="detail-icon email-icon"></div>
                <div className="detail-text">
                  <h4>Email</h4>
                  <p>hello@yourname.com</p>
                </div>
              </div>
              
              <div className="contact-detail-item">
                <div className="detail-icon phone-icon"></div>
                <div className="detail-text">
                  <h4>Phone</h4>
                  <p>+961 78 933 467</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <a href="#" className="social-link instagram"></a>
              <a href="#" className="social-link linkedin"></a>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  value={formData.message} 
                  onChange={handleChange}
                  required 
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Send Message
                <span className="btn-arrow">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;