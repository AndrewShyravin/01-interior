import { useAppSelector } from '../../hooks/hooks';
import { selectProjects } from '../../redux/projectsSlice';
import ProjectsItem from './ProjectsItem';
import './ProjectsPage.css';

const ProjectsPage = () => {
  const projects = useAppSelector(selectProjects);

  return (
    <div className="projects__page">
      <div className="container">
        <div className="project__inner">
          <div className="inner__info">
            <h1 className="project__title">Our Projects</h1>
          </div>
          <div className="projects__items">
            {projects.map((project, index) => {
              return (
                <ProjectsItem
                  title={project.title}
                  photo={project.photo}
                  text={project.text}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
