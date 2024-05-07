import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import './ContactUs.css';

const ContatcUs = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact__text">
          <h1>Contact Us</h1>
          <p>Drop up a message and we'll get back to you</p>
        </div>
        <div className="contact__inner">
          <div className="contact__form">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContatcUs;
