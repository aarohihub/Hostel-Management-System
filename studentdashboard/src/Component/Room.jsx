import React, { useContext, useEffect, useState } from "react";
import "./Room.css"; // Import CSS file for styling
import axios from "axios";
import { Context } from "../main";

const Room = (roomId) => {
  const { isAuthenticated, user } = useContext(Context);
  const [room, setRoom] = React.useState([]);
  const [roombooks, setRoomBooks] = useState([]);

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
    fetchUser();
  }, []);

  return (
    <div className="content">
      <h2>Room</h2>
      <p>View information about your room.</p>
      <table className="room-table">
        <thead>
          <tr>
            <th>Student Name</th>
            {/* <th>Name</th> */}
            <th>Room Name</th>
            {/* <th>Bed No</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.fullName}</td>
            {/* <td>{room.room_id}</td> */}
            <td>Parrot</td>
            {/* <td>F1-01</td> */}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Room;
