import React from 'react';
import './Room.css'; // Import CSS file for styling

const Room = () => (
  <div className="content">
    <h2>Room</h2>
    <p>View information about your room.</p>
    <table className="room-table">
      <thead>
        <tr>
          <th>Student ID</th>
          <th>Name</th>
          <th>Room No.</th>
          <th>Bed No.</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>John Doe</td>
          <td>F1-R1</td>
          <td>F1-01</td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </table>
  </div>
);

export default Room;
