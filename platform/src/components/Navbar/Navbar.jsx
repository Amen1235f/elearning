// src/components/Navbar/Navbar.jsx
import React from "react";
import { Link } from 'react-router-dom';
import cap from "../../assests/images/cap.png";
import abcBlock from "../../assests/images/abc-block.png";
import playtime from "../../assests/images/playtime.png";
import maternity from "../../assests/images/maternity.png";
import littleKid from "../../assests/images/little-kid.png";
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={cap} alt="Logo" />
        <span className="et">
          <span className="letter" style={{ color: "#FF5733", fontSize: "larger" }}>E</span>
          <span className="letter" style={{ color: "#FFC300", fontSize: "larger" }}>D</span>
          <span className="letter" style={{ color: "#DAF7A6", fontSize: "larger" }}>U</span>
          <span className="letter" style={{ color: "#FF33FF", fontSize: "larger" }}>T</span>
          <span className="letter" style={{ color: "#33FF57", fontSize: "larger" }}>E</span>
          <span className="letter" style={{ color: "#33C1FF", fontSize: "larger" }}>C</span>
          <span className="letter" style={{ color: "#FF5733", fontSize: "larger" }}>H</span>
        </span>
      </div>
      <ul className="liste">
        <li className="list-item">
          <Link to="/lessons">
            <img src={abcBlock} alt="Learn" />
            <span>Learn</span>
          </Link>
        </li>
        <li className="list-item">
          <img src={playtime} alt="Challenges" />
          <span>Challenges</span>
        </li>
        <li className="list-item">
          <img src={maternity} alt="Certifications" />
          <span>Certifications</span>
        </li>
        <li className="list-item">
          <img src={littleKid} alt="Contact" />
          <span>Contact</span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
