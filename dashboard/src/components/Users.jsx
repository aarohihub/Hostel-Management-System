import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/message/getall",
          { withCredentials: true }
        );
        setMessages(data.messages);
      } catch (error) {
        console.log("ERROR OCCURED WHILE FETCHING MESSAGES:", error);
      }
    };
    fetchMessages();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return (
    <section className="page messages">
      <h1>ALL USERS</h1>
      <div className="banner">
        {messages && messages.length > 0 ? (
          messages.map((element) => {
            return (
              <div className="card">
                <div className="details">
                  <p>
                    Full Name: <span>Riket Pokharel</span>
                  </p>
                  <p>
                    Email: <span>riekt@gmail.com</span>
                  </p>
                  <p>
                    Phone: <span> 976545585</span>
                  </p>
                  <p>
                    NIC: <span>89475265411</span>
                  </p>
                  <p>
                    Gender: <span>Male</span>
                  </p>
                  <p>
                    Address: <span>Naxal</span>
                  </p>
                  <p>
                    College Name: <span>Herald College Kathmandu</span>
                  </p>

                  <p>
                    Role: <span>Student</span>
                  </p>
                  <MdDelete style={{ color: "red", fontSize: "50px" }} />
                </div>
              </div>
            );
          })
        ) : (
          <h1>NO MESSAGES</h1>
        )}
      </div>
    </section>
  );
};

export default Messages;
