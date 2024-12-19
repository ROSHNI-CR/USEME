import React, { useState } from 'react';
import backgroundImage from './signup.jpeg';

function SignUpPage({ navigateToPremiumPage }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!name || !email || !password) {
      setErrorMessage("All fields are required!");
      return;
    }

    console.log({ name, email, password });
    setSuccessMessage("Sign up successful!");
    setSignupSuccess(true);
  };

  return (
    <div 
      style={{ 
        textAlign: 'center', 
        padding: '50px', 
        height: '100vh', 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ marginBottom: 'auto' }}>
        <h2 style={{ color: 'black' }}>Sign Up</h2>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        <form onSubmit={handleSubmit} style={{ display: 'inline-block', marginTop: '20px', textAlign: 'center' }}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ display: 'block', margin: '10px auto', padding: '10px', width: '200px' }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ display: 'block', margin: '10px auto', padding: '10px', width: '200px' }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ display: 'block', margin: '10px auto', padding: '10px', width: '200px' }}
          />
          <button type="submit" style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Sign Up
          </button>
        </form>
      </div>
      {signupSuccess && (
        <div style={{ marginTop: 'auto', padding: '20px' }}>
          <button 
            onClick={navigateToPremiumPage} 
            style={{ 
              padding: '10px 20px', 
              fontSize: '16px', 
              backgroundColor: 'blue', 
              color: 'white', 
              border: 'none', 
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
}

export default SignUpPage;
