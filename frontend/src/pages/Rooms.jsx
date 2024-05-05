import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';
import r1 from '../assets/img/r1.jpg'
import r2 from '../assets/img/r2.jpg'
import r3 from '../assets/img/r3.jpg'
import "./Room.css";

export const Rooms = () => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

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
        <h1> ROOM </h1>
      </div>

      <div className="room_section">
        <div
          className="room1"
        >
          <img src={r2} alt="" />
            <div className="room-info">
             <ul>
             <li>Ground floor </li>
             <li>Spacious room</li>
             <li>A cabinet with big window</li>
            <li>wifi facility</li>
             </ul>
            </div>

            <div className="pay">

      <div className="price">
          <b> $50 </b>
      </div>

      <div>
        <button onClick={togglePopup}> Book now</button>
      </div>
      </div>
        </div>

        <div className="room1">
          <img src={r3} alt="" />

            <div className="room-info">
              <ul>
             <li>First floor </li>
             <li>Spacious room</li>
             <li>Two cabinet with big window</li>
            <li>wifi facility</li>
             </ul>
            </div>

            <div className="pay">

              <div className="price">
                <b> $100 </b>
              </div>

              <div>
                <button onClick={togglePopup}> Book now</button>
              </div>
            </div>
       
        </div>

        <div className="room1">
            <img src={r1} alt="" />
         
            <div className="room-info">
            <ul>
             <li>Third floor </li>
             <li>Spacious room</li>
             <li>A cupboard with big window</li>
             <li>Each roommate has separate working desk</li>
            <li>wifi facility</li>
             </ul>
            </div>
          
            <div className="pay">
             <div className="price">
               <b> $200 </b>
              </div>
              <div>
                <button onClick={togglePopup}> Book now</button>
             </div>
            </div>
         
        </div>
      </div>

      <div className={showPopup ? "popup active" : "popup"} onClick={handleClickOutside}>
        <div className="popup-content" ref={popupRef}>
          <span className="popup-close" onClick={togglePopup}>
            &times;
          </span>
          <div className="details">
          <h2>Booking Details</h2>
          <p>Needed to have an account for booking a room !!! </p>
          <p>Do you have an account? </p>
          </div>
          <div className="betton">
            <div className="bu1"><Link to="/signup"> <button className="b1">SignUp</button> </Link></div>
            <div className="bu2"> <Link to="/login"> <button className="b2"> LogIn </button> </Link></div>
          </div>
        </div>
      </div>

    </div>
 
  );
};

export default Rooms;
