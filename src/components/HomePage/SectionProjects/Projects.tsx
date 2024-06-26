import { ProjectType } from '../../../types';
import { Link } from 'react-router-dom';
import arrow from '../../../image/arrow.svg';
import './Projects.css';

const Projects: React.FC<ProjectType> = ({ photo, title, text }) => {
  return (
    <div className="projects__item">
      <img className="projects__item-img" src={photo} alt="photo" />
      <div className="projects__bottom">
        <div className="project__item-text">
          <p className="item__title">{title}</p>
          <p className="item__text">{text}</p>
        </div>
        <Link to="/projects">
          <button className="project__btn">
            <img src={arrow} alt="arrow" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
