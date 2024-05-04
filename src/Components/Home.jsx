import React from 'react';
import './Home.css'

const Home = () => (
  <div className="content">
    <h2>Staff Dashboard</h2>
    <p>Welcome to the staff dashboard!</p>
    <table className="student-table">
      <thead>
        <tr>
          <th>Staff ID</th>
          <th>Staff Name</th>
          <th>Address</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mary kom</td>
          <td>234 Main dent</td>
          <td>123-456-7890</td>
          <td>example@example.com</td>
          <td>********</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Home;
