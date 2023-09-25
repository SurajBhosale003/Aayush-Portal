import React from 'react';
import '../Startpage.css';
import startupimg from '../assets/startup.png'
import startupimg1 from '../assets/startup.jpg'


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

    <div className="inline-form">
      <input
        type="email"
        placeholder="Enter your email"
        className="email-input"
      />
      <button className="signup-button">Sign Up</button>
      <span className="or-text">or</span>
      <button className="google-button">Continue with Google</button>
    </div>

    <br />
    <br />

    <div className="stats-container">
    <div className="stats-item">
        <h2>130K+</h2>
        <p>Tech Jobs</p>
    </div>
    <div className="stats-item">
        <h2>60,000+</h2>
        <p>Matches Made</p>
    </div>
    <div className="stats-item">
        <h2>8M+</h2>
        <p>Startup Ready Candidates</p>
    </div>
    </div>

    <div className="stats-container">
    <div className="stats-item">
        <h2>27K+</h2>
        <p>Companies</p>
    </div>
    <div className="stats-item">
        <h2>30K+</h2>
        <p>Hires</p>
    </div>
    </div>

    <br />
    <br />


    <div className="info-card">
      <img src={startupimg1} alt="GOT TALENT?" />
      <div className="info-text">
        <h2>GOT TALENT?</h2>
        <p>Why job seekers love us</p>
        <ul>
          <li>Unique jobs at startups and tech companies you can't find anywhere else</li>
          <li>Say goodbye to cover letters - your profile is all you need. One click to apply and you're done.</li>
          <li>Everything you need to know to job search - including seeing salary and stock options upfront when looking</li>
          <li>Connect directly with founders at top startups - no third party recruiters allowed</li>
        </ul>
        <a href="#">Learn more</a>
        <a href="#">Sign up now</a>
      </div>
    </div>

    <div className="info-card">
      <div className="info-text">
        <h2>NEED TALENT?</h2>
        <p>Why recruiters love us</p>
        <ul>
          <li>8 million responsive and startup-ready candidates, with all the information you need to vet them</li>
          <li>Everything you need to kickstart your recruiting - get job posts, company branding, and HR tools set up within 10 minutes, for free</li>
          <li>A free applicant tracking system, or free integration with any ATS you may already use</li>
          <li>Plus, we can do the vetting for you! With Curated, we review the world's top tech talent and highlight candidates directly to you 2x a week.</li>
        </ul>
        <a href="#">Learn more</a>
        <a href="#">Sign up now</a>
      </div>
      <img src="your-image-url.jpg" alt="NEED TALENT?" className="info-image" />
    </div>
    
    <br />
    <br />
    <br />
    <br />

    <div className="centered-headings">
      <h1 className="main-heading">DON'T JUST TAKE IT FROM US</h1>
      <h2 className="sub-heading">From our users</h2>
    </div>

    <div className="quote-cards">
      {/* First Quote Card */}
      <div className="quote-card">
        <div className="quote-symbol">“</div>
        <p className="quote-text">
          I got my tech job on Wellfound (AngelList Talent) 4 years ago and I'm still happy! Pays well, great culture, and unlimited PTO.
        </p>
      </div>

      {/* Add space between cards */}
      <div className="card-space"></div>

      {/* Second Quote Card */}
      <div className="quote-card">
        <div className="quote-symbol">“</div>
        <p className="quote-text">
          I love Wellfound (AngelList Talent). I got my current job at a startup entirely through the site last year - it's super easy to use and I love the UI.
        </p>
      </div>
    </div>

    <br />
    <br />

    <div className="quote-cards">
      {/* First Quote Card */}
      <div className="quote-card">
        <div className="quote-symbol">“</div>
        <p className="quote-text">
        I can't imagine my day to day without this platform. Life would be a lot more difficult.
        </p>
      </div>

      {/* Add space between cards */}
      <div className="card-space"></div>

      {/* Second Quote Card */}
      <div className="quote-card">
        <div className="quote-symbol">“</div>
        <p className="quote-text">
        Half of the offers I give are sourced from Wellfound (AngelList Talent). It's the best product for anyone looking for startup talent.
        </p>
      </div>
    </div>

    <footer className="footer">
      <div className="footer-part1">
        <p>AYUSH</p>
      </div>
      <div className="footer-part2">
        <div className="column">
          <p>For Candidates</p>
          <ul>
            <li>Overview</li>
            <li>Startup Jobs</li>
            <li>Featured</li>
            <li>Salary Calculator</li>
            <li>Startup Hiring Data</li>
          </ul>
        </div>
        <div className="column">
          <p>For Recruiters</p>
          <ul>
            <li>Overview</li>
            <li>Recruit Pro</li>
            <li>Curated</li>
            <li>RecruiterCloud</li>
            <li>Hire Developers</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="column">
          <p>Company</p>
          <ul>
            <li>About</li>
            <li>AngelList Venture</li>
            <li>Help</li>
            <li>Blog</li>
            <li>Terms & Risks</li>
            <li>Privacy & Cookies</li>
          </ul>
        </div>
      </div>
    </footer>

</div>
);
}

export default Startpage;

