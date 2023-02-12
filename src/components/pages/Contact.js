
// export default function Contact() {
//   return (
//     <div>
//       <h1>Contact Page</h1>
//       <p>
//         Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
//         molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
//         magna a ultrices. Aenean pellentesque placerat lacus imperdiet
//         efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum
//         mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
//         posuere, eget tristique dui dapibus. Maecenas fermentum elementum
//         faucibus. Quisque nec metus vestibulum, egestas massa eu, sollicitudin
//         ipsum. Nulla facilisi. Sed ut erat ligula. Nam tincidunt nunc in nibh
//         dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per
//         conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at
//         rhoncus. Etiam vel condimentum magna, quis tempor nulla.
//       </p>
//     </div>
//   );
// }
import React, { useState } from 'react';
import './style.css';

function Contact() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return name === 'firstName' ? setFirstName(value) : setLastName(value);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${firstName} ${lastName}`);
    setFirstName('');
    setLastName('');
  };

  return (
    <div>
      <p>
        Hello {firstName} {lastName}
      </p>
      <form className="form">
        <input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
