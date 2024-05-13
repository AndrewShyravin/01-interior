import Form from '../../EntranceForm/EntranceForm';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/hooks';
import { setUser } from '../../../redux/userSlice';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { setError } from '../../../redux/errorSlice';

const SingUp = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleSignUp = (email: string, password: string) => {
    if (!email || !password) {
      dispatch(setError('Email and password are required'));
      return;
    }

    if (!navigator.onLine) {
      dispatch(setError('No internet connection'));
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
      <Form title={'Sign up'} handleClick={handleSignUp} />
    </div>
  );
};

export default SingUp;
