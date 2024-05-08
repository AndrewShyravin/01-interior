import { useAppSelector } from '../../hooks/hooks';
import { selectTeam } from '../../redux/teamSlice';
import './AboutUs.css';
import TeamItem from './TeamItem';

const AboutUs = () => {
  const team = useAppSelector(selectTeam);
  return (
    <div className="about">
      <div className="container">
        <h1 className="about__title">AboutUs</h1>
        <div className="about__company">
          <h1 className="about__company-title">About the company</h1>
          <p className="about__company-text">
            Welcome to Interior, where innovation meets elegance in the realm of
            interior design. With a passion for creating captivating spaces that
            inspire and delight, our studio prides itself on delivering
            exceptional design solutions that surpass expectations.
            <br />
            At Interior, we believe that every space has the potential to tell a
            story, and our team of talented designers is dedicated to bringing
            your unique vision to life. From luxurious residences to chic
            commercial spaces, we specialize in crafting environments that
            reflect your individual style and personality. <br /> With a keen
            eye for detail and a commitment to quality craftsmanship, we work
            closely with each client to understand their needs, preferences, and
            lifestyle. Whether you're seeking a modern minimalist aesthetic or a
            timeless classic design, our team will collaborate with you every
            step of the way to ensure a seamless and satisfying design
            experience. <br />
            From concept development and space planning to furniture selection
            and styling, we offer a comprehensive range of services to meet your
            design needs. Our goal is to create spaces that not only look
            beautiful but also function effortlessly, enhancing your daily life
            and bringing joy to your surroundings. Experience the transformative
            power of exceptional design with Interior. Let us help you turn your
            dreams into reality and create spaces that truly inspire.
          </p>
        </div>
        <div className="team__company">
          <h1 className="team__title">Our team</h1>
          <p className="team__text">
            Meet our talented team of interior designers! With a passion for
            creativity and a keen eye for detail, our designers are dedicated to
            transforming spaces into captivating works of art. From
            conceptualization to execution, each member of our team brings a
            unique perspective and expertise to every project. Together, we
            collaborate seamlessly to deliver exceptional designs that exceed
            expectations. Let us bring your vision to life!
          </p>
          <div className="team__container">
            <div className="team__items">
              {team.map((team, index) => {
                return (
                  <TeamItem
                    name={team.name}
                    profession={team.profession}
                    photo={team.photo}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
