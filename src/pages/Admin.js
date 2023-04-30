import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'
import "./Contact.css";
//onSubmit={handleSubmit}
const Admin = () => {
  const navigate = useNavigate();
  const navigateToContacts = () => {
    navigate('/contact-info');
  }
  return (
    <div>
      <Header />
      <div className="contact-form">
        <form onSubmit={navigateToContacts} >
          <div className="form-control">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Type your Email"
              // value={values.email}
              required
              // onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Type your Password"
              // value={values.message}
              required
              // onChange={handleChange}
            />
          </div><br/>

          <div className="form-control">
            <label></label>
            <button type="submit" >Login</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Admin