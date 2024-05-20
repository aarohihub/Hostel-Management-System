import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddNewAdmin from "./components/AddNewAdmin";
import AddNewDoctor from "./components/AddNewStaff";

import Messages from "./components/Messages";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "./main";
import axios from "axios";
import "./App.css";
import Staffs from "./components/Staffs";
import AddNewStaff from "./components/AddNewStaff";
import AddNewRoom from "./components/AddNewRoom";
import Users from "./components/Users";
const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/admin/me",
          { withCredentials: true }
        );
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, [isAuthenticated]);

  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/staff/addnew" element={<AddNewStaff />} />
          <Route path="/room/addnew" element={<AddNewRoom />} />
          <Route path="/admin/addnew" element={<AddNewAdmin />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/staffs" element={<Staffs />} />
          <Route path="/users" element={<Users />} />
        </Routes>
        <ToastContainer position="top-center" />
      </Router>
    </>
  );
};

export default App;
