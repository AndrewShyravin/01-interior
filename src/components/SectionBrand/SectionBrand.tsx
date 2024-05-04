import React from 'react';
import '../SectionBrand/SectionBrand.css';
import brand_1 from '../../image/brand-1.svg';
import brand_2 from '../../image/brand-2.svg';
import brand_3 from '../../image/brand-3.svg';
import brand_4 from '../../image/brand-4.svg';
import brand_5 from '../../image/brand-5.svg';

const SectionBrand = () => {
  return (
    <div className="section__brand">
      <div className="container">
        <div className="brand__inner">
          <img src={brand_1} alt="brand" />
          <img src={brand_2} alt="brand" />
          <img src={brand_3} alt="brand" />
          <img src={brand_4} alt="brand" />
          <img src={brand_5} alt="brand" />
        </div>
      </div>
    </div>
  );
};

export default SectionBrand;
