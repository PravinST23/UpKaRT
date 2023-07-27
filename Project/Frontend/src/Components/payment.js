import React, { useState } from 'react';
import cardImg from '../assets/card_img.png';
import './payment.css';
import Navbar from './Navbar';
import { Link, useHistory } from 'react-router-dom';
import Qrcode from './Qrcode';

const Payment = () => {

  const [paymentDetails, setPaymentDetails] = useState({
    nameOnCard: '',
    cardNumber: '',
    cvv: '',
    expiryDate: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  


  return (
    <div className="payments">
      <Navbar />
      <form>
        <div className="row">
          <div className="col">
            <h3 className="title">Billing Address</h3>
            <div className="inputBox">
              <span>Name</span>
              <input
                type="text"
                placeholder="Enter your name"
                required
                name="nameOnCard"
                onChange={handleChange}
              />
            </div>
            <div className="inputBox">
              <span>Email</span>
              <input
                type="email"
                placeholder="Enter your email"
                required
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="inputBox">
            <span>Address</span>
            <input type="text" placeholder="Enter your address" required />
          </div>
          <div className="inputBox">
            <span>City</span>
            <input type="text" placeholder="Enter your city" required />
          </div>
          <div className="flex">
            <div className="inputBox">
              <span>State</span>
              <input type="text" placeholder="State" required />
            </div>
            <div className="inputBox">
              <span>Zip code</span>
              <input type="number" placeholder="Zip code" required />
            </div>
          </div>
          </div>

          <div className="col">
            <h3 className="title">Payment</h3>
            <div className="inputBox">
              <span>Cards accepted :</span>
              <img src={cardImg} alt="cards accepted" />
            </div>

            <div className="inputBox">
              <input
                style={{ marginTop: '15px' }}
                type="text"
                placeholder="Name on card"
                required
                name="nameOnCard"
                onChange={handleChange}
              />
            </div>
            <div className="inputBox">
              <input
                style={{ marginTop: '15px' }}
                type="number"
                placeholder="Card number"
                required
                name="cardNumber"
                onChange={handleChange}
              />
            </div>

            <div className="flex">
              <div className="you">
                <input
                  type="text"
                  placeholder="CVV"
                  name="cvv"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="MM/YY"
                  required
                  name="expiryDate"
                  onChange={handleChange}
                />
                </div>
                </div>
                <div className="scanPayStatement">
                <p>Or scan and pay using QR code:</p>
                <Link to="/qr-code">
                  Scan and Pay
                </Link>
              </div>
          </div>
        </div>

       

        <input type="submit" value="Proceed to pay" className="submit-btn" />
      </form>
    </div>
  );
};

export default Payment;
