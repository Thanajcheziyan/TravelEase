import React, { useState } from 'react'
import './CSS/FindHost.css'
import { useLocation, useNavigate } from 'react-router-dom'
import {FaBell,FaHome,FaSignOutAlt} from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FindCar = () => {
  const navigate=useNavigate();
  const location=useLocation(); 
  const [data, setData] = useState([]);
  const from=location.state.From;
  const to=location.state.to;
  const dat=location.state.Date;

  const eemail=location.state.Email;
  useState(async(e)=>{
    const response=await fetch("https://travelease.onrender.com/api/CarSearch", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({from:from,to:to,dat:dat}),
  })
  
  
  const data = await response.json()
  if(data){
    setData(data.user)
    console.log(data)

  }
   
  
  })
  const handleSubmit1 = async (param) => {   
    notify()
         const response=await fetch("https://travelease.onrender.com/api/CNotification", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({from:eemail,to:param.profileid,type:"2",service:"Car-Service"}),
          })  } 
          const notify = () => toast.success("Requested !",{
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });       
  const Book = ({Departure,Destination,Date,profileid}) => 
  <li >
    <div className="Hcard">
    <a  className="Hcard__title">{Departure} to {Destination}
        </a>
        <p className="Hcard__content">Date : {Date} </p>
        <div className="card__date">
          <div className="card-profile">
            <a onClick={()=>navigate("/Profile",{state:{Email:profileid}})}>view profile</a>
          </div>
          <div className="hrequest">
            <button onClick={()=>{handleSubmit1({profileid})}}>Request</button>
          </div>
        </div>
      </div>
        </li>
  return (
<div className='FH'>
<div className="Tit">
            <div className="Log">
                <div className="Logo"></div>
            </div>
            <div className="Left">
                <ul>
                    
                    <li><a onClick={()=>navigate("./Login")}><FaBell size={30}/></a></li>
                    <li><a onClick={()=>navigate("./Register")}><FaHome size={30}/></a></li>
                    <li><a onClick={()=>navigate("./Register")}><FaSignOutAlt size={30}/></a></li>
                </ul>
            </div>
        </div>
     <ul>
        {data.map(Book)}
      </ul>  
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

export default FindCar;