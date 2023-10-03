import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Vendor.css';
import Navbar from './Navbar';
import axios from 'axios';
import './Men.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Vendor = () => {

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productStock, setProductStock] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [targetAudience, setTargetAudience] = useState('');
  const [popupMessage, setPopupMessage] = useState('');
  const email = useSelector(state => state.email);
  const details = useSelector(state => state.set);
  console.log(details);
  const userWithMatchingEmail = details.find(user => user.email === email);
  const vendorId = userWithMatchingEmail ? userWithMatchingEmail.id : null;


  const handleAddProduct = async (e) => {
    e.preventDefault();

    if (!productImage) {
      setPopupMessage('Please select an image');
      return;
    }

    const formData = new FormData();
    formData.append('file', productImage);
    formData.append('name', productName);
    formData.append('price', productPrice);
    formData.append('stock', productStock);
    formData.append('category', targetAudience);
    formData.append('vendorId', vendorId); 

    try {
      const response = await axios.post('http://127.0.0.1:8080/products', formData);
      toast.success(response.data);
    } catch (error) {
      console.log(error);
      setPopupMessage('Error occurred during product addition');
    }
    setProductImage(null);
    setProductName('');
    setProductPrice('');
    setProductStock('');
    setTargetAudience('');
  };

  const handlePopupClose = () => {
    setPopupMessage('');
  };

  const handleDropdownChange = (event) => {
    setTargetAudience(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setProductImage(file);
  };

  return (
    <div>
      <Navbar />
      <div className="vendorContainer">
        <h1 className="vendorTitle">New Product?</h1>
        <div className="vendorForm">
          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />

          <select style={{borderColor:'lightgrey'}}
            className="dropdown-select"
            value={targetAudience}
            onChange={handleDropdownChange}
          >
            <option value="" disabled hidden>
              Category
            </option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>

          <input
            type="text"
            placeholder="Product Price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />

          <input
            type="number"
            placeholder="Product Stock"
            value={productStock}
            onChange={(e) => setProductStock(e.target.value)}
          />

          <input style={{borderColor:'lightgrey'}}
            type="file"
            id="productImage"
            className="image-input"
            accept="image/*"
            onChange={handleImageChange}
          />

          <button onClick={handleAddProduct}>Add Product</button>
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

export default Vendor;
