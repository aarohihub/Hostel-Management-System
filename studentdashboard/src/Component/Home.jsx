import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const { isAuthenticated, user } = useContext(Context);
  const [student, setStudent] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/user/student/me",
          { withCredentials: true }
        );
      } catch (error) {
        console.log(error);
      }
    };
  }, []);
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="content">
      <h2>Resident Dashboard</h2>
      <p>Welcome to the resident dashboard!</p>
      <table className="student-table">
        <thead>
          <tr>
            <th>Resident ID</th>
            <th>Resident Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user._id}</td>
            <td>{user.fullName}</td>
            <td>{user.address}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Home;
