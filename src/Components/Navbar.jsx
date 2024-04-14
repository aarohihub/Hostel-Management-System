import React, {useState} from 'react';
import { HiHome } from "react-icons/hi2";
import { LuScrollText } from "react-icons/lu";
import { MdOutlineRoomPreferences } from "react-icons/md";
import { MdBedroomParent } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { MdPermContactCalendar } from "react-icons/md";
import { RiLoginBoxFill } from "react-icons/ri";
import { SiGnuprivacyguard } from "react-icons/si";
import roommate from './roommate.png'
import { Link, NavLink} from 'react-router-dom';
import "./Navbar.css"

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false) 

  return <nav>
        <Link to="/" className='title'> <img src={roommate} alt="" /> </Link> 
            <div className='menu' onClick={() =>{
                setMenuOpen(!menuOpen);
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        <ul className={menuOpen ? "open" : ""}>

            <li>
                <NavLink to ="/"><h4><HiHome /></h4>HOME</NavLink>
            </li>

            <li>
                <NavLink to ="about"><h4><LuScrollText /></h4>ABOUT</NavLink>
            </li>

            <li>
                <NavLink to ="facilities"><h4><MdOutlineRoomPreferences /></h4>FACILITIES</NavLink>
            </li>

            <li>
                <NavLink to ="rooms"><h4><MdBedroomParent /></h4>ROOMS</NavLink>
            </li>

            <li>
                <NavLink to ="gallery"><h4><GrGallery /></h4>GALLERY</NavLink>
            </li>

            <li>
                <NavLink to ="contacts"><h4><MdPermContactCalendar /></h4>CONTACTS</NavLink>
            </li>

            <li>
                <NavLink to ="login"><h4><RiLoginBoxFill /></h4>LOGIN</NavLink>
            </li>

            <li>
                <NavLink to ="signup"><h4><SiGnuprivacyguard /></h4>SIGNUP</NavLink>
            </li>
        </ul>

  </nav>;
}
