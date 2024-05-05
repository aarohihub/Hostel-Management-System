import React from 'react';
import hpage from '../assets/img/hpage.jpg';
import './About.css'

export const About = () => {
  return  <div className='about_section'>
          <div className='title1'>
          <h1> ABOUT US </h1>
          </div>
    <div class="container">
      <div className='imagee'>
       <img class="container_image" src={hpage}/>
      </div>

      <div class="container_text">
    <h2>Bright Future Hostel</h2><br />
    <div className='para'>
    <p>"Cats like boxes because they are cryptic animals; they like to hide," Stephen Zawistowski, science adviser for the <br />
     American Society for the Prevention of Cruelty to Animals, told Business Insider. "And a box gives them a place of <br />safety and security."</p>
    <p>While inside a box, cats feel that they cannot be snuck up on from behind or the side — anything that wants to approach them 
      <br />must come directly into their field of vision. In effect, such hiding spaces allow them to watch the world around them without being seen.</p>
      </div>
  </div>
    
  </div>



  </div>;
};