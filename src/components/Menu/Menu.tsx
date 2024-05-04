import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';
import logo from '../../image/logo.svg';

const Header = () => {
  return (
    <>
      <div className="container">
        <nav className="nav">
          <NavLink to=".">
            <img src={logo} />
          </NavLink>
          <ul className="menu__list">
            <li className="menu__item">
              <NavLink to="." end className="menu__link">
                Home
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink to="about" className="menu__link">
                About Us
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink to="services" className="menu__link">
                Services
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink to="pages" className="menu__link">
                Pages
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink to="contact" className="menu__link">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
