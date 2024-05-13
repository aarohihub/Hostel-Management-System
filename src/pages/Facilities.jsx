// import React from 'react';
// import san from '../assets/img/san.jpg';
// import laun from '../assets/img/laun.png';
// import meal from '../assets/img/meal.jpg';
// import safe from '../assets/img/safe.jpg';
// import water from '../assets/img/water.jpg';
// import cctv from '../assets/img/cctv.jpg';
// import park from '../assets/img/park.jpg';
// import college from '../assets/img/college.jpg';
// import "./Facilities.css"

// export const Facilities = () => {
//   return <div className='Fac'>

//     <div className='facc'>
//     <h1> FACILITIES </h1>
//     </div>

//     <div className='fac_section'>

//     <div class='card'>
//       <img src={san} alt="" />
//       <div class='intro'>
//         <h1>SANITATION</h1>
//         <p>Our facilities prioritize cleanliness and hygiene to ensure a safe and healthy environment 
//           for all residents. Regular cleaning and disinfection protocols are followed in all common areas 
//           and living spaces.</p>
//       </div>
//     </div>

//     <div className='card'>
//       <img src={laun} alt="" />
//       <div className='intro'>
//         <h1>LAUNDRY SERVICE</h1>
//         <p> Residents can enjoy the convenience of on-site laundry facilities or laundry service, 
//           making it easy to keep their clothes clean and fresh without leaving the premises.</p>
//       </div>
//     </div>

//     <div className='card'>
//       <img src={meal} alt=""  />
//       <div className='intro'>
//         <h1>HEARTY MEAL</h1>
//         <p>We offer nutritious and balanced meals prepared by experienced chefs, 
//           catering to various dietary preferences and requirements. Our menu emphasizes
//            fresh ingredients and wholesome cooking techniques to promote overall well-being.</p>
//       </div>
//     </div>

//     <div className='card'>
//       <img src={safe} alt="" />
//       <div className='intro'>
//         <h1>SAFE ENVIRONMENT</h1>
//         <p> Your safety is our top priority. Our premises are equipped with security 
//           features such as surveillance cameras, secure entry points, and trained staff
//            to ensure a safe and secure living environment for all residents.</p>
//       </div>
//     </div>

//     </div>

//     <div className='fac_section1'>

//     <div className='card1'>
//       <img src={water} alt=""  />
//       <div className='intro1'>
//         <h1>WATER FACILITY</h1>
//         <p>Residents have access to clean and safe drinking water at all times.
//            Our water facilities are regularly maintained to meet quality standards 
//            and ensure reliable access to fresh water.</p>
//       </div>
//     </div>

//     <div className='card1'>
//       <img src={cctv} alt=""  />
//       <div className='intro1'>
//         <h1>SECURITY</h1>
//         <p>We maintain round-the-clock security personnel and surveillance systems to
//            monitor and protect our premises. Residents can feel secure knowing that
//             their safety is our utmost concern.</p>
//       </div>
//     </div>

//     <div className='card1'>
//       <img src={park} alt=""  />
//       <div className='intro1'>
//         <h1>PARKING</h1>
//         <p> Ample parking space is available for residents and visitors, 
//           offering convenient and hassle-free parking options within close proximity to our facilities.</p>
//       </div>
//     </div>

//     <div className='card1'>
//       <img src={college} alt=""  />
//       <div className='intro1'>
//         <h1>COLLEGE</h1>
//         <p> Our location is conveniently situated near reputable colleges and educational 
//           institutions, providing easy access to academic resources and fostering a vibrant
//            community of students and scholars.</p>
//       </div>
//     </div>

//     </div>
//   </div>;
// };

import React from 'react';
import './Facilities.css';
import sanImage from '../assets/img/san.jpg';
import launImage from '../assets/img/laun.png';
import mealImage from '../assets/img/meal.jpg';
import safeImage from '../assets/img/safe.jpg';
import waterImage from '../assets/img/water.jpg';
import cctvImage from '../assets/img/cctv.jpg';
import parkImage from '../assets/img/park.jpg';
import collegeImage from '../assets/img/college.jpg';

export const Facilities = () => {
  return (
    <div className="facility-section">
      <div className='facc'>
        <h1> FACILITIES </h1>
      </div>

      <div className="facility" style={{ backgroundImage: `url(${sanImage})` }}>
        <div className='bgg'>
        <h3>Sanitation</h3>
        <p>Our facilities prioritize cleanliness and hygiene to ensure a safe and healthy environment for all residents. Regular cleaning and disinfection protocols are followed in all common areas and living spaces.</p>
      </div></div>

      <div className="facility" style={{ backgroundImage: `url(${launImage})` }}>
        <div className='bgg'>
        <h3>Laundry Service</h3>
        <p>We offer laundry services for your convenience.</p>
      </div></div>

      <div className="facility" style={{ backgroundImage: `url(${mealImage})` }}>
      <div className='bgg'>
        <h3>Healthy Meal</h3>
        <p>Enjoy nutritious meals prepared by our chefs.</p>
      </div></div>

      <div className="facility" style={{ backgroundImage: `url(${safeImage})` }}>
      <div className='bgg'>
        <h3>Safe Environment</h3>
        <p>Our premises are monitored to ensure a safe environment for all.</p>
      </div></div>

      <div className="facility" style={{ backgroundImage: `url(${waterImage})` }}>
      <div className='bgg'>
        <h3>Water Facility</h3>
        <p>Access to clean and safe drinking water is provided throughout the facility.</p>
      </div></div>

      <div className="facility" style={{ backgroundImage: `url(${cctvImage})` }}>
      <div className='bgg'>
        <h3>Security</h3>
        <p>We have 24/7 security personnel to ensure your safety.</p>
      </div></div>

      <div className="facility" style={{ backgroundImage: `url(${parkImage})` }}>
      <div className='bgg'>
        <h3>Parking</h3>
        <p>Ample parking space is available for your convenience.</p>
      </div></div>

      <div className="facility" style={{ backgroundImage: `url(${collegeImage})` }}>
        <div className='bgg'>
        <h3>College</h3>
        <p>Our location is near prestigious colleges and educational institutions, facilitating access to academic resources and fostering a vibrant community of students and scholars.</p>
      </div></div>
    </div>
  );
};










