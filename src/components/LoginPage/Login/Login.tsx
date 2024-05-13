import Form from '../../EntranceForm/EntranceForm';
import { useAppDispatch } from '../../../hooks/hooks';
import { setUser } from '../../../redux/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { setError } from '../../../redux/errorSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogin = (email: string, password: string) => {
    if (!email || !password) {
      dispatch(setError('Email and password are required'));
    }

    if (!navigator.onLine) {
      dispatch(setError('No internet connection'));
    }
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            token: user.refreshToken,
            id: user.uid,
          })
        );
        navigate('/');
      })
      .catch((error) => dispatch(setError('Sorry, something went wrong')));
  };
  return (
    <div>
      <Form title={'Login'} handleClick={handleLogin} />
    </div>
  );
};

export default Login;
