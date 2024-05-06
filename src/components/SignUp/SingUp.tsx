import Form from '../Form/Form';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/hooks';
import { setUser } from '../../redux/userSlice';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const SingUp = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleSignUp = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
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
      <Form title={'Sign up'} handleClick={handleSignUp} />
    </div>
  );
};

export default SingUp;
