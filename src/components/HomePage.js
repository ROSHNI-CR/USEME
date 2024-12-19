import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import backgroundImage from './background.jpg'; // Background image
import aboutImage from './aboutus.jpeg'; // About Us image

function HomePage() {
  const navigate = useNavigate(); // Use the useNavigate hook
  const [isAboutVisible, setAboutVisible] = useState(false);

  const handleAboutClick = () => {
    setAboutVisible(true);
  };

  const handleCloseAbout = () => {
    setAboutVisible(false);
  };

  const handleGetStarted = () => {
    navigate('/signup'); // Navigate to the Sign Up page
  };

  return (
    <div className="homepage" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <button className="about-button" onClick={handleAboutClick}>
        About Us
      </button>
      {isAboutVisible && (
        <div className="about-modal">
          <img src={aboutImage} alt="About Us" className="about-image" />
          <button className="close-button" onClick={handleCloseAbout}>
            X
          </button>
        </div>
      )}
      <button className="get-started-button" onClick={handleGetStarted}>
        Get Started
      </button>
    </div>
  );
}

export default HomePage;
