import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faInstagramSquare, faFacebookSquare, faTiktok } from '@fortawesome/free-brands-svg-icons';
import '../styles/footer.scss';

const FooterMenu = () => (
  <div className="footer-menu-box">
    <div className="footer-text-links">
      <p className="footer-link">Site Info</p>
      <p className="footer-link">Profile</p>
      <p className="footer-link">Policy</p>
    </div>
    <div className="footer-icons">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitterSquare} className="footer-icon" /></a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagramSquare} className="footer-icon" /></a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTiktok} className="footer-icon" /></a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookSquare} className="footer-icon" /></a>
    </div>
  </div>
)

export default FooterMenu;
