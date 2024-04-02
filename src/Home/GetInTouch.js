import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../Home/Form.css'
function GetInTouch() {
  const navigate = useNavigate();
  const OnTouch = () => {
    navigate("/Contact");
  };
  return (
    <div
      className="container bg-pic"
      style={{ color: "white", margin: "12% 5% 0 5vw" }}
    >
      <p style={{ fontSize: "5vw", fontWeight: "bold" }}>
        Book A Cab Online From Speedo ₹ 9 Per KM
      </p>
      <p style={{ fontSize: "24px" }}>
        Book a cab from wide range of cars available. Book for one way, round
        trip, self drive. Rent a car @ lowest prices. Best & well maintained
        cars.
      </p>
      <button
        className="btn btn btn-outline-primary"
        style={{
          backgroundColor: "#23809fc2",
          color: "white",
          border: "black",
          fontSize: "17px",
          marginBottom:"30px",
        }}
        onClick={OnTouch}
      >
        Get in Touch
      </button>
    </div>
  );
}

export default GetInTouch;
