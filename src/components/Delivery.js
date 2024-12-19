import React, { useState } from 'react';
import deliveryImage from '../images/delivery.jpeg';

const Delivery = () => {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [pointsEarned, setPointsEarned] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0); // New state for total points

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handleItemChange = (e) => {
    setNumberOfItems(e.target.value);
  };

  const handleAwardClick = () => {
    let pointsPerItem = 0;

    switch (selectedPlan) {
      case 'Free Plan (Basic)':
        pointsPerItem = 1;
        break;
      case 'Green Starter Plan':
        pointsPerItem = 1.2;
        break;
      case 'Eco Enthusiast Plan':
        pointsPerItem = 1.5;
        break;
      case 'Zero Waste Champion Plan':
        pointsPerItem = 2;
        break;
      default:
        pointsPerItem = 0;
    }

    const earnedPoints = pointsPerItem * numberOfItems;
    setPointsEarned(earnedPoints);
    setTotalPoints((prevTotal) => prevTotal + earnedPoints); // Update total points

    // Updated alert message
    
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>Delivery Page</h2>
      <img src={deliveryImage} alt="Delivery Example" style={{ maxWidth: '100%', height: 'auto' }} />
      <br />
      <div>
        <h3>Select Your Plan</h3>
        <div>
          {plans.map((plan, index) => (
            <button 
              key={index} 
              onClick={() => handlePlanSelect(plan.name)} 
              style={{
                padding: '10px 20px',
                fontSize: '16px',
                cursor: 'pointer',
                margin: '5px',
                backgroundColor: selectedPlan === plan.name ? '#42a5f5' : '#ddd',
                color: selectedPlan === plan.name ? '#fff' : '#333',
                border: 'none',
                borderRadius: '5px',
              }}
            >
              {plan.name}
            </button>
          ))}
        </div>
      </div>
      <input 
        type="number" 
        min="0" 
        value={numberOfItems} 
        onChange={handleItemChange} 
        placeholder="Enter number of items" 
        style={{ margin: '20px 0', padding: '10px', fontSize: '16px' }} 
      />
      <button 
        onClick={handleAwardClick} 
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: 'blue',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          transition: 'background-color 0.3s ease',
        }}
      >
        Award Points
      </button>
      {pointsEarned > 0 && (
        <div style={{ marginTop: '20px', color: '#4caf50' }}>
          <h4>You have earned {pointsEarned} points!</h4>
        </div>
      )}
      <div style={{ marginTop: '20px' }}>
        <h4>Total Award Points: {totalPoints}</h4> {/* Display total points */}
      </div>
    </div>
  );
};

const plans = [
  {
    name: 'Free Plan (Basic)',
    points: '0 points',
    features: 'Basic waste identification services, 1x points for each recyclable submission.',
  },
  {
    name: 'Green Starter Plan',
    points: '500 points per month',
    features: 'Unlimited waste submissions, 1.2x points multiplier on recyclables submitted.',
  },
  {
    name: 'Eco Enthusiast Plan',
    points: '1,000 points per month',
    features: 'All features of Green Starter Plan, 1.5x points multiplier on recyclables submitted.',
  },
  {
    name: 'Zero Waste Champion Plan',
    points: '2,000 points per month',
    features: 'All features of Eco Enthusiast Plan, personal waste reduction plan.',
  },
];

export default Delivery;