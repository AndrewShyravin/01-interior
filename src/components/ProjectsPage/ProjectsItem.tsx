import { ProjectType } from '../../types';
import arrow from '../../image/arrow.svg';
import './ProjectsItem.css';

const ProjectsItem: React.FC<ProjectType> = ({ photo, title, text }) => {
  return (
    <div className="projects__item">
      <img className="projects__item-img" src={photo} alt="photo" />
      <div className="projects__bottom">
        <div className="project__item-text">
          <p className="item__title">{title}</p>
          <p className="item__text">{text}</p>
        </div>
        <button className="project__btn">
          <a href="#">
            <img src={arrow} alt="arrow" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectsItem;
