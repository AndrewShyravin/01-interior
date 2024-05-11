import { useAppSelector } from '../../hooks/hooks';
import { selectPrice } from '../../redux/priceSlice';
import PricingItem from './PricingItem';
import './PricingPlan.css';

const PricingPlan = () => {
  const prices = useAppSelector(selectPrice);
  return (
    <div className="pricing">
      <div className="container">
        <h1>Pricing Plan</h1>
        <div className="pricing__items">
          {prices.map((price, index) => (
            <PricingItem
              title={price.title}
              price={price.price}
              text={price.text}
              variants={price.variants}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
