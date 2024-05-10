import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import './PageMenu.css';
import { useState } from 'react';

const PageMenu = () => {
  const [showMenu, setShowMenu] = useState(true);
  const hideMenuHandler = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <div className="page__menu">
      <nav>
        <div className="nav__inner">
          <div className="pagemenu__list">
            <ul className={showMenu ? 'page__ul' : 'page__ul-hide'}>
              <li>
                <Link to=".">Style Guide</Link>
              </li>
              <li>
                <Link to="protected">Protected</Link>
              </li>
              <li>
                <Link to="licenses">Licenses</Link>
              </li>
              <li>
                <Link to="news">News</Link>
              </li>
              <li>
                <Link to="*">404</Link>
              </li>
            </ul>
          </div>
          <div>
            {showMenu ? (
              <IoIosArrowBack onClick={hideMenuHandler} />
            ) : (
              <IoIosArrowForward onClick={hideMenuHandler} />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default PageMenu;
