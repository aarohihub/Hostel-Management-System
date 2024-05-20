import React, { useState, useEffect, useContext } from "react";
import "./Setting.css"; // Import CSS file for styling
import axios from "axios"; // Import Axios for making HTTP requests
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const Setting = () => {
  const { isAuthenticated, user } = useContext(Context);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Fetch student data upon component mount
  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/student/me",
          {
            withCredentials: true, // Ensure credentials are sent with the request
          }
        );
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    fetchStudentData();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      // Make a PUT request to update student settings
      const { data } = await axios.put(
        `http://localhost:4000/api/v1/user/update/${user._id}`,
        { fullName, email, password },
        { withCredentials: true }
      );

      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="content">
      <h2>Settings</h2>
      <p>Adjust your account settings here.</p>
      <form onSubmit={handleUpdate}>
        <label>
          Name:
          <input
            type="text"
            value={fullName}
            placeholder={user.fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="input-field"
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            required
          />
        </label>
        <br />
        <label>
          New Password:
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            minLength={8}
            required
          />
        </label>
        <br />

        <button type="submit" className="submit-button">
          Update Settings
        </button>
      </form>
    </div>
  );
};

export default Setting;
