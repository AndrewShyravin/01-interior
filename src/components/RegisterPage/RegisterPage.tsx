import { NavLink } from 'react-router-dom';
import './RegisterPage.css';
import SingUp from './SignUp/SingUp';

const RegisterPage = () => {
  return (
    <div className="register__page">
      <div className="container">
        <div className="login__inner">
          <div className="login__text">
            <h1>Let's Create Your Dream Interior</h1>
          </div>
          <div className="register__form-inner">
            <div className="register__form">
              <h1>Sign Up</h1>
              <SingUp />
              <p>
                Have you already had account?{' '}
                <NavLink to="/login">Login</NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
