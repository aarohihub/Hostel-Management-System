import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaEnvelope,
  FaMoneyBill,
  FaBed,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { GrHostMaintenance } from "react-icons/gr";
import "./Sidebar.css";
import { Context } from "../main";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  return (
    <div
      style={!isAuthenticated ? { display: "none" } : { display: "grid" }}
      className={show ? "show sidebar" : "sidebar"}
    >
      <h2>Bright Future Hostel</h2>
      <ul>
        <li>
          <Link to="/">
            <FaHome /> Home
          </Link>
        </li>
        <li>
          <Link to="/messages">
            <FaEnvelope /> Messages
          </Link>
        </li>
        <li>
          <Link to="/bills">
            <FaMoneyBill /> Rent
          </Link>
        </li>
        <li>
          <Link to="/room">
            <FaBed /> Room
          </Link>
        </li>
        <li>
          <Link to="/setting">
            <FaCog /> Setting
          </Link>
        </li>
        <li>
          <Link to="/request">
            <GrHostMaintenance /> Request
          </Link>
        </li>
        <li>
          <Link to="/logout">
            <FaSignOutAlt /> Log Out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
