
import React, { useState } from 'react';
// import './style.css';

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
    let target = (`mailto:jcool2939@gmail.com?subject=${encodeURI(name)},${encodeURI(email)}&body=${encodeURI(message)}`)
    // Alert the user their first and last name, clear the inputs
    console.log(target)
    let link = document.createElement('a')
    link.href = target;
    console.log(link)
    link.click();   
    setName('');
    setEmail('');
    setMessage('');
  };
  return (
    <div className='row mt-5 justify-content-center vh-100'>
      <div className='w-50 bg-dark text-center h-50'>

      <p className='mt-5 fs-4'>
        Shoot me an email
      </p>
      <form className="form">
        <input
          className='form-control'
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
          />
        <input
          className='form-control'
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email Address"
          />
        <textarea 
          className='form-control'
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          // placeholder="message"
          style={{ minWidth:'100%'}}
        />
        <button type="button" className='btn btn-lg btn-secondary mt-2' onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
          </div>
        
    </div>
  );
}

export default Contact;
