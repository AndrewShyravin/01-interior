import React from 'react';
import './FooterColums.css';

const FooterTable = () => {
  return (
    <div className="footer__top-colums">
      <div>
        <h1>Pages</h1>
        <p>
          <a href="#">Style Guide</a>
        </p>
        <p>
          <a href="#">Protected</a>
        </p>
        <p>
          <a href="#">Licenses</a>
        </p>
        <p>
          <a href="#">Changelog</a>
        </p>
        <p>
          <a href="#">404</a>
        </p>
      </div>
      <div>
        <h1>Explore</h1>
        <p>
          <a href="#">About Us</a>
        </p>
        <p>
          <a href="#">Recent Blog</a>
        </p>
        <p>
          <a href="#">Pricing Plan</a>
        </p>
        <p>
          <a href="#">Our Projects</a>
        </p>
        <p>
          <a href="#">Contact Us</a>
        </p>
      </div>
      <div>
        <h1>Contact</h1>
        <p>
          <a href="#">53, East Birchwood Ave. Brooklyn, New York 11201, USA.</a>
        </p>
        <p>
          <a href="mailto:contact@interno.com">contact@interno.com</a>
        </p>
        <p>
          <a href="tel:1234567890">(123) 456 - 7890</a>
        </p>
      </div>
    </div>
  );
};

export default FooterTable;
