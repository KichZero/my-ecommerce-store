
import React from 'react';
import '../styles/footer.css' 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="/public/Logowhite.svg" alt="Logo" />
      </div>
      <hr className="footer-divider" />
      <div className="footer-sections">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Address</p>
          <p>Phone</p>
          <p>Email</p>
        </div>
        <div className="footer-section">
          <h4>Information</h4>
          <p>Shipping & Returns</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>FAQ</p>
        </div>
        <div className="footer-section">
          <h4>Social Media</h4>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 “UPDATE”. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
