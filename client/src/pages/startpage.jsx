import React from 'react';
import '../Startpage.css';
import startupimg from '../assets/startup.png'

function Startpage() {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">AYUSH</div>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <a href="#about">Discover</a>
            </li>
            <li className="navbar-item">
              <a href="#services">For job seekers</a>
            </li>
            <li className="navbar-item">
              <a href="#contact">For Companies</a>
            </li>
            <li className="navbar-item">
                <button className="#">Login</button>
            </li>
            <li className="navbar-item">
                <button className="#">Signup</button>
            </li>
          </ul>
        </div>
      </nav>
      

      <div className="two-portions">
        <div className="portion">
          <div className="content">
            <div className="quote">
              <p className="quote-text">
                Your Innovative Journey Begins Here
              </p>
              
            </div>
            <button className="get-started-button">Get Started</button>
          </div>
        </div>
        <div className="portion">
            <img src={startupimg} className="logo react" alt="startup" />
        </div>
        
      </div>

    </div>
  );
}

export default Startpage;

