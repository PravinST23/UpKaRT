import React  from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Components/Login";
import Home from "./Components/home";
import Men from "./Components/Men";
import Women from "./Components/Women";
import Support from "./Components/Support";
import About from "./Components/About";
import Wishlist from "./Components/wishlist";
import Kids from "./Components/Kids";
 import Payment from "./Components/payment";
import Vendor from "./Components/Vendor";
import Qrcode from "./Components/Qrcode";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Cart from './Components/cart';



function App() {

  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
       <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
      <Route path="/men" element={<Men />} />
      <Route path="/support" element={<Support />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<Cart />} /> 
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/women" element={<Women />} />
      <Route path="/kids" element={<Kids />} />
      <Route path='/payment' element={<Payment />} />
      <Route path='/vendor' element={<Vendor />} /> 
      <Route path="/qr-code" element={<Qrcode />} />      
      </Routes>
    </BrowserRouter>
    <ToastContainer />
    </div>
  );
}
export default App;