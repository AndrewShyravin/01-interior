import React from 'react';
import InfoItem from './InfoItem';
import './SectionInfo.css';

const SectionInfo = () => {
  return (
    <div className="section__info">
      <div className="container">
        <div className="info__inner">
          <InfoItem
            title={'Interior Design'}
            text={
              'Enhancing the interior to achieve a healthier environment for the people using right space.'
            }
          />
          <InfoItem
            title={'Furniture'}
            text={
              'Movable articles that are used to make a room or building suitable for living or working.'
            }
          />
          <InfoItem
            title={'Flooring'}
            text={
              'Thin object any finished material applied over a floor structure to provide a walking surface'
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SectionInfo;
