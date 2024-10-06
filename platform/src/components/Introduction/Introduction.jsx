import React from "react";
import "./Introduction.css"; // Import CSS for Introduction component
import portraityoungstudenteducationday from "../../assests/images/portrait-young-student-education-day.png";

const Introduction = () => {
  return (
    <div className="intro-container">
      <div className="intro-left">
        <h1 className="intro-title">Home-Learn More About Courses</h1>
        <div className="cadre-container">
          <div className="cadre cadre1">
            <p className="p1">Online</p>
          </div>
          <div className="cadre cadre2">
            <p className="p2">Course</p>
          </div>
        </div>
        <p className="intro-description">
          We offer several different classes to learn a language from home through a wide variety of themes!
          Understand your child’s level by following our descriptions of levels.
        </p>
        <button className="start-button">START</button>
      </div>
      <div className="intro-right">
        <img
          src={portraityoungstudenteducationday}
          alt="Web Development"
          className="imag"
        />
      </div>
    </div>
  );
};

export default Introduction;
