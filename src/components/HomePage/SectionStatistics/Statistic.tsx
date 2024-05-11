import React from 'react';
import './Statistic.css';

type StatisticProps = {
  title: string;
  text: string;
};

const Statistic: React.FC<StatisticProps> = ({ title, text }) => {
  return (
    <div className="statistic statistic-one">
      <h1 className="statistic__title">{title}</h1>
      <p className="statistic__text">{text}</p>
    </div>
  );
};

export default Statistic;
