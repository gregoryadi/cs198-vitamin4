// Import React
import React from 'react';
// Import Link from react-router-dom to navigate between pages
import { Link } from 'react-router-dom';
// Import the CSS file for styling
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/nothome">Not Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
