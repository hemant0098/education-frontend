import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} EduSite. All rights reserved.</p>
      <div className="social-links">
        <a href="#">Facebook</a> | <a href="#">Instagram</a> | <a href="#">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
