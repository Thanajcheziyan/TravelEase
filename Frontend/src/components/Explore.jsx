import React from 'react';
import './CSS/Explore.css'
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Explore=()=>{
  const navigate=useNavigate();
  const location=useLocation();
  const eemail=location.state.Email;
    return(
    <div className='ex'>
        <div className="Econtainer">
        <div className="Ecard">
          <div className="Eimg1">
            
          </div>
          <div className="Etop-text1">
            <div className="Ename">
               share your room
            </div>
            <p>
             Become a Host
            </p>
          </div>
          <div className="Ebottom-text">
            <div className="Etext">
              Share your home for the members in the community and be a host for them
            </div>
            <div className="Ebtn1">
              <a onClick={()=>navigate("/Host",{state:{Email:eemail}})}>Register</a>
            </div>
          </div>
        </div>
        <div className="Ecard">
          <div className="Eimg2">
            
          </div>
          <div className="Etop-text1">
            <div className="Ename">
              Search for Rooms
            </div>
            <p>
              Look for a Host
            </p>
          </div>
          <div className="Ebottom-text">
            <div className="Etext">
              Look for a host who can accomodate you in your travel destination
            </div>
            <div className="Ebtn1">
              <a onClick={()=>navigate("/SearchHost",{state:{Email:eemail}})}>Search</a>
            </div>
          </div>
        </div>
        <div className="Ecard">
          <div className="Eimg3">
            
          </div>
          <div className="Etop-text">
            <div className="Ename">
              Share your travel
            </div>
            <p>
              Make your Trip
            </p>
          </div>
          <div className="Ebottom-text">
            <div className="Etext">
              Share your details about your trip so that others can join
            </div>
            <div className="Ebtn3">
              <a onClick={()=>navigate("/RegisterTrip",{state:{Email:eemail}})}>Share</a>
            </div>
          </div>
        </div>
        <div className="Ecard">
          <div className="Eimg4">
            
          </div>
          <div className="Etop-text">
            <div className="Ename">
              search trips
            </div>
            <p>
              Look For Trips
            </p>
          </div>
          <div className="Ebottom-text">
            <div className="Etext">
              Search people who can accomodate your travel
            </div>
            <div className="Ebtn4">
              <a onClick={()=>navigate("/SearchCar",{state:{Email:eemail}})}>search</a>
            </div>
          </div>
        </div>

      </div>
      </div>
    )
}
export default Explore;