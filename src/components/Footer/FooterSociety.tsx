import React from 'react';
import './FooterSociety.css';
import facebook from '../../image/facebook.svg';
import twitter from '../../image/twitter.svg';
import int from '../../image/in.svg';
import instagram from '../../image/instagram.svg';

const FooterSociety = () => {
  return (
    <div className="footer__society">
      <a href="#">
        <img src={facebook} alt="" />
      </a>
      <a href="#">
        <img src={twitter} alt="" />
      </a>
      <a href="#">
        <img src={int} alt="" />
      </a>
      <a href="#">
        <img src={instagram} alt="" />
      </a>
    </div>
  );
};

export default FooterSociety;
