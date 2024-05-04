import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaEnvelope, FaMoneyBill, FaBed, FaCog, FaSignOutAlt  } from 'react-icons/fa';
import { GrHostMaintenance } from "react-icons/gr";
import "./Sidebar.css"

const Sidebar = () => (
  <div className="sidebar">
    <h2>Bright Future Hostel</h2>
    <ul>
      <li><Link to="/"><FaHome /> Home</Link></li>
      <li><Link to="/messages"><FaEnvelope /> Messages</Link></li>
      <li><Link to="/bills"><FaMoneyBill /> Rent</Link></li>
      <li><Link to="/room"><FaBed /> Room</Link></li>
      <li><Link to="/setting"><FaCog /> Setting</Link></li>
      <li><Link to="/request"><GrHostMaintenance /> Request</Link></li>
      <li><Link to="/logout"><FaSignOutAlt /> Log Out</Link></li>
    </ul>
  </div>
);

export default Sidebar;
