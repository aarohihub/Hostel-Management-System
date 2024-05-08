import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Room.css";
import axios from "axios";

export const Rooms = () => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/room/getall"
        );
        setRooms(response.data.rooms);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };

    fetchRooms();
  }, []);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowPopup(false);
    }
  };

  return (
    <div className="r_section">
      <div className="room">
        <h1> ROOMS </h1>
      </div>
      <div className="room_section">
        {rooms.map((room) => (
          <div className="room1" key={room._id}>
            <img src={room.roomImage.url} alt="" />
            <h5>{room.roomName}</h5>
            <div className="room-info">
              <ul>
                <li>{room.roomDescription}</li>
                <li>{room.roomStatus}</li>
              </ul>
            </div>

            <div className="pay">
              <div className="price">
                <b> ${room.roomPrice} </b>
              </div>

              <div>
                <button onClick={togglePopup}> Book now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className={showPopup ? "popup active" : "popup"}
        onClick={handleClickOutside}
      >
        <div className="popup-content" ref={popupRef}>
          <span className="popup-close" onClick={togglePopup}>
            &times;
          </span>
          <div className="details">
            <h2>Booking Details</h2>

            <p>Are you sure want to book this? </p>
          </div>
          <div className="betton">
            <div className="bu1">
              <Link>
                {" "}
                <button className="b1">Pay</button>{" "}
              </Link>
            </div>
            <div className="bu2">
              {" "}
              <Link to="/rooms">
                {" "}
                <button className="b2"> Cancel </button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
