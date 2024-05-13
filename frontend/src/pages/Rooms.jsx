import React, { useState, useRef, useEffect, useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

import "./Room.css";
import { Context } from "../main";
import { toast } from "react-toastify";

export const Rooms = () => {
  const { isAuthenticated, user } = useContext(Context);

  const [showPopup, setShowPopup] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const popupRef = useRef(null);
  const [rooms, setRooms] = useState([]);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [amount, setAmount] = useState(
    selectedRoom ? selectedRoom.roomPrice : ""
  );
  const [enteredAmount, setEnteredAmount] = useState("");

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    setEnteredAmount(e.target.value);
  };

  const navigateTo = useNavigate();

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

  const togglePopup = async (roomId) => {
    if (!isAuthenticated) {
      toast.error("Please login first to book");
      navigateTo("/login");
      return;
    }
    const room = rooms.find((room) => room._id === roomId);
    setSelectedRoom(room);

    if (!room.roomDescription) {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/v1/room/getrooms/${roomId}`
        );
        setSelectedRoom(response.data.room);
      } catch (error) {
        console.error(`Error fetching room with ID ${roomId}:`, error);
      }
    }

    setShowPopup(true);
  };

  const handleBookNow = async () => {
    try {
      if (!amount || isNaN(amount) || amount <= 0) {
        // Check if amount is not provided, is NaN, or is less than or equal to 0
        toast.error("Please enter a valid amount");
        return;
      }
      console.log("User ID:", user && user._id);
      console.log("Selected Room ID:", selectedRoom && selectedRoom._id);
      console.log("Selected Room Name:", selectedRoom && selectedRoom.roomName);
      console.log("Check-in Date:", checkIn);
      console.log("Check-out Date:", checkOut);

      console.log("Price:", selectedRoom.roomPrice);
      console.log("Entered Amount", amount);
      const response = await axios
        .post(
          "http://localhost:4000/api/v1/room/book",
          {
            user_id: user._id,
            room_id: selectedRoom._id,
            roomName: selectedRoom.roomName,
            check_in: checkIn,
            check_out: checkOut,
            price: selectedRoom.roomPrice,
            entered_amount: amount,
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
          <div
            className={`room1 ${room.status === "Complete" ? "complete" : ""}`}
            key={room._id}
          >
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
                <b> Rs {room.roomPrice} </b>
              </div>
              <div>
                <button onClick={() => togglePopup(room._id)}> Book now</button>
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
          <span className="popup-close" onClick={() => setShowPopup(false)}>
            &times;
          </span>
          <div className="details">
            <h2>{selectedRoom && selectedRoom.roomName}</h2>

            <p>Description: {selectedRoom && selectedRoom.roomDescription}</p>
            <p>Status: {selectedRoom && selectedRoom.roomStatus}</p>
            <p>Price: Rs {selectedRoom && selectedRoom.roomPrice}</p>
            <p>User: {user.fullName}</p>

            <div className="check-in">
              Check-in:
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>
            <div className="check-out">
              Check-out:
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
            <div className="amount">
              Enter amount:
              <input
                type="number"
                value={amount}
                onChange={handleAmountChange}
              />
            </div>
          </div>
          <div className="betton">
            <div className="bu1">
              <button className="b1" onClick={handleBookNow}>
                Book Now
              </button>
            </div>
            <div className="bu2">
              <Link to="/">
                <button className="b2"> Cancel </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
