import { IoIosMail } from 'react-icons/io';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className="contact__form-info">
      <h1>Reach Us</h1>
      <ul>
        <li>
          <Link to="/contact">
            <FaMapMarkerAlt />
            53, East Birchwood Ave. Brooklyn, New York 11201, USA.
          </Link>
        </li>
        <li>
          <IoIosMail />
          <Link to="mailto:contact@interno.com">contact@interno.com</Link>
        </li>
        <li>
          <FaPhoneAlt />
          <Link to="tel:1234567890">(123) 456 - 7890</Link>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
