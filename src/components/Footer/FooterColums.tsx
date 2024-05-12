import './FooterColums.css';
import { Link } from 'react-router-dom';

const FooterTable = () => {
  return (
    <div className="footer__top-colums">
      <div>
        <h1>Pages</h1>
        <p>
          <Link to="pages">Style Guide</Link>
        </p>
        <p>
          <Link to="pages/protected">Protected</Link>
        </p>
        <p>
          <Link to="pages/licenses">Licenses</Link>
        </p>
        <p>
          <Link to="pages/news">News</Link>
        </p>
        <p>
          <Link to="pages/notfound">404</Link>
        </p>
      </div>
      <div>
        <h1>Explore</h1>
        <p>
          <Link to="/about">About Us</Link>
        </p>
        <p>
          <Link to="/recentblog">Recent Blog</Link>
        </p>
        <p>
          <Link to="/pricing">Pricing Plan</Link>
        </p>
        <p>
          <Link to="/projects">Our Projects</Link>
        </p>
        <p>
          <Link to="/contact">Contact Us</Link>
        </p>
      </div>
      <div>
        <h1>Contact</h1>
        <p>
          <Link to="/contact">
            53, East Birchwood Ave. Brooklyn, New York 11201, USA.
          </Link>
        </p>
        <p>
          <Link to="mailto:contact@interno.com">contact@interno.com</Link>
        </p>
        <p>
          <Link to="tel:1234567890">(123) 456 - 7890</Link>
        </p>
      </div>
    </div>
  );
};

export default FooterTable;
