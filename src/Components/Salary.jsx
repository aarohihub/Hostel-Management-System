import React from 'react';
import './Salary.css'

const Salary = () => {
  return (
    <div className="content">
      <h2>Salary</h2>
      <p>View your salary information here.</p>
      <table className="student-table">
      <thead>
        <tr>
          <th>Staff ID</th>
          <th>Staff Name</th>
          <th>Month</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mary kom</td>
          <td>February</td>
          <td>$200</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
};

export default Salary;
