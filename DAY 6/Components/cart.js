// AddToCart.js

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './cart.css';
import Navbar from './Navbar';

const AddToCart = () => {
  const cart = useSelector(state => state.cart);

  return (
    <div className='cart'>
      <Navbar />
      <div className="addToCartPage">
        <h1 className="pageTitle">Cartropolis</h1>
        <div className="cartItems">
          {cart.map((item, index) => (
            <div className="cartItem" key={index}>
              <div className="cartItemImage" style={{ backgroundImage: `url(${item.image})` }}></div>
              <div className="cartItemDetails">
                <h2 className="cartItemName">{item.name}</h2>
                <p className="cartItemPrice">₹ {item.price}</p>
                <div className='move'>
                  <button className='cartbutton' >
                    <Link to='/payment' style={{ textDecoration : "none" , WebkitTextFillColor : "white"}}>
                      Buy now
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
