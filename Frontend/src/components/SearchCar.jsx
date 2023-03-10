import React from 'react'
import './CSS/SearchCar.css'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function SearchCar() {
  const navigate=useNavigate();
  const location=useLocation();
  const eemail=location.state.Email;
  const[From,setFrom]=useState('')
  const[to,setto]=useState('')
  const[Date,setDate]=useState('')
  const HandleChange=()=>{
navigate("/CarFind",{state:{Email:eemail,From:From,to:to,Date:Date}})
  }
 
  return (
    <div className='SC'>
       
       <div className="center11">
        <h1>Search for a Travel-HOST</h1>
        <form onSubmit={HandleChange}>
          <div className="txt_field">
            <input type="text" required onChange={(e)=>setFrom(e.target.value)}/>
            <span />
            <label>From</label>
          </div>
          <div className="txt_field">
            <input type="text" required onChange={(e)=>setto(e.target.value)} />
            <span />
            <label>To</label>
          </div>
          <div className="txt_field">
            <input type="textarea" required onChange={(e)=>setDate(e.target.value)} />
            <span />
            <label>Date</label>
          </div>
          <input type="submit" defaultValue="Search" className="btnss"  />
        </form>
      </div>
      </div>
           
             
                      
            
  )
}

export default SearchCar;