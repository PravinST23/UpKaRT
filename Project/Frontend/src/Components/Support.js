import React, { useState } from "react";
import "./Support.css";
import Navbar from "./Navbar"; 
import emailjs from 'emailjs-com';
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';


const Support = () => {
  const [name,setName]=useState('');
  const [mail,setEmail]=useState('');
  const [number,setNumber]=useState('');
  const [message,setMessage]=useState('');
  const email = useSelector(state => state.email);
  const details = useSelector(state => state.set);
  console.log(details);
  const userWithMatchingEmail = details.find(user => user.email === email);
  const userId = userWithMatchingEmail ? userWithMatchingEmail.id : null;


  const sendEmail = async(e) => {
    e.preventDefault();
    try{
      const data = await axios.post("http://localhost:2020/support" ,{
        name : name,
        email : mail,
        mobilenumber : number,
        query : message,
        userId : userId,
      });

      if(data.status === 200){
        toast.success("Gratitude for your Assistance");
        setName('');
        setEmail('');
        setNumber('');
        setMessage('');
      }
    }
    catch(error){
      console.log(error);
    }

    emailjs.sendForm('service_kz8dgt7', 'template_qcltqy2', e.target, 'WHVDoLNCZ01fkh6s0')
    e.target.reset();
  };

  return (
    <div>
    <Navbar />
    <div className="ground">
    <div className="contact-container">
    <div className="content-tn">
    Reach Us      Here
    </div>
    <form className="contact-form" onSubmit={sendEmail} >
        <h3>Get in touch</h3>
        <input name='from_name' type="text" placeholder="Name" required onChange={(e) => setName(e.target.value)}/>
        <input name='from_email' type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
        <input name='from_contact' type="mobilenumber" placeholder="Mobile Number" required onChange={(e) => setNumber(e.target.value)}/>
        <textarea name='message' id="message" rows={6} placeholder ="how can we help?" onChange={(e) => setMessage(e.target.value)}/>
        <button type="submit" className="contact-btn">Submit</button>
        </form>
        </div>
        </div>
        
        </div>
  );
};

export default Support;