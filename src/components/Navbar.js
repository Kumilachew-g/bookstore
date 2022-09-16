import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h1>Bookstore CMS</h1>
    <Link to="/" className="navbar-links">
      Books
    </Link>
    <Link to="/categories" className="navbar-links">
      Categories
    </Link>
  </nav>
);

export default Navbar;
