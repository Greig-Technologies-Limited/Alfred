import React from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { FiMail,FiTwitter, FiFacebook, FiGithub, FiInstagram, FiLinkedin, } from 'react-icons/fi'
import './FooterStylies.css'

import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
          <div className="top">
            <div className="logo-footer">
            <div className="logoImg"></div>
            <img src="../../assets/logo.jpg" alt="" />
            </div>
            <Link
      activeClass="active"
      to="top"
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
    >
       <BsFillArrowUpCircleFill className='icon' />
    </Link>
          </div>
          <div className="col-container">
            <div className="col">
              <h3>Services</h3>
              <p>Cloud Hosting</p>
              <p>Domains</p>
              <p>Vps Servers</p>
              <p>Dedicated Hosting</p>
              <p>Data Centers</p>
            </div>
            <div className="col">
              <h3>Company</h3>
              <p>About Us</p>
              <p>Contact</p>
              <p>Support</p>
              <p>Pricing</p>
            </div>
            <div className="col">
              <h3>Solutions</h3>
              <p>Who is</p>
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
              <p>Login</p>
            </div>
            <div className="col">
              <h3>Contact Info</h3>
              <p>Location</p>
              <p>Call Numbers</p>
              <p>Email</p>
            </div>
            <form>
              <h3>Join Our Team</h3>
              <input type="Email" placeholder="Enter your Email" />
              <FiMail className="mail-icon"/>
              <div className="social-group">
                <FiInstagram className="social-icon"/>
                <FiFacebook className="social-icon"/>
                <FiLinkedin className="social-icon"/>
                <FiTwitter className="social-icon"/>
                <FiGithub className="social-icon"/>
              </div>
            </form>
            <div className="season"><h5>&copy;2023</h5></div>
          </div>
          <div className="brand">
           <h5>created by Shęriff&DaKing</h5></div>
        </div>
      </div>
    );
  }


export default Footer