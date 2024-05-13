import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaTasks, FaMoneyBillWave, FaSignOutAlt } from 'react-icons/fa';
import "./Sidebar.css"

const Sidebar = () => (
  <div className="sidebar">
    <h2>Bright Future Hostel</h2>
    <ul>
      <li><Link to="/"><FaHome /> Home</Link></li>
      <li><Link to="/tasks"><FaTasks /> Tasks</Link></li>
      <li><Link to="/salary"><FaMoneyBillWave /> Salary</Link></li>
      <li><Link to="/logout"><FaSignOutAlt /> Log Out</Link></li>
    </ul>
  </div>
);

export default Sidebar;
