import React, { useState } from 'react';
import './Bills.css';

const Bills = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [month, setMonth] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const handlePaymentClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handlePay = () => {
    // Add logic to handle payment
    console.log('Rent Paid');
    setIsPaymentSuccessful(true); // Set payment success flag
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="content">
      <h2>Bills</h2>
      <p>Manage your bills and payments.</p>
      <table className="bills-table">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Resident Name</th>
            <th>Month</th>
            <th>Due</th>
            <th>Rent</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>January</td>
            <td>7 Feb</td>
            <td>$500</td>
            <td>
              <button onClick={handlePaymentClick} className='butt'>Pay</button>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>Pay Rent</h2>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
              autocomplete="name"
            />
            <input
              type="text"
              id="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              placeholder="Enter month"
              autocomplete="month"
            />
            <input
              type="text"
              id="number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              autocomplete="number"
              placeholder="Enter phone number"
            />
            <input
              type="text"
              id="value"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              autocomplete="name"
            />
            <button onClick={handlePay} className='butt'>Rent</button>
            {isPaymentSuccessful && <p>Payment successful!</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Bills;
