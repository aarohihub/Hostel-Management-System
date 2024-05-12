import React, { useState, useEffect, useContext } from "react";
import "./Request.css";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main";

const Request = () => {
  const { isAuthenticated } = useContext(Context);

  const [fullName, setFullName] = useState("");
  const [date, setDate] = useState("");
  const [issue, setIssue] = useState("");
  const [roomName, setRoomName] = useState("");
  const [department, setDepartment] = useState("");

  const departmentsArray = [
    "Housekeeping",
    "Maintenance",
    "Food Service",
    "Security",
    "Laundry",
  ];

  const navigateTo = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:4000/api/v1/maintenance/post",
          {
            fullName,
            date,
            issue,
            roomName,
            department,
          },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          navigateTo("/");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="content">
      <h2>Maintenance Request</h2>
      <p>Add your request for changes!</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          id="name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Enter your name"
        />
        <label htmlFor="date">Date</label>
        <input
          type="text"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Enter Date"
        />
        <label htmlFor="roomName">Room Name:</label>
        <input
          type="text"
          id="roomName"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          placeholder="Enter room name"
        />
        <label htmlFor="department">Select Department</label>
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="">Select Department</option>
          {departmentsArray.map((element, index) => {
            return (
              <option value={element} key={index}>
                {element}
              </option>
            );
          })}
        </select>
        <label htmlFor="issue">Issue:</label>
        <textarea
          type="text"
          id="issue"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          placeholder="Describe the issue"
        />
        <button type="submit" className="butt">
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default Request;
