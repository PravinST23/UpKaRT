import React from "react";
import { Link } from 'react-router-dom';
import "./home.css";
import Navbar from "./Navbar"; 

const Home = () => {
  return (
    <div className="quick">
    <Navbar/>
    <div className="home">
    <div className='content'>
    <h1 style={{paddingTop: "130px"}}>Unleash Your Style with Time</h1>
    <div className="type">
    Discover Timeless Elegance and Exceptional Craftsmanship with Our Exquisite Collection of Watches
    </div>
    <Link to="/men">
    <button className='theme' style={{marginTop : "30px"}}>
    Get Started
    </button>
    </Link>
    </div>
    </div>
   
    </div>
  );
};

export default Home;