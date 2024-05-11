import { PriceType } from '../../types';
import { GrStatusGood } from 'react-icons/gr';
import './PricingItem.css';
import { Link } from 'react-router-dom';

const PricingItem: React.FC<PriceType> = ({ title, price, text, variants }) => {
  return (
    <div className="pricing__item">
      <h3 className="pricing__item-title">{title}</h3>
      <p className="pricing__item-price">{price}</p>
      <p className="pricing__item-text">{text}</p>
      <ul className="pricing__item-variants">
        <li>
          <GrStatusGood className="pricing__item-icon" />
          {variants[0]}
        </li>
        <li>
          <GrStatusGood className="pricing__item-icon" />
          {variants[1]}
        </li>
        <li>
          <GrStatusGood className="pricing__item-icon" />
          {variants[2]}
        </li>
        <li>
          <GrStatusGood className="pricing__item-icon" />
          {variants[3]}
        </li>
        <li>
          <GrStatusGood className="pricing__item-icon" />
          {variants[4]}
        </li>
        <li>
          {variants[5] ? (
            <>
              <GrStatusGood className="pricing__item-icon" /> {variants[5]}
            </>
          ) : (
            ''
          )}
        </li>
      </ul>
      <Link to="/contact">
        <button className="pricing__item-btn">Choose package</button>
      </Link>
    </div>
  );
};

export default PricingItem;
