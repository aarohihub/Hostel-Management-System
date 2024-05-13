import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

import Sidebar from "./Components/Sidebar";
import "./App.css";
import Login from "./Components/Login";
import { Context } from "./main";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tasks from "./Components/Tasks";
import Salary from "./Components/Salary";

const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/staff/me",
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
        <div className="app">
          <Sidebar />
          <div className="main">
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/tasks" element={<Tasks />} />
              <Route path="/salary" element={<Salary />} />
              <Route path="/login" element={<Login />} />
              {/* <Route path="/logout" element={<LogOut />} /> */}
            </Routes>
            <ToastContainer position="top-center" />
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
