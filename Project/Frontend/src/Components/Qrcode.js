import React from 'react';
import QRCodeGenerator from 'qrcode.react';
import "./Qrcode.css";
import Navbar from './Navbar';
const Qrcode = ({ paymentDetails }) => {
  return (
    <div>
    <Navbar />
    <div className="qr">
    <div className="codecontainer">
    <QRCodeGenerator value={JSON.stringify(paymentDetails)} size={230}  />
    </div>
    <div className="code">
    <p>Scan and Pay using QR Code</p>
    </div>
    </div>
    </div>
  );
};
export default Qrcode;
