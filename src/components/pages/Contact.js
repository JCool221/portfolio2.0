
import React, { useState } from 'react';
import './style.css';

function Contact() {
  // Here we set two state variables for name and email using `useState`
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setname or setemail based on what field the user is typing in
    // return name === 'name' ? setName(value) : setEmail(value);
    if (name === 'name'){
      return setName(value);
    } else if (name ==='email') {
      return setEmail(value);
    } else if (name === 'message') {
      return setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${name} ${email} ${message}`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='row mt-5 justify-content-center'>
      <div className='w-50 text-center'>

      <p>
        Shoot me an email
      </p>
      <form className="form">
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
          />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email Address"
          />
        <textarea 
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          // placeholder="message"
          style={{ minWidth:'100%'}}
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
          </div>
    </div>
  );
}

export default Contact;
