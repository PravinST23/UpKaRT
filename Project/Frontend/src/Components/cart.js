import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './cart.css';
import Navbar from './Navbar';
import { RiCloseCircleFill } from 'react-icons/ri';
import { removeFromCart, updateCart } from "./cartActions";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const email = useSelector(state => state.email);
  const details = useSelector(state => state.set);
  const userWithMatchingEmail = details.find(user => user.email === email);
  const loggedInUserId = userWithMatchingEmail ? userWithMatchingEmail.id : null;

  const dispatch = useDispatch();

  const [quantities, setQuantities] = useState([]);

  useEffect(() => {
    // Initialize quantities when cart changes
    setQuantities(cart.map(item => item.quantity));
  }, [cart]);

  useEffect(() => {
    if (loggedInUserId) {
      axios.get(`http://127.0.0.1:8080/api/cart/${loggedInUserId}`)
        .then(response => {
          const quantitiesFromApi = response.data.map(item => item.quantity);
          setQuantities(quantitiesFromApi);
          dispatch(updateCart(response.data));
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [loggedInUserId, dispatch]);

  const handleIncreaseQuantity = (index, cartItemId) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] += 1;
    setQuantities(updatedQuantities);
  
    // axios.post(`http://127.0.0.1:8080/api/cart/${cartItemId}/increaseQuantity`, { userId: loggedInUserId })
    //   .then(response => {
    //     dispatch(updateCart(response.data));
    //   })
    //   .catch(error => {
    //     console.log("Failed to increase quantity:", error);
    //   });
  };
  
  const handleDecreaseQuantity = (index, cartItemId) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] = Math.max(1, updatedQuantities[index] - 1);
    setQuantities(updatedQuantities);
  
    // axios.post(`http://127.0.0.1:8080/api/cart/${cartItemId}/decreaseQuantity`, { userId: loggedInUserId })
    //   .then(response => {
    //     dispatch(updateCart(response.data));
    //   })
    //   .catch(error => {
    //     console.log("Failed to decrease quantity:", error);
    //   });
  };
  
  const handleRemoveItem = (index, cartItemId) => {
    axios.delete(`http://127.0.0.1:8080/api/cart/${cartItemId}`)
      .then(response => {
        dispatch(removeFromCart(cartItemId));
        const updatedQuantities = [...quantities];
        updatedQuantities.splice(index, 1);
        setQuantities(updatedQuantities);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="addToCartPage">
        <h1 className="pageTitle">Cartropolis</h1>
        <div className="cartItems">
          {cart.map((item, index) => (
            <div className="cartItem" key={index}>
              <div className="removeIcon" onClick={() => handleRemoveItem(index, item.id)}>
                <RiCloseCircleFill />
              </div>
              <div className="cartItemImage" style={{ backgroundImage: `url(data:image/jpeg;base64,${item.product.image})` }}></div>
              <div className="cartItemDetails">
                <h2 className="cartItemName">{item.product.name}</h2>
                <p className="cartItemPrice">₹ {item.product.price * quantities[index]}</p>
                <div className="quantityButtons">
                  <button onClick={() => handleDecreaseQuantity(index, item.id)}>-</button>
                  <span className="quantityValue">{quantities[index]}</span>
                  <button onClick={() => handleIncreaseQuantity(index, item.id)}>+</button>
                </div>
                <div className="move">
                  <button className="cartbutton">
                    <Link to="/payment" style={{ textDecoration: "none", WebkitTextFillColor: "white" }}>
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

export default Cart;