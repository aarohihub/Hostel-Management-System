import React from "react";
import { Link } from "react-router-dom";
import oh from "../assets/img/oh.png";
import backG from "../assets/img/backGimg.jpg";
import "./Home.css";
import { Rooms } from "./Rooms";
import { About } from "./About";
import { Facilities } from "./Facilities";
import { Contacts } from "./Contacts";
import { Gallery } from "./Gallery";

export const Home = () => {
  return (
    <div>
      <div className="pagebox">
        <img src={backG} alt="background" className="bg" height={100} />

        <div className="quotes">
          <div className="name">
            <h1> BRIGHT FUTURE HOSTEL </h1>
          </div>

          <div className="quote">
            <h2>Hostel better than Hotel !!!! </h2>
          </div>

          <div className="buttons">
            <Link to="/rooms">
              <button>
                {" "}
                <h3> Book Now </h3>{" "}
              </button>
            </Link>
          </div>
        </div>

        <div className="images">
          <img src={oh} alt="" />
        </div>
      </div>
      <About />
      <Rooms />

      <Gallery />
      <Contacts />
    </div>
  );
};

export default Home;
