import { useAppSelector } from '../../../hooks/hooks';
import { selectPersons } from '../../../redux/personsSlice';
import People from './People';
import './SectionPeople.css';

const SectionPeople = () => {
  const persons = useAppSelector(selectPersons);

  return (
    <div className="section__people">
      <div className="container">
        <div className="people__inner">
          <div className="people__top">
            <h1 className="people__title">
              What the People Thinks About Interno
            </h1>
          </div>
          <div className="person__items">
            {persons.map((person, index) => {
              return (
                <People
                  photo={person.photo}
                  name={person.name}
                  city={person.city}
                  text={person.text}
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

export default SectionPeople;
