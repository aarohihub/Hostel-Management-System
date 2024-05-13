import React from "react";
import "./Home.css";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";

const Home = () => {
  const { isAuthenticated, user } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/user/staff/me",
          { withCredentials: true }
        );
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="content">
      <h2>Staff Dashboard</h2>
      <p>Welcome to the staff dashboard!</p>
      <table className="student-table">
        <thead>
          <tr>
            <th>Staff ID</th>
            <th>Staff Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
            {/* <th>Password</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user._id}</td>
            <td>{user.fullName}</td>
            <td>{user.address}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            {/* <td>{user.password}</td> */}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Home;
