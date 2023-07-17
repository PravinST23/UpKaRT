import React from 'react';
import { useSelector } from 'react-redux';
import './wishlist.css';
import Navbar from './Navbar';

const Wishlist = () => {
  const wishlist = useSelector(state => state.wishlist);

  return (
    <div className="wishlist">
      <Navbar />
      <div className="wishlistPage">
        <h1 className="pageTitle">Wishlist</h1>
        <div className="wishlistItems">
          {wishlist.map((item, index) => (
            <div className="wishlistItem" key={index}>
              <div
                className="wishlistItemImage"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="wishlistItemDetails">
                <h2 className="wishlistItemName">{item.name}</h2>
                <p className="wishlistItemPrice">₹ {item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
