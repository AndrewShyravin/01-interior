import { useState } from 'react';
import { useAddContactsMutation } from '../../redux/contactsApi';
import { useAppDispatch } from '../../hooks/hooks';
import { setError } from '../../redux/errorSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ContactForm.css';

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [addContacts] = useAddContactsMutation();
  const dispatch = useAppDispatch();

  const handleAddContacts = async () => {
    if (navigator.onLine) {
      if (firstName && secondName && email && text) {
        try {
          await addContacts({ firstName, secondName, email, text });
          setFirstName('');
          setSecondName('');
          setEmail('');
          setText('');
          toast.success('Your data was sended');
        } catch (error) {
          dispatch(setError('Error sending form data'));
        }
      } else {
        dispatch(setError('Please fill out all fields'));
      }
    } else {
      dispatch(setError('No internet connection'));
    }
  };

  return (
    <div className="contact__form-form">
      <form>
        <label>First name</label>
        <input
          className="contact__from-input"
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />

        <label>Second name</label>
        <input
          className="contact__from-input"
          type="text"
          value={secondName}
          onChange={(event) => setSecondName(event.target.value)}
        />

        <label>Email adress</label>
        <input
          className="contact__from-input"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label>Comments/Questions</label>
        <textarea
          className="input__comments"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </form>
      <button onClick={handleAddContacts} className="contact__btn">
        Send
      </button>
    </div>
  );
};

export default ContactForm;
