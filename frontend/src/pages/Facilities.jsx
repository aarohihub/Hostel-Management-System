import React from "react";
import "./Facilities.css";
import sanImage from "../assets/img/san.jpg";
import launImage from "../assets/img/laun.png";
import mealImage from "../assets/img/meal.jpg";
import safeImage from "../assets/img/safe.jpg";
import waterImage from "../assets/img/water.jpg";
import cctvImage from "../assets/img/cctv.jpg";
import parkImage from "../assets/img/park.jpg";
import collegeImage from "../assets/img/college.jpg";

export const Facilities = () => {
  return (
    <div className="facility-section">
      <div className="facc">
        <h1> FACILITIES </h1>
      </div>

      <div className="facility" style={{ backgroundImage: `url(${sanImage})` }}>
        <div className="bgg">
          <h3>Sanitation</h3>
          <p>
            Our facilities prioritize cleanliness and hygiene to ensure a safe
            and healthy environment for all residents. Regular cleaning and
            disinfection protocols are followed in all common areas and living
            spaces.
          </p>
        </div>
      </div>

      <div
        className="facility"
        style={{ backgroundImage: `url(${launImage})` }}
      >
        <div className="bgg">
          <h3>Laundry Service</h3>
          <p>We offer laundry services for your convenience.</p>
        </div>
      </div>

      <div
        className="facility"
        style={{ backgroundImage: `url(${mealImage})` }}
      >
        <div className="bgg">
          <h3>Healthy Meal</h3>
          <p>Enjoy nutritious meals prepared by our chefs.</p>
        </div>
      </div>

      <div
        className="facility"
        style={{ backgroundImage: `url(${safeImage})` }}
      >
        <div className="bgg">
          <h3>Safe Environment</h3>
          <p>
            Our premises are monitored to ensure a safe environment for all.
          </p>
        </div>
      </div>

      <div
        className="facility"
        style={{ backgroundImage: `url(${waterImage})` }}
      >
        <div className="bgg">
          <h3>Water Facility</h3>
          <p>
            Access to clean and safe drinking water is provided throughout the
            facility.
          </p>
        </div>
      </div>

      <div
        className="facility"
        style={{ backgroundImage: `url(${cctvImage})` }}
      >
        <div className="bgg">
          <h3>Security</h3>
          <p>We have 24/7 security personnel to ensure your safety.</p>
        </div>
      </div>

      <div
        className="facility"
        style={{ backgroundImage: `url(${parkImage})` }}
      >
        <div className="bgg">
          <h3>Parking</h3>
          <p>Ample parking space is available for your convenience.</p>
        </div>
      </div>

      <div
        className="facility"
        style={{ backgroundImage: `url(${collegeImage})` }}
      >
        <div className="bgg">
          <h3>College</h3>
          <p>
            Our location is near prestigious colleges and educational
            institutions, facilitating access to academic resources and
            fostering a vibrant community of students and scholars.
          </p>
        </div>
      </div>
    </div>
  );
};
