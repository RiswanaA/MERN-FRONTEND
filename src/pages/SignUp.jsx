import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import Axios from 'axios';
export default function Signup() {
  const navigate = useNavigate();

  const [listOfUsers, setListOfUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [contactno, setContactno] = useState("0");
  const [usertype, setUsertype] = useState("");
  const register = () => {
    if (usertype == 'owner') {
      Axios.post("http://localhost:3002/signup", {

        username: username,

        email: email,
        pwd: pwd,
        contactno: contactno,
      }).then((response) => {

        setListOfUsers([...listOfUsers, {

          username,
          email,
          pwd,
          contactno,

        }])
        alert("OWNER REGISTRATION SUCCESSFUL. NOW ENTER YOUR CAR DETAILS");

      }).catch(err => console.log(err));

      navigate('/owner');
    }
    else {
      Axios.post("http://localhost:3002/customer", {

        username: username,

        email: email,
        pwd: pwd,
        contactno: contactno,


      }).then((response) => {

        setListOfUsers([...listOfUsers, {

          username,
          email,
          pwd,
          contactno,

        }])
        alert("CUSTOMER REGISTRATION SUCCESSFUL.");
      }).catch(err => console.log(err));
      navigate('/customer');

    }
  };
  return (
    <div className='SignUp'>

      <div>
        <h1>REGISTER</h1>


        Name:<input type='text' name='name' onChange={(event) => { setUsername(event.target.value); }} /><br /> <br></br>

        Email:<input type='email' name='email' onChange={(event) => { setEmail(event.target.value); }} /><br /><br></br>


        password:<input type='password' name='pwd' onChange={(event) => { setPwd(event.target.value); }} /><br /><br></br><br /><br></br>

        contactno:<input type='number' name='contactno' onChange={(event) => { setContactno(event.target.value); }} /><br /><br></br>
        usertype:<select name='usertype' onChange={(event) => { setUsertype(event.target.value); }}>
          <option value="customer">CUSTOMER</option>
          <option value="owner">OWNER</option>
        </select>


        <br /><br></br>
        <br /><br></br>
        <br /><br></br>


        <br></br><br></br>
        <button onClick={register}> REGISTER </button>




      </div>
      <div>

      </div>
    </div>);

}


