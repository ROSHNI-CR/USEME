import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PricePage = () => {
  const [item, setItem] = useState('');
  const [weight, setWeight] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [showBookVerification, setShowBookVerification] = useState(false);
  const navigate = useNavigate();

  const prices = {
    plastic: 12,
    glass: 20,
    wood: 15,
    electronics: 25,
    others: 10,
  };

  const handleCalculatePrice = () => {
    const pricePerKg = prices[item.toLowerCase()] || 0;
    const calculatedPrice = pricePerKg * weight;
    setTotalPrice(calculatedPrice);
    setShowBookVerification(true);
  };

  const handleContinue = () => {
    navigate('/delivery'); // Navigate to the Delivery page
  };

  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#ffecb3', // Warm background color
      backgroundImage: 'url("https://example.com/your-background-image.jpg")', // Add a URL to a background image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#333',
      textAlign: 'center',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      maxWidth: '600px',
      margin: 'auto',
    }}>
      <h2 style={{ color: '#f57c00' }}>Select Item for Recycling</h2>
      <select onChange={(e) => setItem(e.target.value)} value={item} style={{ padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid #ccc' }}>
        <option value="">Select Item</option>
        <option value="Plastic">Plastic</option>
        <option value="Glass">Glass</option>
        <option value="Wood">Wood</option>
        <option value="Electronics">Electronics</option>
        <option value="Others">Others</option>
      </select>
      <br />
      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', margin: '10px 0' }}
      />
      <br />
      <button onClick={handleCalculatePrice} style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#f57c00', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '16px', margin: '10px 0' }}>
        Calculate Price
      </button>
      {showBookVerification && (
        <div>
          <h3 style={{ color: '#f57c00' }}>Total Price: {totalPrice} Rupees</h3>
          <p style={{ fontStyle: 'italic', color: '#555', margin: '10px 0' }}>
            Please note: The price of the product can change according to market value.
          </p>
          <button onClick={handleContinue} style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#4caf50', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '16px', margin: '10px 0' }}>
            Continue to Delivery
          </button>
        </div>
      )}
    </div>
  );
};

export default PricePage;
