import { Link } from 'react-router-dom';
import './ServicesItem.css';

type ServicesItemProps = {
  picture: any;
  title: string;
  text: string;
};

const ServicesItem: React.FC<ServicesItemProps> = ({
  picture,
  title,
  text,
}) => {
  return (
    <div className="services__item">
      <img className="services__item-img" src={picture} alt="picture" />
      <p className="services__item-title">{title}</p>
      <p className="services__item-text">{text}</p>
      <Link to="/contact">
        <button className="services__item-btn">More</button>
      </Link>
    </div>
  );
};

export default ServicesItem;
