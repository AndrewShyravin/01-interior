import { useState } from 'react';
import './Form.css';

type FromProps = {
  title: string;
  handleClick: (email: string, password: string) => void;
};

const Form: React.FC<FromProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="form">
      <input
        type="email"
        autoComplete="current-email"
        id="email"
        placeholder="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        autoComplete="current-password"
        id="password"
        placeholder="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={() => handleClick(email, password)}>{title}</button>
    </div>
  );
};

export default Form;
