import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaTasks, FaMoneyBillWave, FaSignOutAlt } from "react-icons/fa";
import "./Sidebar.css";
import { useContext } from "react";
import { Context } from "../main";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const handleLogout = async () => {
    await axios
      .get("http://localhost:4000/api/v1/user/staff/logout", {
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
      <h2>Bright Future Hostel</h2>
      <ul>
        <li>
          <Link to="/">
            <FaHome /> Home
          </Link>
        </li>
        <li>
          <Link to="/tasks">
            <FaTasks /> Tasks
          </Link>
        </li>
        <li>
          <Link to="/salary">
            <FaMoneyBillWave /> Salary
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
