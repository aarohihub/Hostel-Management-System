import React from 'react';
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import "./Contact.css"

export const Contacts = () => {
  return <div className='contact-section'>
    <div className='contact'>

      <div className='con'>
    <h1> CONTACT US </h1>
     </div>

     <div className='con_section'>
      <div className='contect'>
          <img src="https://hostelsewa.com/Media/AdHomeSlider/contact.png" alt=""  height={400} width={500} />
      </div>

      <div className='con_info'>
          <div className='in'> <h1><MdOutlinePermPhoneMsg /></h1> 9852125636</div>
          <div className='in'> <h1><MdOutlineAttachEmail /></h1> brightfuturehostel@gmail.com</div>
          <div className='in'> <h1><FaFacebookSquare /></h1> Bright_Future_Hostel</div>
      </div>
     </div>

      </div>
  </div>;
};
