import './Licenses.css';
import license_1 from '../../../image/license-1.jpg';
import license_2 from '../../../image/license-2.jpg';
import license_3 from '../../../image/license-3.jpg';

const Licenses = () => {
  return (
    <div className="licenses">
      <h1>Our licenses</h1>
      <div className="licenses__img">
        <img src={license_1} alt="license" />
      </div>
      <div className="licenses__img">
        <img src={license_2} alt="license" />
      </div>
      <div className="licenses__img">
        <img src={license_3} alt="license" />
      </div>
    </div>
  );
};

export default Licenses;
