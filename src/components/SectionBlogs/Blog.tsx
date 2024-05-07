import { useState } from 'react';
import React from 'react';
import { FunctionComponent } from 'react';
import { BlogType } from '../../types';
import './Blog.css';
import arrow from '../../image/arrow.svg';

const Blog: FunctionComponent<BlogType> = ({ photo, title, date }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };
  return (
    <div className="blogs__item">
      <img className='blogs__item-img' src={photo} alt="photo" />
      <h2 className="item__title">{title}</h2>
      <div className="item__date-button">
        <p className="item__date">{date}</p>
        <button onClick={openModal} className="blog__btn">
          <img src={arrow} alt="arrow" />
        </button>
        {isOpenModal && (
          <div className="modal__blogs">
            <div className="window__blogs">
              <img className='blogs__item-img' src={photo} alt="photo" />
              <h2 className="item__title">{title}</h2>
              <p className="item__date">{date}</p>
              <button onClick={closeModal} className="blog__btn">
                <img src={arrow} alt="arrow" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
