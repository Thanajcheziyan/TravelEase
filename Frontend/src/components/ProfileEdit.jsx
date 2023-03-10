import React, { useState } from 'react'
import './CSS/ProfileEdit.css'

const ProfileEdit = () => {
  const[name,setname]=useState('');
  const[dob,setdob]=useState('');
  const[email,setemail]=useState('');
  const[address,setaddress]=useState('')
  const[about,setabout]=useState('')
  const[wno,setwno]=useState('');
  const[gender,setgender]=useState('');
  const[prourl,setprourl]=useState('');
  const[food,setfood]=useState('');
  const[country,setcountry]=useState('');
  const handleChange=async(e)=>{
    e.preventDefault()
    const response=await fetch("https://travelease.onrender.com/api/CProfile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name:name,email:email,address:address,dob:dob,about:about,gender:gender,wno:wno, food:food, prourl:prourl,country:country}),
    })
  }
  return (
    <div className="page-content">
    <div className="form-v10-content" >
      <form className="form-detail" id="myform" onSubmit={handleChange}>
        <div className="form-left" >
          <h2>General Infomation</h2>
          <div className="form112">
            <fieldset>
              <div className="grid-35">
                <label htmlFor="avatar">Your Photo</label>
              </div>
              <div className="grid-65">
                <span className="photo" title="Upload your Avatar!" />
                <input type="file" onChange={(e)=>setprourl(e.target.value)} className="btn" />
              </div>
            </fieldset>
          </div>
          <div className="form-group">
            <div className="form-row form-row-1">
              <input type="text" name="first_name" id="Name" className="input-text" placeholder="First Name" required onChange={(e)=>setname(e.target.value)
              } />
            </div>
          </div>
          <div className="form-row">
            <div className="form-row-2">
              <input type="text" name="first_name" id="first_name" className="input-text" placeholder="Date of Birth" required 
             onChange={(e)=>setdob(e.target.value)} />
            </div>
          </div>
          <div className="form-row">
            <input type="text" name="company" className="company" id="company" placeholder="About" required 
            onChange={(e)=>setabout(e.target.value)}/>
          </div>
          <div className="form-group">
            <div className="form-row form-row-3">
              <select name="Gender" onChange={(e)=>setgender(e.target.value)}>
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <span className="select-btn">
                <i className="zmdi zmdi-chevron-down" />
              </span>
            </div>
            <div className="form-row form-row-4">
              <select name="Food" onChange={(e)=>setfood(e.target.value)}>
                <option value="employees">Food Type</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Non-Vegetarian">non-Vegetarian</option>
                <option value="Vegan">Vegan</option>
              </select>
              <span className="select-btn">
                <i className="zmdi zmdi-chevron-down" />
              </span>
            </div>
          </div>
        </div>
        <div className="form-right">
          <h2>Contact Details</h2>
          <div className="form-row">
            <input type="text" name="street" className="street" id="street" placeholder="Country" required onChange={(e)=>setcountry(e.target.value)} />
          </div>
          <div className="form-row">
            <input type="text" name="additional" className="additional" id="additional" placeholder="Address" required onChange={(e)=>setaddress(e.target.value)} />
          </div>
          <div className="form-group">
            <div className="form-row-e">
              <input type="text" name="zip" className="zip" id="zip" placeholder="Email" required onChange={(e)=>setemail(e.target.value)}/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-row-3">
              <input type="text" name="zip" className="zip" id="zip" placeholder="Mobile-NO" required onChange={(e)=>setwno(e.target.value)} />
            </div>
          </div>
          <div className="form-checkbox">
            <label className="container"><p>I do accept the <a href="#" className="text">Terms and Conditions</a> of your site.</p>
              <input type="checkbox" name="checkbox" />
              <span className="checkmark" />
            </label>
          </div>
          <div className="form-row-last1">
            <button className='But'>Register</button>
          </div>
        </div>
      </form>
    </div>
  </div>
  )
}

export default ProfileEdit