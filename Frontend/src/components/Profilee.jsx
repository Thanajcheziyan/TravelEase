import React from 'react'
import './CSS/Profilee.css'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {FaBell,FaHome} from 'react-icons/fa'
import {Image} from 'cloudinary-react'
function Profilee() {
  const location = useLocation();
  const navigate=useNavigate();
  const [data, setData] = useState([]);
  const eemail=location.state.Email;
useState(async(e)=>{
 
  const response=await fetch("http://localhost:4000/api/Profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({eemail}),
  })
  
  
  const data = await response.json()
  if(data){
    setData(data.user)

  } 
  })
  return (
    
   <div className='Profile1'>
      <div className="navbar-top">
          <div className="title">
            <h1>Profile</h1>
          </div>
          {/* Navbar */}
          <ul>
            <li>
              <a  onClick={()=>navigate('/Notification',{state:{Email:eemail}})}>
                
                <FaBell size={30}/>
              </a>
            </li>
            <li>
              <a onClick={()=>navigate('/HomeLogin',{state:{Email:eemail}})}>
                
                <FaHome size={30}  />
              </a>
            </li>
            <li>
              <a href="#sign-out">
                <i className="fa fa-sign-out-alt fa-2x" />
              </a>
            </li>
          </ul>
          {/* End */}
        </div>
        {/* End */}
        {/* Sidenav */}
        <div className="sidenav">
          <div className="profile" >
          <Image cloudName="dkuuta6c3" publicId={data.ProfilePic}
          width="100" height="100"
          />
            <div className="name">
              {data.Name}
            </div>
            <div className="job">
              {data.DOB}
            </div>
          </div>
          <div className="sidenav-url">
            <div className="url">
              <a href="#profile" className="active">Profile</a>
              <hr align="center" />
            </div>
            <div className="url">
              <a onClick={()=>navigate('/Profile-Edit')}>Edit-Profile</a>
              <hr align="center" />
            </div>
          </div>
          <div className='Rating'>
          <h2>RATING</h2>
          <div className='card3'>
         <div className='va'>{data.ratings}</div>
         <div className='//'>/</div>
         <div className='tot'>5</div>
            </div>
          </div>
        </div>
        {/* End */}
        {/* Main */}
        <div className="main">
          <h2>{}</h2>
          <div className="card">
            <div className="card-body">
              <i className="fa fa-pen fa-xs edit" />
              <table>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>:</td>
                    <td>{data.Name}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>:</td>
                    <td>{data.Email}</td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td>:</td>
                    <td>{data.Address}</td>
                  </tr>
                  <tr>
                    <td>Gender</td>
                    <td>:</td>
                    <td>{data.Gender}</td>
                  </tr>
                  <tr>
                    <td>Food</td>
                    <td>:</td>
                    <td>{data.Food}</td>
                  </tr>
                 
                  <tr>
                    <td>Whatsapp No</td>
                    <td>:</td>
                    <td>{data.WhatsappNo}</td>
                  </tr>
                  <tr>
                    <td>Country</td>
                    <td>:</td>
                    <td>{data.Country}</td>
                  </tr>
                  <tr>
                    <td>About</td>
                    <td>:</td>
                    <td>{data.About}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
         
          </div>
          
              </div>
            
        
  
  )
}

export default Profilee