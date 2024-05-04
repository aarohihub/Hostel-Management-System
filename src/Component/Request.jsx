import React, { useState } from 'react';
import './Request.css';

const Request = () => {
  const [name, setName] = useState('');
  const [roomNo, setRoomNo] = useState('');
  const [issue, setIssue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission, such as sending the request
    console.log('Request submitted:', { name, roomNo, issue });
    // You can add further logic here, like sending the request to a server
  };

  return (
    <div className="content">
      <h2>Maintenance Request</h2>
      <p>Add your request for changes!</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />
        <label htmlFor="roomNo">Room Number:</label>
        <input
          type="text"
          id="roomNo"
          value={roomNo}
          onChange={(e) => setRoomNo(e.target.value)}
          placeholder="Enter room number"
          required
        />
        <label htmlFor="issue">Issue:</label>
        <textarea
        type="text"
          id="issue"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          placeholder="Describe the issue"
          required
        />
        <button type="submit" className='butt'>Submit Request</button>
      </form>
    </div>
  );
};

export default Request;
