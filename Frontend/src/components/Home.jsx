
import React from 'react';
import './CSS/Home.css'
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
const Home=()=>{
    const navigate = useNavigate();
      return (
        <div>
        <div className="Tit">
            <div className="Log">
                <div className="Logo"></div>
            </div>
            <div className="Left">
                <ul>
                    <li>Home</li>
                    <li><a onClick={()=>navigate("./Login")}>Login</a></li>
                    <li><a onClick={()=>navigate("./Register")}>Register</a></li>
                    <li><div className="Prof" onClick={()=>navigate("./Profile")}><div className="Profile"></div><p>profile</p></div></li>
                </ul>
            </div>
        </div>
        <div className="container">
            <div className="img"></div>
            <div className="center">
          <div className="title1">LET'S DISCOVER</div>
          <div className="sub_title">THE WORLD TOGETHER</div>
          
            <a onClick={event =>  window.location.href='/Explore'} className="Btns">Explore-&gt;</a>
            
            </div>
          
          </div>
          
        </div>
      
        
            
)}
      export default Home;