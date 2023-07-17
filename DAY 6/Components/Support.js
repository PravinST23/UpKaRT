import React from "react";
import "./Support.css";
import Navbar from "./Navbar"; 
import emailjs from 'emailjs-com';

const Support = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kz8dgt7', 'template_qcltqy2', e.target, 'WHVDoLNCZ01fkh6s0')
      .then(
        (result) => {
          console.log(result.text);
          alert('Email sent successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('Error sending email.');
        }
      );

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
        <input name='from_name' type="text" placeholder="Name" required />
        <input name='from_email' type="email" placeholder="Email" required />
        <input name='from_contact' type="mobilenumber" placeholder="Mobile Number" required />
        <textarea name='message' id="message" rows={6} placeholder ="how can we help?" />
        <button type="submit" className="contact-btn">Submit</button>
        </form>
        </div>
        </div>
        </div>
  );
};

export default Support;