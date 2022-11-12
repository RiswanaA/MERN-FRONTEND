import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import Axios from 'axios';
//import { response } from 'express';
export default function Owner() {
  const navigate = useNavigate();
  const [listOfCars, setListOfCars] = useState([]);
 // const [Car_id, setCarid] = useState("0");
  const [Car_name, setCarname] = useState("");
  const [Car_image,setCarimage]=useState("");
  const [Fuel_type, setFueltype] = useState("");
  const [Rent_per_day, setRentperday] = useState("0");
  const [Seater, setSeater] = useState("0");
  const cardetails = () => {
    Axios.post("http://localhost:3002/owner", {
      //Car_id: Car_id,
      Car_name: Car_name,
      Car_image:Car_image,
      Rent_per_day: Rent_per_day,
      Fuel_type: Fuel_type,
      Seater: Seater,

    }).then((response) => {

      setListOfCars([...listOfCars, {
       // Car_id,
        Car_name,
        Car_image,
        Rent_per_day,
        Fuel_type,
        Seater,

      }])
      alert(response.data);
      setTimeout(() => {
        window.location.href='/login'
      }, 500);
    }).catch(err => alert(err));
   
    navigate('/home');
  };
  return (
    <div className='OwnerPage'>
      <div>
        <h1>OWNER PAGE</h1>

        {/* CAR_ID:<input type='text' name='Car_id' onChange={(event) => { setCarid(event.target.value); }} /><br /><br></br> */}
        CAR_NAME:<input type='text' name='Car_name' onChange={(event) => { setCarname(event.target.value); }} /><br /><br></br>
        CAR_IMAGE:<input type='text' name='Car_image' onChange={(event) => { setCarimage(event.target.value); }} /><br /><br></br>
        RENT_PER_DAY:<input type='integer' name='Rent_per_day' onChange={(event) => { setRentperday(event.target.value); }} /><br /><br></br>
        FUEL_TYPE:<input type='text' name='Fuel_type' onChange={(event) => { setFueltype(event.target.value); }} /><br /><br></br>
        SEATER:<input type='integer' name='Seater' onChange={(event) => { setSeater(event.target.value); }} /><br /><br></br>
        <button onClick={cardetails}> SUBMIT CAR DETAILS </button>
      </div>
    </div>);
}