import FooterSociety from './FooterSociety';
import FooterColums from './FooterColums';
import './Footer.css';
import logo from '../../image/logo.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <img src={logo} alt="logo" />
            <p className="footer__top-text">
              We are the leading architect and interior design firm in the
              world.
            </p>
            <FooterSociety />
          </div>
          <FooterColums />
        </div>
      </div>
      <div className="footer__bottom">
        <p className="foooter__bottom-text">
          Copyright © Interno | Designed by <span>Victorflow</span> Templates -
          Powered by <span>Webflow</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
