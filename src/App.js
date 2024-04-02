import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router";
import Register from "./Componet/Register";
import Login from "./Componet/Login";
import Forget from "./Componet/Forget/Forget";
import Dashboard from "./Ownar/Dashboard/Dashboard";
import Cartabel from "./Ownar/Car/CarTabel"
import Car from "./Ownar/Car/Car";
import Otp from "./Componet/Forget/Otp";
import Password from "./Componet/Forget/Password";
import DriverDetails from "./Ownar/BookingData/DriverDetails";
import Home from "./Home/Home";
import State from "./Ownar/State/State";
import StateTabel from "./Ownar/State/StateTabel";
import Populer from "./Popular/Popular";
import Feedback from "./FeedBack/Feedback";
import BookData from "./Ownar/BookingData/BookData";
import ContactData from "./Ownar/ContactData";
import Book from "./Book/Book";
import Contact from "./Contact/Contact";
import Profile from "./Profile/Profile";
import ShowProfile from "./Profile/ShowProfile";
import OwnerNavbar from "./Ownar/Navbar/OwnerNavbar";
import About from "./About/About";
import EditBookData from "./Ownar/BookingData/Editbook";
import Bookingconform from "./Thanks/Bookingconfirm";
import Feedbackrconform from "./Thanks/Feedbackrconfirm";
import Getintouchconfirm from "./Thanks/GetintouchConfirm";
import Driver from "./Ownar/Driver/Driver";
import DriverTabel from "./Ownar/Driver/DriverTabel";
import Service from './Service/Service';
import Team from './Team/Team';
import DriverRegister from "./Driver/DriverRegister";
function App() {
  var user = localStorage.getItem("user");
  function RequireAuth({ children }) {
    return user ? children : <Navigate to="/Login" replace />;
  }

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/Profile" element={<RequireAuth><Profile /></RequireAuth>}> </Route>
          <Route exact path="/ShowProfile" element={<ShowProfile />}> </Route>
          {/* <Route exact path='/Profile/:id' element={< Profile />} ></Route> */}
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Login" element={<Login />}></Route>
          <Route exact path="/Register" element={<Register />}></Route>
          <Route exact path="/Forget" element={<Forget />}> </Route>
          <Route exact path="/Otp" element={<Otp />}> </Route>
          <Route exact path="/CarTabel" element={<Cartabel />}> </Route>
          <Route exact path="/Car" element={<Car />}> </Route>
          <Route exact path="/Password" element={<Password />}> </Route>
          <Route exact path="/State" element={<State />}> </Route>
          <Route exact path="/StateTabel" element={<StateTabel />}> </Route>
          <Route exact path="/Driver" element={<Driver />}> </Route>
          <Route exact path="/OwnerNavbar" element={<RequireAuth><OwnerNavbar /></RequireAuth>}></Route>
          <Route exact path='/EditBookData/:index' element={< EditBookData />} ></Route>
          <Route exact path="/DriverDetails" element={<DriverDetails />}> </Route>
          <Route exact path="/EditBookData" element={<EditBookData />}></Route>
          <Route exact path="/BookData" element={<BookData />}></Route>
          <Route exact path="/ContactData" element={<ContactData />}></Route>
          <Route exact path="/Bookingconform" element={<Bookingconform />}></Route>
          <Route exact path="/Feedbackrconform" element={<Feedbackrconform />}></Route>
          <Route exact path="/GetintouchConfirm" element={<Getintouchconfirm />}></Route>
          <Route exact path="/FeedBack" element={<RequireAuth> <Feedback /></RequireAuth>}></Route>74/76
          <Route exact path="/About" element={<RequireAuth> <About /></RequireAuth>} ></Route>
          <Route exact path="/Book" element={<RequireAuth><Book /> </RequireAuth>}></Route>
          <Route exact path="/Populer" element={<RequireAuth><Populer /></RequireAuth>}></Route>
          <Route exact path="/Contact" element={<RequireAuth><Contact /></RequireAuth>}></Route>
          <Route exact path="/Dashboard" element={<Dashboard />}> </Route>
          <Route exact path='/Car/:index' element={< Car />} ></Route>
          <Route exact path="/DriverTabel" element={<DriverTabel />}> </Route>
          <Route exact path="/DriverRegister" element={<DriverRegister />}></Route>
          <Route exact path='/DriverDetails/:index' element={< DriverDetails />} ></Route>
          <Route exact path="/Home" element={<RequireAuth><Home /></RequireAuth>}></Route>
          <Route exact path="/service" element={<RequireAuth><Service /></RequireAuth>}></Route>
          <Route exact path="/team" element={<RequireAuth><Team /></RequireAuth>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;


























