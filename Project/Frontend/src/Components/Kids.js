import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Men.css'; // You can use the same CSS file as in Men.js and Women.js
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Kids = () => {
  const wishlist = useSelector(state => state.wishlist);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [kidsProducts, setKidsProducts] = useState([]);
  const loggedInUserId = useSelector(state => state.set.find(item => item.email === state.email)?.id);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetchKidsProducts();
  }, []);

  const fetchKidsProducts = () => {
    axios.get('http://127.0.0.1:8080/kids')
      .then(response => {
        setKidsProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleAddToWishlist = (item) => {
    const isItemInWishlist = wishlist.some(wishlistItem => wishlistItem.name === item.name);
    dispatch({ type: 'ADD_TO_WISHLIST', payload: item });

    if (!isItemInWishlist) {
      toast.success("Product added successfully");
    }
  };
  
  const handleAddToCart = (item) => {
    const isItemInCart = cart.some(cartItem => cartItem.product.id === item.id);
    if (!isItemInCart) {
      const cartItem = {
        product: item,
        userId: loggedInUserId, 
        quantity: 1
      };
      axios.post('http://127.0.0.1:8080/api/cart', cartItem)
        .then(response => {
          dispatch({ type: 'ADD_TO_CART', payload: response.data });
          toast.success("Product added successfully");
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      toast.warning("Product is already added");
    }
  };

  // Filter the products based on the search input value
  const filteredProducts = kidsProducts.filter(item =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <Navbar cartCount={cart.length} />
      <div className="menu">
        <div className="menuHeader">
          <h1 className="menuTitle" style={{paddingLeft:'410px'}}>TimeTrekker</h1>
          <div className="search-container">
            <div className="search">
              <div className="searchIcon">
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <input
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="menuList">
          {filteredProducts.map((item, index) => (
            <div className="menuItem" key={index}>
              <div className="menuItemImg" style={{ backgroundImage: `url(data:image/jpeg;base64,${item.image})` }} />
              <div className='product-img-details'>
                <h2 className="menuItemName">{item.name}</h2>
                <p style={{ paddingBottom: "0px" }} className="stock">stock: {item.stock}</p>
              </div>
              <p className="menuItemPrice">₹ {item.price}</p>
              <div className="menuIcons">
                <div
                  className={`wishlistIcon ${wishlist.some(wishlistItem => wishlistItem.name === item.name) ? 'wishlistClicked' : ''}`}
                  onClick={() => handleAddToWishlist(item)}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <div
                  className={`cartIcon ${cart.some(cartItem => cartItem.product.id === item.id) ? 'cartClicked' : ''}`}
                  onClick={() => handleAddToCart(item)}
                >
                  <FontAwesomeIcon icon={faCartPlus} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kids;
