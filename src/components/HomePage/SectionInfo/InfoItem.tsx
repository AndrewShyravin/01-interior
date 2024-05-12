import { Link } from 'react-router-dom';
import arrow_more from '../../../image/arrow-more.svg';
import './InfoItem.css';

type InfoItemProps = {
  title: string;
  text: string;
};

const InfoItem: React.FC<InfoItemProps> = ({ title, text }) => {
  return (
    <div className="info__item">
      <h2 className="info__title">{title}</h2>
      <p className="info__text">{text}</p>
      <Link to="pricing" className="info__link">
        View More
        <img src={arrow_more} alt="arrow" />
      </Link>
    </div>
  );
};

export default InfoItem;
