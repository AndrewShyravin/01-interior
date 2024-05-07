import './FooterColums.css';
import { NavLink } from 'react-router-dom';

const FooterTable = () => {
  return (
    <div className="footer__top-colums">
      <div>
        <h1>Pages</h1>
        <p>
          <NavLink to=".">Style Guide</NavLink>
        </p>
        <p>
          <NavLink to=".">Protected</NavLink>
        </p>
        <p>
          <NavLink to=".">Licenses</NavLink>
        </p>
        <p>
          <NavLink to=".">Changelog</NavLink>
        </p>
        <p>
          <NavLink to=".">404</NavLink>
        </p>
      </div>
      <div>
        <h1>Explore</h1>
        <p>
          <NavLink to="/about">About Us</NavLink>
        </p>
        <p>
          <NavLink to=".">Recent Blog</NavLink>
        </p>
        <p>
          <NavLink to=".">Pricing Plan</NavLink>
        </p>
        <p>
          <NavLink to=".">Our Projects</NavLink>
        </p>
        <p>
          <NavLink to="/contact">Contact Us</NavLink>
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
