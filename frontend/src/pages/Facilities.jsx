import React from 'react';
import san from '../assets/img/san.jpg';
import laun from '../assets/img/laun.png';
import meal from '../assets/img/meal.jpg';
import safe from '../assets/img/safe.jpg';
import water from '../assets/img/water.jpg';
import cctv from '../assets/img/cctv.jpg';
import park from '../assets/img/park.jpg';
import college from '../assets/img/college.jpg';
import './Facilities.css'

export const Facilities = () => {
  return <div className='Fac'>

    <div className='facc'>
    <h1> FACILITIES </h1>
    </div>

    <div className='fac_section'>

    <div class='card'>
      <img src={san} alt="" />
      <div class='intro'>
        <h1>SANITATION</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus nisi, aspernatur officiis error aut quae fuga repudiandae quam praesentium voluptatem, iusto vitae molestias in qui eligendi quos, inventore reiciendis eius?</p>
      </div>
    </div>

    <div className='card'>
      <img src={laun} alt="" />
      <div className='intro'>
        <h1>LAUNDRY SERVICE</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus nisi, aspernatur officiis error aut quae fuga repudiandae quam praesentium voluptatem, iusto vitae molestias in qui eligendi quos, inventore reiciendis eius?</p>
      </div>
    </div>

    <div className='card'>
      <img src={meal} alt=""  />
      <div className='intro'>
        <h1>HEARTY MEAL</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus nisi, aspernatur officiis error aut quae fuga repudiandae quam praesentium voluptatem, iusto vitae molestias in qui eligendi quos, inventore reiciendis eius?</p>
      </div>
    </div>

    <div className='card'>
      <img src={safe} alt="" />
      <div className='intro'>
        <h1>SAFE ENVIRONMENT</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus nisi, aspernatur officiis error aut quae fuga repudiandae quam praesentium voluptatem, iusto vitae molestias in qui eligendi quos, inventore reiciendis eius?</p>
      </div>
    </div>

    </div>

    <div className='fac_section1'>

    <div className='card1'>
      <img src={water} alt=""  />
      <div className='intro1'>
        <h1>WATER FACILITY</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus nisi, aspernatur officiis error aut quae fuga repudiandae quam praesentium voluptatem, iusto vitae molestias in qui eligendi quos, inventore reiciendis eius?</p>
      </div>
    </div>

    <div className='card1'>
      <img src={cctv} alt=""  />
      <div className='intro1'>
        <h1>SECURITY</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus nisi, aspernatur officiis error aut quae fuga repudiandae quam praesentium voluptatem, iusto vitae molestias in qui eligendi quos, inventore reiciendis eius?</p>
      </div>
    </div>

    <div className='card1'>
      <img src={park} alt=""  />
      <div className='intro1'>
        <h1>PARKING</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus nisi, aspernatur officiis error aut quae fuga repudiandae quam praesentium voluptatem, iusto vitae molestias in qui eligendi quos, inventore reiciendis eius?</p>
      </div>
    </div>

    <div className='card1'>
      <img src={college} alt=""  />
      <div className='intro1'>
        <h1>COLLEGE</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus nisi, aspernatur officiis error aut quae fuga repudiandae quam praesentium voluptatem, iusto vitae molestias in qui eligendi quos, inventore reiciendis eius?</p>
      </div>
    </div>

    </div>


   
    
  </div>;
  
};






