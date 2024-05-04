import React from 'react';
import './Page.css';

type PageProps = {
  title: string;
  text: string;
};

const Page: React.FC<PageProps> = ({ title, text }) => {
  return (
    <div className="page">
      <h1 className="page__title">{title}</h1>
      <p className="page__text">{text}</p>
    </div>
  );
};

export default Page;
