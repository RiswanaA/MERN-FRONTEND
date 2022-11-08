import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
import "../styles/login.css";

export default function Login() {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const login = () => {
    Axios.post("http://localhost:3002/login", {
      email: email,
      pwd: pwd,
    }).then((response) => {

      alert(" login success");
    }).catch(err => alert(err));
  };
  return (
    <div className='Login'>
      <div>
        <h1>LOGIN</h1>
        <div className='label'>Enter your email</div>
        <input type='email' name='email' onChange={(event) => { setEmail(event.target.value) }} value={email} /><br /><br></br>


        <div className='label'>Enter your password</div>
        <input type='password' name='pwd' onChange={(event) => { setPwd(event.target.value) }} value={pwd} /><br /><br></br><br /><br></br>
        <button onClick={login}>LOGIN</button>
      </div>
    </div>
  );
}

