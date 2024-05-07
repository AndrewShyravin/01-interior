import { NavLink } from 'react-router-dom';
import './LoginPage.css';
import Login from '../Login/Login';

const LoginPage = () => {
  return (
    <div className="login__page">
      <div className="container">
        <div className="login__inner">
          <div className="login__text">
            <h1>Let's Create Your Dream Interior</h1>
          </div>
          <div className="login__form-inner">
            <div className="login__form">
              <h1>Login</h1>
              <Login />
              <p>
                Or <NavLink to="/register">sign up</NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
