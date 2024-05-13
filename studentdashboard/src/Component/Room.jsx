import React, { useContext, useEffect, useState } from "react";
import "./Room.css"; // Import CSS file for styling
import axios from "axios";
import { Context } from "../main";

const Room = () => {
  const { isAuthenticated, user } = useContext(Context);
  const [bookedRooms, setBookedRooms] = useState(null);

  useEffect(() => {
    const fetchBookedRooms = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/v1/room/bookedrooms/${user._id}`
        );
        setBookedRooms(response.data.bookedRooms);
      } catch (error) {
        console.error("Error fetching booked rooms:", error);
      }
    };

    fetchBookedRooms();
  }, [user]);

  if (!bookedRooms) {
    return (
      <div>
        <h1>NO ROOMS BOOKED</h1>
      </div>
    );
  }

  return (
    <div className="content">
      <h2>Booked Rooms</h2>
      <p>View information about your booked rooms.</p>
      <table className="room-table">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Room Name</th>
            <th>Check-in</th>
            <th>Check-out</th>
            <th>Book Status</th>
            <th>Payment Status</th>

            <th>Paid Amount</th>
          </tr>
        </thead>
        <tbody>
          {bookedRooms.map((room) => (
            <tr key={room._id}>
              <td>{user.fullName}</td>
              <td>{room.roomName}</td>
              <td>{room.check_in.substr(0, 10)}</td>
              <td>{room.check_out.substr(0, 10)}</td>
              <td>{room.status}</td>
              <td>{room.payment_status}</td>

              <td>{room.entered_amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Room;
