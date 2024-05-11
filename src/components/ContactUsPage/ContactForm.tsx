import { useState } from 'react';
import { useAddContactsMutation } from '../../redux/contactsApi';
import './ContactForm.css';

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [addContacts] = useAddContactsMutation();

  const handleAddContacts = async () => {
    try {
      if (firstName && secondName && email && text) {
        const res = await addContacts({ firstName, secondName, email, text });
        setFirstName('');
        setSecondName('');
        setEmail('');
        setText('');
      }
    } catch (error) {
      console.log(error);
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
