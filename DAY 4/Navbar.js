import { useState } from 'react';
import { FaShoppingCart, FaBars} from 'react-icons/fa';
import { BsArrowLeft } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const user = {
    name: 'Pravin' 
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="navbar">
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-sidebar" onClick={toggleSidebar}>
          <BsArrowLeft />
        </button>
        <div className="sidebar-content">
        <h1 style={{paddingLeft : "20px"}}> UpKaRT</h1>
          <p style={{paddingTop : "20px"}}>Hello {user.name}</p>
          <Link to="/account-settings">Account Settings</Link>
          <Link to="/wish">Wishlist</Link>
          <Link to="/support">Support</Link>
          <Link to="/">Sign out 
          <div className='logging-bar'>
          <FiLogOut/>
          </div>
          </Link>
        </div>
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
