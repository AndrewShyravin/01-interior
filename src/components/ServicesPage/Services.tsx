import ServicesItem from './ServicesItem';
import services from '../../utils/Services';
import services__bg from '../../image/services-bg.jpg';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <h1>Services</h1>
        <div className="services__inner">
          <div className="background__back"></div>
          <div className="services__img">
            <img src={services__bg} alt="" />
          </div>
          <div className="services__items">
            {services.map((service, index) => (
              <ServicesItem
                picture={service.picture}
                title={service.title}
                text={service.text}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
