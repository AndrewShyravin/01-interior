import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound">
      <h1>404</h1>
      <p>Sorry, this page not found</p>
      <button>
        <Link to="/">Go home</Link>
      </button>
    </div>
  );
};

export default NotFound;
