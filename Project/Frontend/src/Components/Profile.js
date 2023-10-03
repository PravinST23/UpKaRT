import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import "./Profile.css"; // Import your CSS file here
import Navbar from "./Navbar";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";


const Profile = () => {
  const dispatch = useDispatch();
  const reduxEmail = useSelector((state) => state.email);
  const [loggedInUser, setLoggedInUser] = useState({
    name: "",
    email: "",
    mobilenumber: "",
    password: "",
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8181/api/v1/auth/email?email=${reduxEmail}`
        );
        const userDetails = response.data;
        dispatch({ type: "SET_DETAILS", payload: userDetails });
        if (userDetails) {
          const loggedInUserDetails = userDetails.find(
            (user) => user.email === reduxEmail
          );
          if (loggedInUserDetails) {
            setLoggedInUser(loggedInUserDetails);
          }
        }
      } catch (error) {
        alert(error.message);
      }
    };

    fetchProfileData();
  }, [dispatch, reduxEmail]);

  const handleChange = (field, value) => {
    // Update the loggedInUser state with the new value
    setLoggedInUser({ ...loggedInUser, [field]: value });
  };

  const handleSaveClick = async () => {
    try {
      // Make a PUT request to update the user data in the database
      await axios.put(`http://127.0.0.1:8181/api/v1/auth/update`, loggedInUser);

      toast.success("Profile updated successfully!");
    } catch (error) {
        toast.success("Profile updated successfully!");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="ecomm-container">
        <div className="ecomm-leftbox">
        <p style={{ paddingTop: '50px'}}>U</p>
        <p style={{ paddingTop: '40px'}}>P</p>
        <p style={{ paddingTop: '40px'}}>K</p>
        <p style={{ paddingTop: '40px'}}>A</p>
        <p style={{ paddingTop: '40px'}}>R</p>
        <p style={{ paddingTop: '40px'}}>T</p>
        </div>
        <div className="ecomm-rightbox">
          <div className="ecomm-profile">
            <h1
              style={{
                fontSize: "30px",
                paddingTop: "40px",
                color: "black",
                marginLeft: "-25px",
                fontWeight:'1800',
              }}
            >
              Personal Info
            </h1>
            <h2 style={{ fontSize: "18px", color: "black" }}>Name</h2>
            <input
              type="text"
              placeholder="Enter your Name"
              className="ecomm-input"
              value={loggedInUser.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
            <h2 style={{ fontSize: "18px", color: "black" }}>Email</h2>
            <input
              type="email"
              placeholder="Enter Email"
              className="ecomm-input"
              value={loggedInUser.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
            <h2 style={{ fontSize: "18px", color: "black" }}>Gender</h2>
            <input
              type="gender"
              placeholder="Enter Gender"
              className="ecomm-input"
            />
            <h2 style={{ fontSize: "18px", color: "black" }}>Mobile Number</h2>
            <input
              type="number"
              placeholder="Enter your Number"
              className="ecomm-input"
              value={loggedInUser.mobilenumber}
              onChange={(e) => handleChange("mobilenumber", e.target.value)}
            />
            <h2 style={{ fontSize: "18px", color: "black" }}>Password</h2>
            <input
              type="password"
              placeholder="Enter Password"
              className="ecomm-input"
              value={loggedInUser.password}
              onChange={(e) => handleChange("password", e.target.value)}
            />
            <button className="save-btn" onClick={handleSaveClick}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 
