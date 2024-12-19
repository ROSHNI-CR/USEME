import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PremiumPage = () => {
  const [subscribedPlan, setSubscribedPlan] = useState(null); // Track single subscription
  const [message, setMessage] = useState(''); // State for messages
  const navigate = useNavigate();

  const handleSubscribe = (index) => {
    if (subscribedPlan !== null) {
      setMessage(`You are already subscribed to the ${plans[subscribedPlan].name} plan based on your award points.`);
    } else {
      setSubscribedPlan(index); // Set the current plan as subscribed
      setMessage(`Congrats! You are now part of the ${plans[index].name}.`);
    }
  };

  const handleContinue = () => {
    navigate('/click'); // Navigate to the Click page
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: '#1976d2' }}>Choose Your Plan</h2>
      <div>
        {plans.map((plan, index) => (
          <div key={index} style={planStyle}>
            <h3>{plan.name}</h3>
            <p>Points Required: {plan.points}</p>
            <p>{plan.features}</p>
            <button onClick={() => handleSubscribe(index)} style={buttonStyle}>Subscribe</button>
            {subscribedPlan === index && (
              <p style={{ marginTop: '10px', color: '#4caf50' }}>
                You are now part of the {plan.name}.
              </p>
            )}
          </div>
        ))}
      </div>
      {message && <p style={{ color: '#ff5722', marginTop: '20px' }}>{message}</p>} {/* Display message */}
      <button onClick={handleContinue} style={continueButtonStyle}>
        Continue to Click Page
      </button>
    </div>
  );
};

const containerStyle = {
  padding: '20px',
  background: 'linear-gradient(to right, #ffeb3b, #ffc107)',
  color: '#333',
  textAlign: 'center',
  borderRadius: '10px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  maxWidth: '600px',
  margin: 'auto',
  paddingBottom: '40px',
};

const buttonStyle = {
  padding: '10px 20px',
  borderRadius: '5px',
  backgroundColor: '#42a5f5',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  margin: '10px 0',
};

const continueButtonStyle = {
  padding: '10px 20px',
  borderRadius: '5px',
  backgroundColor: '#4caf50',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  marginTop: '10px',
};

const plans = [
  {
    name: 'Free Plan (Basic)',
    points: '0 points',
    features: 'Basic waste identification services, 1x points for each recyclable submission, 20 submissions/photos per month.',
  },
  {
    name: 'Green Starter Plan',
    points: '500 points per month',
    features: 'Unlimited waste submissions, 1.2x points multiplier on recyclables submitted, priority market value updates.',
  },
  {
    name: 'Eco Enthusiast Plan',
    points: '1,000 points per month',
    features: 'All features of Green Starter Plan, 1.5x points multiplier on recyclables submitted, real-time market value updates.',
  },
  {
    name: 'Zero Waste Champion Plan',
    points: '2,000 points per month',
    features: 'All features of Eco Enthusiast Plan, personal waste reduction plan, access to eco-friendly workshops.',
  },
];

const planStyle = {
  margin: '20px 0',
};

export default PremiumPage;
