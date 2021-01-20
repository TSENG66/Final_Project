import React from "react";
import "./inner.css"
import { Button, Input } from 'antd';
import ManagerImg from "../images/manager.png"

export default ({hello, logout, sethome_m, setdoc_m, setmed_m, setsetting_m,
                password_s_m, setpass_s_m,
                password_m_m, setpass_m_m, changepass_m,
                clinic_s, clinic_m, setclinic_s, setclinic_m, changeclin
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
              <li onClick={sethome_m}>Home</li>
              <li onClick={setdoc_m}>Edit Doctors</li>
              <li onClick={setmed_m}>Edit Medicine</li>
              <li onClick={setsetting_m}>Settings</li>
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
            value = {password_s_m}
            onChange = {setpass_s_m}
          ></Input>
           <Input
            placeholder = "New Password"
            type="password"
            value = {password_m_m}
            onChange = {setpass_m_m}
          ></Input>
          <Button onClick={changepass_m}>Submit</Button>
          <h3>Change ClinicID</h3>
          <Input
            placeholder = "Old ClinicID"
            value = {clinic_s}
            onChange = {setclinic_s}
          ></Input>
           <Input
            placeholder = "New ClinicID"
            value = {clinic_m}
            onChange = {setclinic_m}
          ></Input>
          <Button onClick={changeclin}>Submit</Button>
        </div>
      <div id="rightbar">
        <img src={ManagerImg} style={{width: '200px'}}/>
      </div>
    </div>
    <div id="bottom">
      <div id="email"><a href="b07901066@ntu.edu.tw">b07901066@ntu.edu.tw</a></div>
      <div id="validtext">
        <p>Health is happiness.</p>
      </div>
    </div>
  </div>
</div>
  );  
}