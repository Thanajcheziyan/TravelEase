import React from 'react';
import './CSS/Login.css'
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
const Login=()=>{
  const navigate=useNavigate()
  const [Mobileno,setMobileno]=useState('')
  const [Password,setPassword]=useState('')
  const handleSubmit = async (e) => {
    
  
    e.preventDefault();
    
 
    // When a post request is sent to the create url, we'll add a new record to the database.
    
  
    const response=await fetch("http://localhost:4000/api/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({Mobileno,Password}),
    })
    
    
    const data = await response.json()
    
      if(data){
        navigate('/HomeLogin',{state:{Email:Mobileno,}});
      
    }}
    return(
        <div className='Loginp'>
          
            
      <div className="Lcontainer">
        <div className="LImage">
          <h1>Welcome To <span><div className='Llogo'></div></span></h1>
        </div>
        <div className="Lcontent">
          <h1>Login</h1>
          <form className="create" onSubmit={handleSubmit}> 
      
      
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

      <button>Login</button>

      </form>
          </div>
      </div>
        </div>
    )
}
export default Login;