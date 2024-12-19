// src/components/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Welcome to Our Website</h1>
      <button onClick={handleGetStarted} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Get Started
      </button>
    </div>
  );
}

export default HomePage;
