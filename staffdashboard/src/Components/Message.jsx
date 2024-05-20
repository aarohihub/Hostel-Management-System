import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main";
import "./Message.css";

const Messages = () => {
  const { isAuthenticated } = useContext(Context);

  const [fullName, setFullName] = useState("");

  const [message, setMessage] = useState("");

  const navigateTo = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:4000/api/v1/message/send",
          {
            fullName,

            message,
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
      <h2>Messages</h2>
      {/* <p>Add your request for changes!</p> */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          id="name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Enter your name"
        />

        {/* <label htmlFor="email">Your Email:</label>
        <input
          type="text"
          id="roomName"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />

        <label htmlFor="phone">Phone:</label>
        <textarea
          type="phone"
          id="issue"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter phone number"
        /> */}
        <label htmlFor="message">Message:</label>
        <textarea
          type="text"
          id="issue"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter message"
        />
        <button type="submit" className="butt">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Messages;
