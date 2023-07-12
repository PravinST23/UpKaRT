import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import './Navbar.css'; 

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const user = {
    name: 'Pravin' 
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    
      <nav className="navbar">
        <div className="navbar-toggle" onClick={toggleDropdown}>
          <FaBars />
        </div>
        <div className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
          <p>Hello {user.name}</p>
          <Link to="/account-settings">Account Settings</Link>
          <Link to="/wish">Wishlist</Link>
          <Link to="/support">Support</Link>
          <Link to="/">Sign out</Link>
        </div>
        <Link to="/home" className="navbar-logo">
          UpKaRT
        </Link>
        <ul className="nav-items">
          <li>
            <Link to="/men">Men</Link>
          </li>
          <li>
            <Link to="/women">Women</Link>
          </li>
          <li>
            <Link to="/kids">Kids</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/cart" className="cart-icon">
              <FaShoppingCart />
            </Link>
          </li>
        </ul>
      </nav>
    
  );
};

export default Navbar;
