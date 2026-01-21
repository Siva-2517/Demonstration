import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // optional CSS

const Navbar = () => {
  return (
    <nav className="link">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
