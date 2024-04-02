import React, { useState } from 'react'
import Navbar from '../Dashboard/Navbar'
import Footer from '../Dashboard/Footer'
import { RiMedal2Fill } from "react-icons/ri";
import { IoCarSportSharp } from "react-icons/io5";
import { MdSecurity } from "react-icons/md";
import { BiAlarm } from "react-icons/bi";
import { IoSpeedometerOutline } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa";
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger';
import '../Service/service.css'

const Blog = () => {

  const [counterOn, setcounterOn] = useState(false)
  return (
    <>
      <ScrollTrigger onEnter={() => setcounterOn(true)} onExit={() => { setcounterOn(false) }}>
        <title>Service - Speedo Car Rental</title>
        <Navbar />
        <div className="main-title">
          <h3>Our Services</h3>
          <h5 className='text-light'>Provide services by speedo</h5>
        </div>
        <div class="container-fluid col-12 d-flex">
          <div className="row d-flex flex-wrap">
            <div class="Card col-lg-4">
              <div class="face face1">
                <div class="content">
                  <h2>Best Price</h2>
                  <p>Booking your rental car in advance can lead to better prices.</p>
                </div>
              </div>
              <div class="face face2">
                <h2><RiMedal2Fill /></h2>
              </div>
            </div>
            <div class="Card col-lg-4">
              <div class="face face1">
                <div class="content">
                  <h2>Best Car</h2>
                  <p>Your budget will ultimately dictate which car options are available to you.</p>
                </div>
              </div>
              <div class="face face2">
                <h2><IoCarSportSharp /></h2>
              </div>
            </div>

            <div class="Card col-lg-4">
              <div class="face face1">
                <div class="content">
                  <h2>Security</h2>
                  <p>Safety should be a top priority. Look for cars equipped with advanced safety features such as adaptive cruise control.</p>
                </div>
              </div>
              <div class="face face2">
                <h2><MdSecurity /></h2>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid col-12 d-flex flex-wrap">
          <div className="row d-flex flex-wrap">
            <div class="Card col-lg-4">
              <div class="face face1">
                <div class="content">
                  <h2>Driver</h2>
                  <p>Provide comprehensive training to drivers on safe driving practices, customer service</p>
                </div>
              </div>
              <div class="face face2">
                <h2><FaUserTie /></h2>
              </div>
            </div>
            <div class="Card col-lg-4">
              <div class="face face1">
                <div class="content">
                  <h2>Fast Delivery</h2>
                  <p>Offer priority delivery options for customers who require urgent vehicle rentals.</p>
                </div>
              </div>
              <div class="face face2">
                <h2><IoSpeedometerOutline /></h2>
              </div>
            </div>
            <div class="Card col-lg-4">
              <div class="face face1">
                <div class="content">
                  <h2>24*7 Customer</h2>
                  <p> Provide round-the-clock availability for vehicle delivery services.</p>
                </div>
              </div>
              <div class="face face2">
                <h2><BiAlarm /></h2>
              </div>
            </div>
          </div>
        </div>
        <div className="test">
          <h1>Testimonial</h1>
          <div className="container col-12">
            <div className="row d-flex flex-wrap">
              <div className="col-lg-3 box-1">
                <h2 className='my-4'>Happy Client</h2>
                <h4><CountUp start={0} end={2243} duration={5.35}></CountUp>+</h4>
              </div>
              <div className="col-lg-3 box-1">
                <h2 className='my-4'>Expert Driver</h2>
                <h4><CountUp start={0} end={58} duration={10.35}></CountUp>+</h4>
              </div>
              <div className="col-lg-3 box-1">
                <h2 className='my-4'>Complete Order</h2>
                <h4><CountUp start={0} end={2798} duration={5.35}></CountUp>+</h4>
              </div>
              <div className="col-lg-3 box-1">
                <h2 className='my-4'>State Presence</h2>
                <h4><CountUp start={0} end={12} duration={10.35}></CountUp>+</h4>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
      <Footer />
    </>
  )
}

export default Blog
