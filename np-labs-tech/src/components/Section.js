import React from 'react';
import './Section.css';

const Section = ({ title, content, image }) => {
  return (
    <section className="info-section">
      <h2>{title}</h2>
      <div className="section-content">
        <img src={image || 'https://via.placeholder.com/400'} alt={title} />
        <p>{content}</p>
      </div>
    </section>
  );
};

export default Section;
