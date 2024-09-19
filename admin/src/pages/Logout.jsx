import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useDispatch, useSelector } from 'react-redux';
// import { authLogout } from '../redux/userRelated/userSlice';
import styled from 'styled-components'
import Cookies from 'universal-cookie';
function Logout() {
    const cookies = new Cookies();
    const navigate = useNavigate();
   const user = cookies.get("user");
    const handleLogout = () => {
        alert("Logout ")
        cookies.remove('user') 

        window.location.href = "/Homepages"
    };

   

  return (
    <>
       
    
    <div>
         <button onClick={handleLogout}> </button> 
     </div>
       
    
    </>
  )
}

export default Logout
