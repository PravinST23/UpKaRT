import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Men.css';
import Navbar from './Navbar';
import { MenItem } from './MenItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons';

const Men = () => {
  const wishlist = useSelector(state => state.wishlist);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [popupMessage, setPopupMessage] = useState('');

  const handleAddToWishlist = (item) => {
    dispatch({ type: 'ADD_TO_WISHLIST', payload: item });
    setPopupMessage('Product added to wishlist');
  };

  const handleAddToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
    setPopupMessage('Product added to cart');
  };

  const isItemInWishlist = (item) => {
    return wishlist.some(wishlistItem => wishlistItem.name === item.name);
  };

  const isItemInCart = (item) => {
    return cart.some(cartItem => cartItem.name === item.name);
  };

  const handlePopupClose = () => {
    setPopupMessage('');
  };

  return (
    <div className="backbg">
      <Navbar cartCount={cart.length} />
      <div className="menu">
        <h1 className="menuTitle">Watch Decorum</h1>
        <div className="menuList">
          {MenItem.map((item, index) => (
            <div className="menuItem" key={index}>
              <div className="menuItemImg" style={{ backgroundImage: `url(${item.image})` }}></div>
              <h2 className="menuItemName">{item.name}</h2>
              <p className="menuItemPrice">₹ {item.price}</p>
              <div className="menuIcons">
                <div
                  className={`wishlistIcon ${isItemInWishlist(item) ? 'wishlistClicked' : ''}`}
                  onClick={() => handleAddToWishlist(item)}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <div
                  className={`cartIcon ${isItemInCart(item) ? 'cartClicked' : ''}`}
                  onClick={() => handleAddToCart(item)}
                >
                  <FontAwesomeIcon icon={faCartPlus} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {popupMessage && (
        <div className="popupContainer">
          <div className="popup">
            <p>{popupMessage}</p>
            <button className="popupClose" onClick={handlePopupClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Men;
