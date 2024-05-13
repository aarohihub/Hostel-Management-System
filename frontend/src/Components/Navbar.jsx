import React, { useContext, useState } from "react";
import { HiHome } from "react-icons/hi2";
import { LuScrollText } from "react-icons/lu";
import { MdOutlineRoomPreferences } from "react-icons/md";
import { MdBedroomParent } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { MdPermContactCalendar } from "react-icons/md";
import { MdDashboard } from "react-icons/md";

import roommate from "./roommate.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { Context } from "../main";
import axios from "axios";
import { toast } from "react-toastify";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const navigateTo = useNavigate();

  const handleLogout = async () => {
    await axios
      .get("http://localhost:4000/api/v1/user/student/logout", {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const gotoLogin = () => {
    navigateTo("/login");
  };

  return (
    <nav>
      <Link to="/" className="title">
        <img src={roommate} alt="" />
      </Link>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">
            <h4>
              <HiHome />
            </h4>
            HOME
          </NavLink>
        </li>

        <li>
          <NavLink to="about">
            <h4>
              <LuScrollText />
            </h4>
            ABOUT
          </NavLink>
        </li>

        <li>
          <NavLink to="facilities">
            <h4>
              <MdOutlineRoomPreferences />
            </h4>
            FACILITIES
          </NavLink>
        </li>

        <li>
          <NavLink to="rooms">
            <h4>
              <MdBedroomParent />
            </h4>
            ROOMS
          </NavLink>
        </li>

        <li>
          <NavLink to="gallery">
            <h4>
              <GrGallery />
            </h4>
            GALLERY
          </NavLink>
        </li>

        <li>
          <NavLink to="contacts">
            <h4>
              <MdPermContactCalendar />
            </h4>
            CONTACTS
          </NavLink>
        </li>
        {isAuthenticated && (
          <li>
            <NavLink to="http://localhost:5175/login" target="_blank">
              <h4>
                <MdDashboard />
              </h4>
              DASHBOARD
            </NavLink>
          </li>
        )}
      </ul>
      {isAuthenticated ? (
        <button className="logoutBtn btn" onClick={handleLogout}>
          LOGOUT
        </button>
      ) : (
        <button className="logoutBtn btn" onClick={gotoLogin}>
          LOGIN
        </button>
      )}
    </nav>
  );
};
export default Navbar;
