import './FooterSociety.css';
import facebook from '../../image/facebook.svg';
import twitter from '../../image/twitter.svg';
import int from '../../image/in.svg';
import instagram from '../../image/instagram.svg';

const FooterSociety = () => {
  return (
    <div className="footer__society">
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={facebook} alt="facebook" />
      </a>
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={twitter} alt="twitter" />
      </a>
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={int} alt="linkedin" />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={instagram} alt="instagram" />
      </a>
    </div>
  );
};

export default FooterSociety;
