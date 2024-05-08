import React from "react";
import hpage from "../assets/img/hpage.jpg";
import "./About.css";

export const About = () => {
  return (
    <div className="about_section">
      <div className="title1">
        <h1> ABOUT US </h1>
      </div>
      <div class="container">
        <div className="imagee">
          <img class="container_image" src={hpage} />
        </div>

        <div class="container_text">
          <h2>Bright Future Hostel</h2>
          <br />
          <div className="para">
            <p>
              <j>
                <b>
                  <u>Welcome to Bright Future Hostel</u>
                </b>
                , your home away from home. Nestled in the heart of the city, we
                offer <br /> modern accommodations and a vibrant community
                atmosphere. With state-of-the-art facilities <br /> and a
                commitment to sustainability, we provide the perfect environment
                for students, travelers,
                <br /> and professionals alike. Join us and experience comfort,
                convenience, and camaraderie
                <br /> at Bright Future Hostel.
              </j>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
