import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignUpPage from './components/SignUpPage';
import PremiumPage from './components/PremiumPage';
import Click from './components/Click';
import PricePage from './components/PricePage';
import Delivery from './components/Delivery';
import Feedback from './components/Feedback';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', background: '#f0f0f0', marginBottom: '20px' }}>
        <Link to="/">Home</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/premium">Premium</Link>
        <Link to="/click">Click</Link>
        <Link to="/delivery">Delivery</Link>
        <Link to="/feedback">Feedback</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpWrapper />} />
        <Route path="/premium" element={<PremiumPage />} />
        <Route path="/click" element={<Click />} />
        <Route path="/price" element={<PricePage />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

// Wrapper for SignUpPage to handle navigation
const SignUpWrapper = () => {
  const navigate = useNavigate();

  const navigateToPremiumPage = () => {
    navigate('/premium');
  };

  return <SignUpPage navigateToPremiumPage={navigateToPremiumPage} />;
};

export default App;
