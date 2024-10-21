import React, { useState, useEffect } from 'react';
import './NotHome.css'; 

const NotHome = () => {
  // Step 1: Initialize state for the counter
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState('');

  // Step 2: useEffect hook to reset the counter if it goes below 0
  // and show the message "You passed 5!" if counter > 5
  useEffect(() => {
    if (counter < 0) {
      setCounter(0);
      setMessage('Counter reset to 0');
    } else if (counter > 5) {
      setMessage('You passed 5!');
    } else {
      setMessage('');
    }
  }, [counter]);

  return (
    <div className="nothome-container">
      <h1>This is Not the Home Page!</h1>

      {/* Counter and buttons */}
      <div className="counter-container">
        <p>Counter: {counter}</p>
        <button onClick={() => setCounter(counter - 1)}>Decrease</button>
        <button onClick={() => setCounter(counter + 1)}>Increase</button>
        {/* Display the message */}
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default NotHome;
