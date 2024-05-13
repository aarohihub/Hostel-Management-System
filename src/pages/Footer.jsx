import React from 'react';
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { Link, NavLink} from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className='main'>
      <div className='description'> <h2>Bright Future Hostel!</h2><br />
        <p>Copyright © 2012 - 2024 HostelG®. All rights reserved.</p><br />
        <h1><FaFacebookSquare /></h1>
      </div>

      <div className='description'> 
        <h2>OTHER LINKS</h2>
        <ul>
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
      </div>

      <div className='description'>
        <h2>CONTACT INFO</h2>
        <ul>
        <li><h2><MdOutlinePermPhoneMsg /></h2> 9852125636</li>
        <li><h2><MdOutlineAttachEmail /></h2> brightfuturehostel@gmail.com</li>
        </ul>
      </div>

    </div>
  )
}

export default Footer
