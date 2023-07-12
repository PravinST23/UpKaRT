import React, { useEffect, useState } from 'react';
import '../Components/Login.css';
import { useNavigate } from 'react-router-dom';
import {  getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


const LoginForm = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  
  useEffect(() => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(getAuth(), email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user, "authData");
      navigate("/home");
    })
    .catch((error) => {
      alert("Email and password not found");
    });

  setEmail("");
  setPassword("");

    
  };
 
   const [user,setName] = useState("");
   const [mail,setMail] = useState("");
   const [number,setNumber] = useState("");
   const [pass,setPass] = useState("");

   const handleChangeName = (e) => {
    const value = e.target.value;
    setName(value);
  };

  const handleChangeNumber = (e) => {
    const value = e.target.value;
    setNumber(value);
  };

   const handleChangeMail = (e) => {
    const value = e.target.value;
    setMail(value);
  };

  const handleChangePass = (e) => {
    const value = e.target.value;
    setPass(value);
  };

const handleSign = (e) => {
 
 
};

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form" onSubmit={handleSubmit}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input required type="email" placeholder="Email"  value={email} onChange={ handleChangeEmail}/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input required type="password" placeholder="Password" value={password} onChange={ handleChangePassword}/>
            </div>
            <input type="submit" value="Login" className="btn solid" />
          </form>
          <form action="#" className="sign-up-form" onSubmit={handleSign}>
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input required type="text" placeholder="Name" value={user} onChange={ handleChangeName}/>
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input required type="email" placeholder="Email" value={mail} onChange={ handleChangeMail}/>
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input required type="mobilenumber" placeholder="Mobile Number" value={number} onChange={ handleChangeNumber}/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input required type="password" placeholder="Password" value={pass} onChange={ handleChangePass}/>
            </div>
            <input type="submit" className="btn" value="Sign up" />
            
            
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
            Enter your personal details and start the journey with us
            </p>
            <button className="btn transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
            To keep connected with us please login with your personal info
            </p>
            <button className="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
         </div>
      </div>
    </div>
  );
};

export default LoginForm;