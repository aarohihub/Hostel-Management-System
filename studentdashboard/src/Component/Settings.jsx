import React, { useState } from 'react';
import './Setting.css'; // Import CSS file for styling

const Setting = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to update account settings goes here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset form fields after submission
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="content">
      <h2>Setting</h2>
      <p>Adjust your account settings here.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
        </label>
        <button type="submit" className="submit-button">Update Settings</button>
      </form>
    </div>
  );
};

export default Setting;
