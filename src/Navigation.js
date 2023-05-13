import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import './Navigation.css'; // Import CSS file for styling

function Navigation() {
  return (
    <nav className="navigation">
      <div className="logo">Thomas</div>
      <ul className="menu">
        <li>
          <Link to="/" className="link">
            <FaHome className="icon" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="link">
            <FaUser className="icon" />
            About
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className="link">
            <FaBriefcase className="icon" />
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/contact" className="link">
            <FaEnvelope className="icon" />
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
