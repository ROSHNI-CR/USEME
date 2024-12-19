import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Feedback = () => {
  const location = useLocation();
  const { plan } = location.state || { plan: 'Free Plan (Basic)' }; // Default to Free Plan if no state
  const [userFeedback, setUserFeedback] = useState('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleFeedbackChange = (e) => {
    setUserFeedback(e.target.value);
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    setFeedbackSubmitted(true);
    setUserFeedback(''); // Clear the input after submission
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#d3d3d3' }}> {/* Light grey background */}
      <h2>Feedback Page</h2>
      <p>You are currently subscribed to the {plan}.</p>

      <form onSubmit={handleFeedbackSubmit} style={{ marginTop: '30px' }}>
        <textarea
          value={userFeedback}
          onChange={handleFeedbackChange}
          placeholder="Your feedback..."
          rows="4"
          cols="50"
          style={{ margin: '10px 0', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          required
        />
        <br />
        <button type="submit" style={buttonStyle}>
          Submit Feedback
        </button>
      </form>

      {feedbackSubmitted && (
        <p style={{ marginTop: '20px', fontStyle: 'italic', color: 'green' }}>
          Thanks for your feedback!
        </p>
      )}
    </div>
  );
};

const buttonStyle = {
  padding: '10px 20px',
  borderRadius: '5px',
  backgroundColor: '#42a5f5',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  marginTop: '20px',
};

export default Feedback;
