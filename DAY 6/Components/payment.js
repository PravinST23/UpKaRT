import React from 'react';
import cardImg from '../assets/card_img.png';
import './payment.css';
import Navbar from './Navbar';

const Payment = () => {
  return (
    <div className="payments">
    <Navbar />
      <form>
        <div className="row">
          <div className="col">
            <h3 className="title">Billing Address</h3>
            <div className="inputBox">
              <span>Name</span>
              <input type="text" placeholder="Enter your name" required/>
            </div>
            <div className="inputBox">
              <span>Email </span>
              <input type="email" placeholder="Enter your email" required/>
            </div>
            <div className="inputBox">
              <span>Address </span>
              <input type="text" placeholder="Enter your address" required/>
            </div>
            <div className="inputBox">
              <span>City </span>
              <input type="text" placeholder="Enter your city" required/>
            </div>
            <div className="flex">
              <div className="inputBox">
                <span>State </span>
                <input type="text" placeholder="State" required/>
              </div>
              <div className="inputBox">
                <span>Zip code </span>
                <input type="number" placeholder="Zip code" required/>
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
            <span>Name </span>
              <input type="text" placeholder="Name on card" required/>
            </div>
            <div className="inputBox">
              <span>Card number </span>
              <input type="number" placeholder="Card number" required/>
            </div>
            
            <div className="flex">
              <div className="inputBox">
              <span >CVV </span>
              <input type="text" placeholder="CVV" />
              <span style={{paddingTop : "12px"}}>Expiry date </span>
              <input type="text" placeholder="MM/YY" required/>
              </div>
            </div>
          </div>
        </div>
        <input type="submit" value="Proceed to pay" className="submit-btn" />
      </form>
    </div>
  );
};

export default Payment;
