import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Messages from "./Component/Message";
import Bills from "./Component/Bills";
import Room from "./Component/Room";
import Setting from "./Component/Settings";
import Request from "./Component/Request";
import Sidebar from "./Component/Sidebar";
import "./App.css";
import Login from "./Component/Login";
import { Context } from "./main";
import axios from "axios";

const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/student/me",
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
              <Route path="/messages" element={<Messages />} />
              <Route path="/bills" element={<Bills />} />
              <Route path="/room" element={<Room />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/request" element={<Request />} />
              <Route path="/login" element={<Login />} />
              {/* <Route path="/logout" element={<LogOut />} /> */}
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
