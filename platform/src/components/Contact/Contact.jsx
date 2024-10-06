import React from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import './Contact.css'; // Import custom CSS for the component
import { FaFacebook, FaLinkedin, FaInstagram, FaEnvelope, FaHome, FaRocket, FaGamepad, FaGraduationCap, FaUsers, FaBook } from 'react-icons/fa'; // Importing icons
import AOS from 'aos'; // Import AOS library

const Contact = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="contact-container" data-aos="fade-up">
      {/* Contact Header */}
      <div className="contact-header">
        <div className="contact-header-line" />
        <h1 className="contact-title">Connect with Us! 🌟</h1>
        <div className="contact-header-line" />
      </div>

      {/* Contact Card */}
      <div className="contact-card">
        <div className="contact-content">
          {/* Column 1 */}
          <div className="contact-column">
            <h2 className="contact-column-title">Our Mission</h2>
            <p className="contact-column-text">
              <FaHome className="icon" /> <span className="highlighted-text">Langmobile</span> is dedicated to creating fun and educational programs for kids.
            </p>
          </div>

          {/* Column 2 */}
          <div className="contact-column">
            <h2 className="contact-column-title">Programs</h2>
            <p className="contact-column-text"><FaRocket className="icon" /> <span className="highlighted-text">Summer Camps</span> - Blast off into fun!</p>
            <p className="contact-column-text"><FaGamepad className="icon" /> Online Classes - Learning through play!</p>
            <p className="contact-column-text"><FaGraduationCap className="icon" /> Online Adult Classes - Cool & relaxed learning!</p>
          </div>

          {/* Column 3 */}
          <div className="contact-column">
            <h2 className="contact-column-title">Workshops</h2>
            <p className="contact-column-text"><FaUsers className="icon" /> In-Person Classes - Meet and greet new friends!</p>
            <p className="contact-column-text"><FaGamepad className="icon" /> After-School Workshops - Fun & learning combined!</p>
            <p className="contact-column-text"><FaBook className="icon" /> CPE & Daycare Workshops - Engaging activities for little ones!</p>
          </div>

          {/* Column 4 */}
          <div className="contact-column">
            <h2 className="contact-column-title">Get in Touch</h2>
            <p className="contact-column-text"><FaBook className="icon" /> Lifestyle Blog - Tips for <span className="highlighted-text">Super Parents</span> and <span className="highlighted-text">Awesome Kids</span>!</p>
            <p className="contact-column-text"><FaGamepad className="icon" /> Educational Games - Learn while having fun!</p>
            <p className="contact-column-text"><FaUsers className="icon" /> Careers - Join our <span className="highlighted-text">Fun Team</span>!</p>
            <p className="contact-column-text"><FaBook className="icon" /> About Us - Discover our <span className="highlighted-text">Superpowers</span>!</p>
            <p className="contact-column-text"><FaUsers className="icon" /> Our Team - Meet our <span className="highlighted-text">Superheroes</span>!</p>
            <p className="contact-column-text"><FaEnvelope className="icon" /> Contact Us - We’re <span className="highlighted-text">Here to Help!</span></p>
          </div>
        </div>
      </div>

      {/* Footer with Social Media Icons */}
      <div className="contact-footer">
        <div className="contact-footer-buttons">
          <button className="social-button facebook"><FaFacebook className="icon" /> Facebook</button>
          <button className="social-button linkedin"><FaLinkedin className="icon" /> LinkedIn</button>
          <button className="social-button instagram"><FaInstagram className="icon" /> Instagram</button>
          <button className="social-button email"><FaEnvelope className="icon" /> Email Us</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
