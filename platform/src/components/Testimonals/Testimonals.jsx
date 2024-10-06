import React, { useState, useEffect } from 'react';
import AOS from 'aos';  // Import AOS library
import 'aos/dist/aos.css';  // Import AOS styles
import './Testimonals.css'; // Import custom CSS

const images = [
  require('../../assests/images/abc.jpg'),        // Update paths as needed
  require('../../assests/images/abc2.jpg'),
  require('../../assests/images/YouAreSONice.jpg')
];

const paragraphs = [
  {
    id: 1,
    text: "I am so satisfied with Langmobile that I have recommended it to those around me. This school saved our lives during the pandemic, when everything was closed and there was no more activities to do. Since my daughter started taking English and Spanish lessons, she has made a lot of progress! She loves interacting with her teachers. Also, the administrative staff is very courteous and proactive. Bravo Langmobile and thank you for giving our children the chance to open up to the world from a young age!"
  },
  {
    id: 2,
    text: "My daughter took private lessons with Anna. What a pleasure to hear her speak with ease in English! She gained a lot of confidence. This was reflected in her lessons at school and she was even accepted into an intensive English program for the next school year. At home and in everyday life, she easily switches from English to French. It is very nice to see the progress she has made."
  },
  {
    id: 3,
    text: "Our two children aged 8 and 10 have benefited enormously from Langmobile. It was very playful, in the form of a game, and very spontaneous. The teachers easily adapted to the children's needs and preferences. They quickly gained confidence and are much more comfortable speaking in English. Our daughter is now enrolled in Intensive English at school!"
  }
];

const Testimonals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1200 });  // Initialize AOS with a default duration
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slide-show-container" data-aos="fade-up">
      <div className="title">
        <div className="sticker" data-aos="zoom-in">What Our Happy Customers Say</div>
      </div>
      <div className="paragraph-container" data-aos="fade-up" data-aos-delay="300">
        <div className="paragraph" data-aos="fade-right" data-aos-delay="500">
          <div className="sticker-corner top-left">⭐</div>
          <div className="sticker-corner bottom-right">📚</div>
          <p>{paragraphs[currentIndex].text}</p>
        </div>
        <div className="image-container" data-aos="zoom-in" data-aos-delay="700">
          <img src={images[currentIndex]} alt="Illustration" className="circle-image" />
        </div>
        <div className="dots-container" data-aos="fade-up" data-aos-delay="900">
          {paragraphs.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonals;
