import React, { useState } from 'react';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import bday from '../assets/img/bday.png'
import holi from '../assets/img/holi.png'
import tihar from '../assets/img/tihar.png'
import "./Gallery.css";

export const Gallery = () => {
  // an array of image URLs
  const imagess = [
    bday,
    holi,
    tihar,
  ];

  // State to keep track of the currently displayed image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle clicking the next button
  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagess.length);
  };

  // Function to handle clicking the previous button
  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imagess.length) % imagess.length);
  };

  return (
    <div className='gallery_section'>
      <div className='gallery'>
        <h1>GALLERY</h1>
      </div>
        <div className="image-slider">
          <button onClick={handlePrevClick}><MdKeyboardDoubleArrowLeft /></button>
          <img src={imagess[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
          <button onClick={handleNextClick}><MdKeyboardDoubleArrowRight /></button>
        </div>
    </div>
  );
};

export default Gallery;




