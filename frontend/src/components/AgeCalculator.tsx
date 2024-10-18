import React, { useState } from 'react';

const AgeCalculator = () => {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!dob) {
      setError('Please enter your date of birth.');
      return;
    }
  
    try {
      const response = await fetch('/api/calculate-age/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Ensuring JSON is being sent
        },
        body: JSON.stringify({ dob }), // Sending the dob as JSON
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setAge(data.age);
        setError('');
      } else {
        setError(data.message || 'Something went wrong.');
      }
    } catch (error) {
      setError('Error calculating age.');
    }
  };
  return (
    <div>
      <h1>Age Calculator</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <button type="submit">Calculate Age</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {age !== null && <p>Your age is: {age}</p>}
    </div>
  );
};

export default AgeCalculator;
