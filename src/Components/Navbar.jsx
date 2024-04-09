import React, {useState} from 'react';
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
                <NavLink to ="/">HOME</NavLink>
            </li>

            <li>
                <NavLink to ="about">ABOUT</NavLink>
            </li>

            <li>
                <NavLink to ="facilities">FACILITIES</NavLink>
            </li>

            <li>
                <NavLink to ="rooms">ROOMS</NavLink>
            </li>

            <li>
                <NavLink to ="gallery">GALLERY</NavLink>
            </li>

            <li>
                <NavLink to ="contacts">CONTACTS</NavLink>
            </li>

            <li>
                <NavLink to ="login">LOGIN</NavLink>
            </li>

            <li>
                <NavLink to ="signup">SIGNUP</NavLink>
            </li>
        </ul>

  </nav>;
}
