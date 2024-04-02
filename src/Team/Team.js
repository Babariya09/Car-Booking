import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Navbar from '../Dashboard/Navbar'
import Footer from '../Dashboard/Footer'
import team1 from '../Image/team-1.jpg'
import team2 from '../Image/team-2.jpg'
import team3 from '../Image/team-3.jpg'
import team4 from '../Image/team-4.jpg'
import team5 from '../Image/team-5.jpg'
import team6 from '../Image/team-6.jpg'
import logo1 from '../Image/nissanpng.png'
import logo2 from '../Image/kia.png'
import logo3 from '../Image/volvo.png'
import logo4 from '../Image/Ford.png'
import logo5 from '../Image/toyoto.png'
import logo6 from '../Image/bmw-logo.png'

import './team.css'
const Driver = () => {
  return (
    <>
      <Navbar />
      <title>Team - Speedo Car Rental</title>
      <div className="main-title">
        <h3>Our Team</h3>
      </div>
      <div className="main flex-wrap row">
        <div className="profile-card">
          <div className="img">
            <img src={team1} />
            <h6 className='text-center my-2'>Ravi Tank</h6>
          </div>
          <div className="caption">
            <p>General Manager</p>
            <div className="social-links">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>
        </div>
        <div className="profile-card">
          <div className="img">
            <img src={team5} />
            <h6 className='text-center my-2'>Krishna Vadukiya</h6>
          </div>
          <div className="caption">
            <p>Fleet Manager</p>
            <div className="social-links">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>
        </div>
        <div className="profile-card">
          <div className="img">
            <img src={team3} />
            <h6 className='text-center my-2'>Prince Bavadiya</h6>
          </div>
          <div className="caption">
            <p>Reservation Agent</p>
            <div className="social-links">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="main container flex-wrap">
        <div className="profile-card">
          <div className="img">
            <img src={team4} />
            <h6 className='text-center my-2'>Siddharth Vora</h6>
          </div>
          <div className="caption">
            <p>Financial Officer</p>
            <div className="social-links">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>
        </div>
        <div className="profile-card">
          <div className="img">
            <img src={team2} />
            <h6 className='text-center my-2'>Jayesh gohel</h6>
          </div>
          <div className="caption">
            <p>IT/System Administrator</p>
            <div className="social-links">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>
        </div>
        <div className="profile-card">
          <div className="img">
            <img src={team6} />
            <h6 className='text-center my-2'>Rajal kanadiya</h6>
          </div>
          <div className="caption">
            <p>Security Officer</p>
            <div className="social-links">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>
        </div>
      </div>
      <h3 className='title-2'>Title Sponsor</h3>
      <div className="col-12 spon flex-wrap row-gap-3">
        <div className="col-lg-2">
          <img src={logo1} className='img-fluid car-logo'/>
        </div>
        <div className="col-lg-2">
          <img src={logo2} className='img-fluid car-logo'/>
        </div>
        <div className="col-lg-2">
          <img src={logo3} className='img-fluid car-logo'/>
        </div>
        <div className="col-lg-2">
          <img src={logo4} className='img-fluid car-logo'/>
        </div>
        <div className="col-lg-2">
          <img src={logo5} className='img-fluid car-logo'/>
        </div>
        <div className="col-lg-2">
          <img src={logo6} className='img-fluid car-logo'/>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Driver
