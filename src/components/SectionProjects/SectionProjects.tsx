import { useAppSelector } from '../../hooks/hooks';
import { selectProjects } from '../../redux/projectsSlice';
import Projects from './Projects';
import './SectionProjects.css';

const SectionProjects = () => {
  const projects = useAppSelector(selectProjects);

  return (
    <div className="section__projects">
      <div className="container">
        <div className="project__inner">
          <div className="inner__info">
            <h1 className="project__title">Recent Projects</h1>
            <p className="project__text">
              With tools to make every part of your process more human and a
              support team excited to help you, getting started with us never
              been easier.
            </p>
          </div>
          <div className="projects__items">
            {projects.map((project, index) => {
              return (
                <Projects
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

export default SectionProjects;
