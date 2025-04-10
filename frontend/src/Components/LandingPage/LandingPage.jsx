import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ChevronDown, School, MessageSquare, Calendar, PieChart, RotateCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import Logo from '../../assets/sguLogo.png'
import threeDLogo from '../../assets/360 View.png'
import { NavLink } from 'react-router-dom'
// import universityImage from '../../assets/SguBackgroundImg.png'

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="brand">
            {/* <img src={ Logo } alt="SGU Logo" className='nav-logo' /> */}
          </div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <NavLink className="link-login" to='/login'>
            <button
              onClick={() => navigate('/login')}
              className="login-button"
            >
              Login
            </button>
          </NavLink>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-image">
          {/* <img
            src= {universityImage}
            alt="University Campus"
          /> */}
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">CampusConnect</h1>
          <p className="hero-subtitle">Plasmid's Automated Paperless</p>
          <p className="hero-subtitle large">Transparent College Portal</p>
          <ChevronDown className="chevron-icon" />
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-row">

            {/* <Link to="https://www.thinglink.com/card/1949723502747583141" > */}
              <div className="about-image-container">
                <img
                  src= { threeDLogo }
                  alt="Campus Aerial View"
                  className="about-image"
                />
                <div className="hover-overlay">
                  {/* <img src={threeDLogo} alt="360 Logo" /> */}
                  Click to view 360°
                </div>
              </div>
            {/* </Link> */}
            <div className="about-text">
              <h2 className="about-title">About Us</h2>  
              <div className="about-highlight">
                <h3 className="about-highlight-title">PLASMID UNIVERSITY</h3>
              </div>
              <p className="about-description">
                Plasmid was established as a State Private University in the year 2017. Previously it was Plasmid Institues formed in the year 2009 by the Chairman of Shah Group, Devang Shah. The institute had received NAAC A grade and also its programs were accredited by NBA and after this the natural progression was the evolvement of Plasmid University.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <h2 className="features-title">Features</h2>
          <div className="features-grid">
            <FeatureCard
              icon={<School />}
              title="Secure Online Student Elections"
              description="Conduct fair and transparent student elections. Secure voting with college email authentication. Live election results tracking for transparency."
            />
            <FeatureCard
              icon={<MessageSquare />}
              title="Anonymous Complaint System"
              description="Submit anonymous complaints securely. Moderation system to filter inappropriate content. Complaints visible to all students & faculty for accountability."
            />
            <FeatureCard
              icon={<Calendar />}
              title="Facility Booking System"
              description="Book campus spaces like auditoriums & sports courts. Approval workflow from relevant authorities. Live availability tracking to avoid scheduling conflicts."
            />
            <FeatureCard
              icon={<PieChart />}
              title="Transparent Budget & Sponsorship Tracking"
              description="View department budgets & event sponsorships openly. Expense proofs (bills, receipts) uploaded for verification. Ensures accountability & prevents fund misuse."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="contact-title">Contact Us</h2>
          <div className="contact-form-container">
            <div className="contact-grid">
              <div className="contact-inputs">
                <input
                  type="text"
                  placeholder="Name"
                  className="input-field "
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="input-field "
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="textarea-field "
                ></textarea>
              </div>

            </div>
            <div className='submit-btn-div'>
              <button className='submit-btn'>Submit</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="">
          <div className="footer-top">
            <div className="footer-info">
              {/* <img src={Logo} alt="SGU logo" className='logo-sgu' /> */}
              <div className="info-text">
                <p className="footer-name">Plasmid University</p>
                <p className="footer-address">329, Mars</p>
                <p className="footer-address">Milkyway Galaxy, U994-18-5</p>
              </div>
            </div>
            <div className="footer-links">
              <div className='quick-links'>
                <h4>Quick Links</h4>
                <ul className="footer-nav">
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#features">Features</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4>Contact Info</h4>
                <ul className="footer-nav">
                  <li>+91 9123456789</li>
                  <li>contact@plasmid.in</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            © Copyright 2025 · All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">
        {icon}
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
}

export default LandingPage;