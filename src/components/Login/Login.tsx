import Form from '../Form/Form';
import { useAppDispatch } from '../../hooks/hooks';
import { setUser } from '../../redux/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogin = (email: string, password: string) => {
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
      .catch(console.error);
  };
  return (
    <div>
      <Form title={'Login'} handleClick={handleLogin} />
    </div>
  );
};

export default Login;
