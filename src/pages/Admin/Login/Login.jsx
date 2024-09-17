import React, { useState } from 'react';
import './Login.css';

const Admin_LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");

  return (
    <div className='admin-login-popup'>
      <div className="admin-login-popup-content">
        <div className="admin-login-popup-left">
          <h2>Create Account for Reservation</h2>
          {currState === "Login" ? (
            <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Sign Up</span></p>
          ) : (
            <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login Here</span></p>
          )}
        </div>
        <div className="admin-login-popup-right">
          <span className="admin-login-popup-close" onClick={() => setShowLogin(false)}>&times;</span>
          <h2>{currState}</h2>
          {currState === "Sign Up" && <input type="text" placeholder='Name' required />}
          <input type="email" placeholder='Email' required />
          <input type="password" placeholder='Password' required />
          {currState === "Sign Up" && <input type="text" placeholder='Address' required />}
          <button className="admin-login-popup-button">
            {currState === "Sign Up" ? "Sign Up" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin_LoginPopUp;
