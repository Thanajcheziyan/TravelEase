import React from 'react';
import './CSS/Register.css'
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios'
const Register=()=>{
  const [Name,setName]=useState('')
  const [Mobileno,setMobileno]=useState('')
  const [Password,setPassword]=useState('')
  const [error, setError] = useState(null)
  const navigate=useNavigate()
  const handleSubmit = async (e) => {
    
  
    e.preventDefault();
    const newUser={Name,Mobileno,Password}
 
    // When a post request is sent to the create url, we'll add a new record to the database.
    
  
    const response=await fetch("https://travelease.onrender.com/api/Register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({Name:Name,Mobileno:Mobileno,Password:Password}),
    })
    
    
    const data = await response.json()
    console.log(data)
    {/*const json = await response.json()
    if (!response.ok) {
      console.log(json.error)
    }
    
    if (response.ok) {
      
      setName('')
      setMobileno('')
      setPassword('')
      console.log('new workout added:', json)
    }*/}
    navigate("/Profile-Edit")

  }

    return(
        <div className='Loginp'>
          
            
      <div className="Rcontainer">
        <div className="LImage">
          <h1>Welcome To <span><div className='Llogo'/></span></h1>
        </div>
        <div className="Lcontent">
          <h1>Register</h1>
          <form className="create" onSubmit={handleSubmit}> 
      
      <label>Username:</label>
      <input 
        type="text" 
        onChange={(e) => setName(e.target.value)} 
        value={Name}     />

      <label>Email:</label>
      <input 
        type="text" 
        onChange={(e) => setMobileno(e.target.value)} 
        value={Mobileno}
      />

      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={Password} 
      />

      <button >Register</button>

      </form>
      </div>
        </div>
        </div>
    )
}
export default Register;