import design_img from '../../../image/design-img.png';
import phone from '../../../image/phone.svg';
import btn__arrow from '../../../image/arrow-btn.svg';
import { Link } from 'react-router-dom';
import './SectionDesign.css';

const SectionDesign = () => {
  return (
    <div className="section__design">
      <div className="container">
        <div className="design__inner">
          <div className="design__info">
            <h1 className="design__title">
              We Tackle The Most Challenging Designs
            </h1>
            <p className="design__text">
              The world needs innovators and problem solvers who turn challenges
              into greater opportunities. We have an insatiable curiosity about
              transformative trends challenging the status.
            </p>
            <div className="contacts">
              <div className="contacts__img">
                <img src={phone} alt="phone" />
              </div>
              <div className="contacts__info">
                <a href="tel:+012345678">012345678</a>
                <span>Call Us Anytime</span>
              </div>
            </div>
            <Link to="/contact">
              <button className="design__btn">
                Get Free Estimate
                <img src={btn__arrow} alt="arrow" />
              </button>
            </Link>
          </div>
          <div>
            <img src={design_img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionDesign;
