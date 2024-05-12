import { BlogType } from '../../types';
import arrow from '../../image/arrow.svg';
import './BlogsItem.css';

const BlogsItem: React.FC<BlogType> = ({ photo, title, date }) => {
  return (
    <div className="blogs__item">
      <img className="blogs__item-img" src={photo} alt="photo" />
      <h2 className="item__title">{title}</h2>
      <div className="item__date-button">
        <p className="item__date">{date}</p>
        <button className="blog__btn">
          <img src={arrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default BlogsItem;
