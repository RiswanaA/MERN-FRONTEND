import React from 'react';
import {  useNavigate } from "react-router-dom";
export default function CustomerPage()  {
    const navigate = useNavigate();
    const customerlogin = ()=>{
        navigate('/login');
    }
return(
    <div>
        <h3>CUSTOMER REGISTRATION SUCCESSFUL</h3>
        <button onClick={customerlogin}> LOGIN NOW </button>
    </div>
     
    
);
}