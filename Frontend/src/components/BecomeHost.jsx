import React from 'react'
import './CSS/BHost.css'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BecomeHost() {
  const location=useLocation();
  const pp=location.state.Email;
  const[name,setname]=useState();
  const[url,seturl]=useState();
  const[abt,setabt]=useState();
  const[btext,setbtext]=useState('Register')
  const handleSubmit=async(e)=>{
e.preventDefault();
const response=await fetch("http://localhost:4000/api/Host", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({city:name,location:url,about:abt,Profile:pp}),
    })
  }
  const notify = () => toast.success("Created !",{
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

  return (
    <div className='BC'>
       <div className="center1">
        <h1>Become a HOST</h1>
        <form method="post" onSubmit={handleSubmit}>
          <div className="txt_field">
            <input type="text" required  onChange={(e) => setname(e.target.value)} />
            <span />
            <label>City</label>
          </div>
          <div className="txt_field">
            <input type="text" required  onChange={(e) => seturl(e.target.value)} />
            <span />
            <label>Location</label>
          </div>
          <div className="txt_field">
            <input type="textarea" required  onChange={(e) => setabt(e.target.value)}/>
            <span />
            <label>About</label>
          </div>
          <input type="submit" defaultValue={btext} className="btnss" />
        </form>
      </div>
      <ToastContainer position="top-center"
autoClose={1000}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"/>
                      
    </div>
  )
}

export default BecomeHost