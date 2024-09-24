import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Your Agency. All rights reserved.</p>
      <ul className="social-links">
        <li><a href="#">LinkedIn</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Instagram</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
