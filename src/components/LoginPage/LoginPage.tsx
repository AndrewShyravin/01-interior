import { Link } from 'react-router-dom';
import './LoginPage.css';
import Login from '../Login/Login';

const LoginPage = () => {
  return (
    <div className="login__page">
      <div className="container">
        <div className="login__form">
          <h1>Login</h1>
          <Login />
          <p>
            Or <Link to="/register">sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
