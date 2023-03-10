import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register"
import Explore from "./components/Explore";
import Profilee from "./components/Profilee";
import SearchCar from "./components/SearchCar";
import RegisterTrip from "./components/RegisterTrip";
import BecomeHost from "./components/BecomeHost";
import HomeL from "./components/Homelogged";
import FindHost from "./components/FindHost";
import Notification from "./components/Notification";
import SearchHost from "./components/SearchHost";
import ProfileEdit from "./components/ProfileEdit";
import FindCar from "./components/FindCar";
function App() {
  return (
    <>
    
    <Router>
        <Routes>
          
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/Login" element={<Login/>} />
          <Route exact path="/Register" element={<Register/>} />
          <Route exact path="/Explore" element={<Explore/>} />
          <Route exact path="/CarFind" element={<FindCar/>} />
          <Route exact path="/SearchCar" element={<SearchCar/>}/>
          <Route exact path="/Profile" element={<Profilee/>}/>
          <Route exact path="/RegisterTrip" element={<RegisterTrip/>} />
          <Route exact path="/Host" element={<BecomeHost/>} />
          <Route exact path="/HomeLogin" element={<HomeL/>} />
          <Route exact path="/HostFind" element={<FindHost/>} />
          <Route exact path="/Notification" element={<Notification/>} />
          <Route exact path="/SearchHost" element={<SearchHost/>} />
          <Route exact path="/Profile-Edit" element={<ProfileEdit/>} />

          
            
         
            
        </Routes>
      </Router>
      
    </>

  );
}

export default App;
