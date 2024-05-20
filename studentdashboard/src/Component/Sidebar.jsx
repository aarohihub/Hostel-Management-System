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
import axios from "axios";
import { toast } from "react-toastify";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const handleLogout = async () => {
    await axios
      .get("http://localhost:4000/api/v1/user/student/logout", {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <div
      style={!isAuthenticated ? { display: "none" } : { display: "grid" }}
      className={show ? "show sidebar" : "sidebar"}
    >
      <h2>HOSTEL STAYS</h2>
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
        {/* <li>
          <Link to="/bills">
            <FaMoneyBill /> Rent
          </Link>
        </li> */}
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
          <Link to="/login" onClick={handleLogout}>
            <FaSignOutAlt /> Log Out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
