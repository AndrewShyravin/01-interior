import { IoIosMail } from 'react-icons/io';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className="contact__form-info">
      <h1>Reach Us</h1>
      <ul>
        <li>
          <a href="#">
            <FaMapMarkerAlt />
            53, East Birchwood Ave. Brooklyn, New York 11201, USA.
          </a>
        </li>
        <li>
          <IoIosMail />
          <a href="mailto:contact@interno.com">contact@interno.com</a>
        </li>
        <li>
          <FaPhoneAlt />
          <a href="tel:1234567890">(123) 456 - 7890</a>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
