import React from 'react';
import Statistic from './Statistic';
import './SectionStatistics.css';

const SectionStatistics = () => {
  return (
    <div className="section__statistics">
      <div className="statistics__inner">
        <Statistic title={'12'} text={'Years Of Experiance'} />
        <Statistic title={'5K'} text={'Success Project'} />
        <Statistic title={'1K'} text={'Active Project'} />
        <Statistic title={'4K'} text={'Happy Customers'} />
      </div>
    </div>
  );
};

export default SectionStatistics;
