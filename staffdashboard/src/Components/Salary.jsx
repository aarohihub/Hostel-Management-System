import React from "react";
import "./Salary.css";
import { useContext } from "react";
import { Context } from "../main";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Salary = () => {
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
      <h2>Salary</h2>
      <p>View your salary information here.</p>
      <table className="student-table">
        <thead>
          <tr>
            <th>Staff ID</th>
            <th>Staff Name</th>
            <th>Month</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mary kom</td>
            <td>February</td>
            <td>$200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Salary;
