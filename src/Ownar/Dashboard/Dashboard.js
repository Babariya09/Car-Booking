import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Card from "../Resuable/Card";
import OwnerNavbar from "../Navbar/OwnerNavbar";
import Footer from "../../Dashboard/Footer";
import axios from "axios";
import MileChart from "../Data/Carorder";
import CarStatsChart from "../Data/Vhicaltype";
import Addcar from "../Data/Stateorder";

export default function Dashboard() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const [response1, response2, response3, response4] = await Promise.all([
        axios.get("http://localhost:8000/api/userdata"),
        axios.get("http://localhost:8000/api/commentdata"),
        axios.get("http://localhost:8000/api/Gmaildata"),
        axios.get("http://localhost:8000/api/feedbackdata"),


      ]);
      setData1(response1.data);
      setData2(response2.data);
      setData3(response3.data);
      setData4(response4.data);
    };
    fetchData();
  }, []);

  const register = data1.length
  const comment = data2.length
  const booking = data3.length
  const feedback = data4.length



  const carObj = {
    title: "REGISTER DATA",
    totalNumber: register,
    icon: "ri-police-car-line",
  };

  const tripObj = {
    title: "CONTACTUS DATA",
    totalNumber: comment,
    icon: "ri-steering-2-line",
  };

  const clientObj = {
    title: "BOOKING DATA",
    totalNumber: booking,
    icon: "ri-user-line",
  };

  const distanceObj = {
    title: "FEEDBACK DATA",
    totalNumber: feedback,
    icon: "ri-timer-flash-line",
  };

  return (

    <>
      <title>Dashboard - Speedo Car Rental</title>
      <OwnerNavbar />
      <div className="dashboard">
        <div className="dashboard__wrapper">
          <div className="dashboard__cards">
            <Card item={carObj} />
            <Card item={tripObj} />
            <Card item={clientObj} />
            <Card item={distanceObj} />
          </div>
          <div className="statics">
            <div className="stats">
              <h3 className="stats__title">Car Orders</h3>
              <MileChart />
            </div>
            <div className="stats">
              <h3 className="stats__title">Total Vehicle Data</h3>
              <CarStatsChart />
            </div>
          </div>
          <div className="statics1">
            <div className="stats1">
              <h3 className="stats__title">State Orders</h3>
              <Addcar />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
