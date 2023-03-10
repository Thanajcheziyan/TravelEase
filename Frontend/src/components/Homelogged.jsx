import React from 'react';
import './CSS/Home.css'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link,useNavigate } from 'react-router-dom';
import {Image} from 'cloudinary-react'
const HomeL=()=>{
    const navigate = useNavigate();
    const location=useLocation();
    const eemail=location.state.Email;
    const [data, setData] = useState([]);

    useState(async(e)=>{
        
        const response=await fetch("https://travelease.onrender.com/api/Profile", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({eemail}),
        })
        
        
        const data = await response.json()
        if(data){
          setData(data.user)
      
        } })
      return (
        <div>
        <div className="Tit">
            <div className="Log">
                <div className="Logo"></div>
            </div>
            <div className="Left">
                <ul>
                    
                
                    <li><a onClick={()=>navigate("/Notification",{state:{Email:eemail}})}>Notification</a></li>
                    <li><div className="Prof" onClick={()=>navigate("/Profile",{state:{Email:eemail}})}><Image cloudName="dkuuta6c3" publicId={data.ProfilePic} width="40" height="40" className="pp" /><p>{data.Name}</p></div></li>
                    <li><a onClick={()=>navigate("/")}>Logout</a></li>
                </ul>
            </div>
        </div>
        <div className="container">
            <div className="img"></div>
            <div className="center">
          <div className="title1">LET'S DISCOVER</div>
          <div className="sub_title">THE WORLD TOGETHER</div>
          
            <a onClick={()=>navigate("/Explore",{state:{Email:eemail}})} className="Btns">Explore-&gt;</a>
            
            </div>
          
          </div>
          
        </div>
      
        
            
)}
      export default HomeL;