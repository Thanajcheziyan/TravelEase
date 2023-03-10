import React from 'react'
import "./CSS/BHost.css"
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
function RegisterTrip() {
  const location=useLocation();
  const pp=location.state.Email;
  const[name,setname]=useState();
  const[url,seturl]=useState();
  const[abt,setabt]=useState();
  const handleSubmit=async(e)=>{
e.preventDefault();
const response=await fetch("http://localhost:4000/api/Car", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({from:name,to:url,dat:abt,profileid:pp}),
    })}
  return (
    <div className='BC'>
       
                    
       <div className="center1">
        <h1>Become a Travel-HOST</h1>
        <form method="post" onSubmit={handleSubmit}>
          <div className="txt_field">
            <input type="text" required onChange={(e) => setname(e.target.value)}/>
            <span />
            <label>From</label>
          </div>
          <div className="txt_field">
            <input type="text" required onChange={(e) => seturl(e.target.value)}/>
            <span />
            <label>To</label>
          </div>
          <div className="txt_field">
            <input type="textarea" required onChange={(e) => setabt(e.target.value)}/>
            <span />
            <label>Date</label>
          </div>
          <input type="submit" defaultValue="Register" className="btnss" />
        </form>
      </div>
      </div>
  )
}

export default RegisterTrip