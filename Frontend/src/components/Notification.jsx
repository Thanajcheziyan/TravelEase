import React from 'react'
import './CSS/Notification.css'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notification = () => {
  const [popup,setPop]=useState(false)
  const handleClickOpen=()=>{
      setPop(!popup)
      
      
  }
  const closePopup=()=>{
      setPop(false)
  }
  const [rating,setRating]=useState(null);
  const [hover,setHover]=useState(null);
  const navigate=useNavigate(); 
  const location=useLocation();
  const [data, setData] = useState([]);
  const [username,setusername]=useState('')
  
  const to=location.state.Email;
  useState(async(e)=>{
    const response=await fetch("https://travelease.onrender.com/api/Notification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({to}),
    })
    
    
    const data = await response.json()
    
      if(data){
        console.log(data)
        setData(data.user)}})
  const handleSubmit1 = async (param) => {   
    notify()
         const response=await fetch("https://travelease.onrender.com/api/CNotification", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({from:to,to:param.From,type:"1",service:param.Service}),
          })  
     unotification(param)     
        }    
const handleSubmit2 = async (param) => {   
            notify1()
                 const response=await fetch("https://travelease.onrender.com/api/CNotification", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({from:to,to:param.From,type:"3",service:param.Service}),
                  }) 
                  deletenotification(param)
                 }
  const unotification=async(param)=>{
    
    const response1=await fetch("https://travelease.onrender.com/api/uNotification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({too:param._id}),
    })
  } 
  const deletenotification=async(param)=>{
    
    const response1=await fetch("https://travelease.onrender.com/api/DNotification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({too:param._id}),
    })
  }    
  const notify = () => toast.success("Accepted !",{
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

    const notify1 = () => toast.success("Rejected !",{
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });  

  
 
        
  const Book = ({_id,From,Type,Service})=>{
   
    
    if(Type ==="1" )return(
      
   <div className="toast toast--green">
            <div className="toast__content">
              <p className="toast__type">{From} has accepted your request for {Service}</p>
              <div className='too1'>
              <button className="toast__message">chat</button>
              <button className="toast__message" onClick={handleClickOpen}>Rate!</button>

              </div>
            </div>
           
            </div>
          
        
    )

    else if(Type==="2")return(
      <div className="toast toast--blue add-margin">
            <div className="toast__content">
              <p className="toast__type">{From} has requested You for {Service}</p>
              <div className="toast__message">
                <button className="profv" onClick={()=>navigate("/Profile",{state:{Email:From}})}>view profile</button>
                <div className="optionb">
                  <button className="reject" onClick={()=>{handleSubmit2({_id,From,Service})}}>reject</button>
                  <button className="accept" onClick={()=>{handleSubmit1({_id,From,Service})}}>accept</button>
                </div>
              </div>
            </div>
          </div>

    )
    else if(Type==="3")return(
      <div className="toast toast--yellow add-margin">
            <div className="toast__content">
              <p className="toast__type">{From} has rejected your request for {Service}</p>
            </div>
          </div>
    )
    if(Type ==="4" )return(
      
      <div className="toast toast--green">
               <div className="toast__content">
                 <p className="toast__type">You accepted request for {Service} to {From}</p>
                 
                 <div className='too1'>
              <button className="toast__message">chat</button>
              <button className="toast__message" onClick={handleClickOpen}>Rate!</button>
              </div>
               </div>
              
             </div>
           
       )


    }

  return (
    <div className='Notif'>
      
    
    

        <div className="toast__container">
        <div className="toast__cell">
        <ul>
        {data.map(Book)}
      </ul>
          
        </div>
        <div className='heee'>
                {
                    popup?
                   
                    <div className="main1">
                      <div className='hee'>Give Rating!</div>
                        <div className="popu">
                            <div className="popup-heade">
                              {[...Array(5)].map((star,i)=>{
                                const ratingvalue=i+1;
                                return <label className='le'>
                                  <input 
                                  type={'radio'} 
                                  name="rating" 
                                  value={ratingvalue} 
                                  onClick={()=>setRating(ratingvalue)}
                                 >
                                  </input>
                                  <FaStar className='Star' 
                                  color={ratingvalue<=(hover||rating)?"#ffc107":"#e4e5e9"}
                                  size={20}
                                  onMouseEnter={()=>setHover(ratingvalue)}
                                  onMouseLeave={()=>setHover(null )}
                                 
                                  /></label>
                              })}
                                
                            </div>
                            </div>
                            <div className='cl'>
                            <button className="sub" onClick={closePopup}>Submit</button></div>
                        
                    
                    </div>:""
                }

              </div>

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

export default Notification;