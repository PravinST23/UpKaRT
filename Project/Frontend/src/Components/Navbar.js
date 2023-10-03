import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import { BsArrowLeft } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Navbar.css';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const wishlist = useSelector((state) => state.wishlist);
  const cart = useSelector((state) => state.cart);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const userRole = useSelector((state) => state.role);
  const reduxEmail = useSelector((state) => state.email);
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarLinkClick = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8181/api/v1/auth/email');
        const userDetails = response.data;
        dispatch({ type: 'SET_DETAILS', payload: userDetails });
        if (userDetails) {
          const loggedInUserDetails = userDetails.find((user1) => user1.email === reduxEmail);
          if (loggedInUserDetails) {
            setLoggedInUser(loggedInUserDetails);
          }
        }
      } catch (error) {
        alert(error.message);
      }
    };

    fetchProfileData();
  }, [dispatch, reduxEmail]);

  return (
    <div>
      <nav className="navbar">
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <FaBars />
        </button>
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
              <span className="cart-count">({cart.length})</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-sidebar" onClick={toggleSidebar}>
          <BsArrowLeft />
        </button>
        <div className="sidebar-content">
          <h1 style={{ paddingLeft: '30px', color: 'black' }}>UpKaRT</h1>
          {loggedInUser ? (
            <p>Hello {loggedInUser.name}</p>
          ):(<p>Hello Guest</p>)}
          <Link to="/profile" onClick={handleSidebarLinkClick}>
            Profile
          </Link>
          {userRole === 'Vendor' && (
            <Link to="/vendor" onClick={handleSidebarLinkClick}>
              New Product?
            </Link>
          )}
          <Link to="/wishlist" onClick={handleSidebarLinkClick}>
            Wishlist ({wishlist.length})
          </Link>
          <Link to="/support" onClick={handleSidebarLinkClick}>
            Support
          </Link>
          <Link to="/" onClick={handleSidebarLinkClick}>
            Sign off
            <div className="logging-bar">
              <FiLogOut />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
