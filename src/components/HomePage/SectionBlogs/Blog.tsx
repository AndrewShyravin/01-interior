import { FunctionComponent } from 'react';
import { BlogType } from '../../../types';
import './Blog.css';
import arrow from '../../../image/arrow.svg';
import { Link } from 'react-router-dom';

const Blog: FunctionComponent<BlogType> = ({ photo, title, date }) => {
  return (
    <div className="blogs__item">
      <img className="blogs__item-img" src={photo} alt="photo" />
      <h2 className="item__title">{title}</h2>
      <div className="item__date-button">
        <p className="item__date">{date}</p>
        <Link to="recentblog">
          <button className="blog__btn">
            <img src={arrow} alt="arrow" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
