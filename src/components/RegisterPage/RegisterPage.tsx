import { Link } from 'react-router-dom';
import './RegisterPage.css';
import SingUp from '../SignUp/SingUp';

const RegisterPage = () => {
  return (
    <div className="register__page">
      <div className="container">
        <div className="register__form">
          <h1>Sign Up</h1>
          <SingUp />
          <p>
            Have you already had account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
