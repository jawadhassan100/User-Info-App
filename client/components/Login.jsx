import { useRouter } from "next/router";
import React from 'react'
import { useState } from 'react';
import axios from "axios";

const Login = () => {
    let [email, setEmail] = useState("");
let [password, setPassword] = useState("");
     let navigate = useRouter();
    function emailHandler(e) {
    setEmail(e.target.value);
  }
  function passwordHandler(e) {
    setPassword(e.target.value);
  }
  async function registerHandler(e) {
  e.preventDefault();
  let data = {
    Email: email,
    Password: password,
  }
  console.log(data);
    const response = await axios.post("http://localhost:8899/api/user", data, {
        'Content-Type': 'application/json'})
        console.log(response.data);
        if(response.data.message){
          alert(response.data.message)
          return null;
        }
        navigate.push("/userInfo")
    }      
  return (
   
    <div className=' d-flex justify-content-center align-items-center mt-5 ' >
         
    <div className='card w-25 p-2 d-flex justify-content-center align-items-center rounded border-dark' >
        <h3 className='text-uppercase '>Add Info</h3>
        <br />
    <form onSubmit={registerHandler}>
  <div className="form-group ">
    <label for="exampleInputEmail1">Email </label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onInput={emailHandler} required></input>
  </div>
  <br />
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onInput={passwordHandler} required></input>
  </div>
  <br />
   <button className="btn btn-primary">Submit</button>
  </form>
  </div>
</div>
    
  )
}

export default Login
