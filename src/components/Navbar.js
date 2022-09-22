import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../assets/images/profile.png'

const Navbar = () => (
  <nav className='navbar'>
    <h1>Bookstore CMS</h1>
    <div className='links'>
      <Link to='/' className='navbar-links'>
        Books
      </Link>
      <Link to='/categories' className='navbar-links'>
        Categories
      </Link>
    </div>
    <div className="profile">
      <img src={profile} alt="profile" />
    </div>
  </nav>
  </nav>
);

export default Navbar;
