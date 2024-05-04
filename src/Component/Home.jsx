import React from 'react';
import './Home.css'

const Home = () => (
  <div className="content">
    <h2>Resident Dashboard</h2>
    <p>Welcome to the resident dashboard!</p>
    <table className="student-table">
      <thead>
        <tr>
          <th>Resident ID</th>
          <th>Resident Name</th>
          <th>Address</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>John Doe</td>
          <td>123 Main St</td>
          <td>123-456-7890</td>
          <td>example@example.com</td>
          <td>********</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Home;
