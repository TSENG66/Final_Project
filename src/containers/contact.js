import React from "react";
import "./inner.css"
import { Button, Input } from 'antd';
import DoctorImg from "../images/doctor.png"

export default ({hello, logout, setRecord, sethome, setaddpatient, setContact,
                password_s, setpass_s,
                password_m, setpass_m, changepass
})=> {
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
          
          <h3>Change Password</h3>
          <Input
            placeholder = "Old Password"
            type="password"
            value = {password_s}
            onChange = {setpass_s}
          ></Input>
           <Input
            placeholder = "New Password"
            type="password"
            value = {password_m}
            onChange = {setpass_m}
          ></Input>
          <Button onClick={changepass}>Submit</Button>
        </div>
      <div id="rightbar">
        <img src={DoctorImg}  style={{width: '200px'}}/>
      </div>
    </div>
    <div id="bottom">
      <div id="email"><a href="b07901066@ntu.edu.tw">b07901066@ntu.edu.tw</a></div>
      <div id="validtext">
        <p>Temperance is the best physic.</p>
      </div>
    </div>
  </div>
</div>
  );  
}