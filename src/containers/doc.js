import React from "react";
import "./inner.css"
import { Button, Input, Select } from 'antd';
import DoctorImg from "../images/doctor.png"

export default ({hello, logout, sethome_m, setdoc_m, setmed_m, setsetting_m, doclist, doctor_d, setDoctor_d,
                doc_usr, deletedoc
                
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
          
          <h1>Delete Doctors</h1>
          <Select
            showSearch
            style={{ width: 250 }}
            placeholder="Select a doctor"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            onChange={setDoctor_d}
        >
        {doclist}
        </Select>
        <h1>Detail Information</h1>
        <h3>{doc_usr}</h3>      
        <Button onClick={deletedoc}>Delete</Button>
        </div>
      <div id="rightbar">
        <img src={DoctorImg} style={{width: '200px'}}/>
      </div>
    </div>
    <div id="bottom">
      <div id="email"><a href="b07901066@ntu.edu.tw">b07901066@ntu.edu.tw</a></div>
      <div id="validtext">
        <p>Good health is over wealth.</p>
      </div>
    </div>
  </div>
</div>
  );  
}