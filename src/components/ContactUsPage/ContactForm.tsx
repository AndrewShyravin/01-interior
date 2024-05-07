import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact__form-form">
      <form>
        <label>First name</label>
        <input className="contact__from-input" type="text" />

        <label>Second name</label>
        <input className="contact__from-input" type="text" />

        <label>Email adress</label>
        <input className="contact__from-input" type="email" />

        <label>Comments/Questions</label>
        <textarea className="input__comments" placeholder="" />
      </form>
      <button className="contact__btn">Send</button>
    </div>
  );
};

export default ContactForm;
