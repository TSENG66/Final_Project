import React, { useState } from "react";
import "./inner.css"
import axios from 'axios';
import { Button, Input, message, DatePicker, Tag } from 'antd';
import PatientImg from "../images/patient.jpg"




const API_ROOT = 'http://localhost:4000/api'
const instance = axios.create({
  baseURL: API_ROOT
})

export default ({hello, logout, setRecord, setaddpatient, sethome, setContact,
                 name, setname, id, setID, birth, setBirth, checkSubmit
}) => {
  
  return (
    <div id="wrapper">
      <div id="content">
        <div id="header">
          <div id="logo">
            <h1>{hello}</h1>
            <div className="logout">
              <Button
                onClick={logout}
              >log out</Button>
            </div>
          </div>
          <div id="links">
            <ul>
              <li onClick={sethome}>Home</li>
              <li onClick={setaddpatient}>Add New Patient</li>
              <li onClick={setRecord}>Admission Note</li>
              <li onClick={setContact}>Settings</li>
            </ul>
          </div>
        </div>
        <div id="mainimg">
          <h3>Admission Note System</h3>
        </div>
      <div id="contentarea">
        <div id="leftbar">
          <span>Name</span>
         <Input
          value={name}
          onChange={setname}
          placeholder="Name"
         ></Input>
         <span>ID</span>
         <Input
          value={id}
          onChange={setID}
          placeholder="ID"
         ></Input>
         <span>Birth date</span>
         <DatePicker
          mode = "date"
          value = {birth}
          onChange = {setBirth}
          format = "YYYY-MM-DD"
         ></DatePicker>
         <div>
           <Button onClick={checkSubmit}>Submit</Button>
         </div>
        </div>
      <div id="rightbar">
        <img src={PatientImg} style={{width: '200px'}}/>
      </div>
    </div>
    <div id="bottom">
        <div id="email"><a href="b07901066@ntu.edu.tw">b07901066@ntu.edu.tw</a></div>
        <div id="validtext">
          <p>Health is not valued till sickness comes.</p>
        </div>
    </div>
  </div>
</div>
  );  
}
