import React, { useState } from 'react'
import './CSS/SearchHost.css'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const SearchHost = () => {
    const [city,setCity]=useState('')
    const navigate=useNavigate();
    const location=useLocation();
    const eemail=location.state.Email;
    const handleChange = event => {
        setCity(event.target.value);
        
    
        console.log('value is:', event.target.value);
        
      };
  return (
    <div className='S'>
    <form action className='shf' onSubmit={()=>{navigate("/HostFind",{state:{Email:eemail,City:city}})}}>
        <div className="input-field">
          <input className='shi' type="text" id="name" required onChange={handleChange} />
          <label className='shl' htmlFor="name">Enter City</label>
        </div>
        <button className='shb'>Search</button>
      </form>
      </div>
  )
}

export default SearchHost