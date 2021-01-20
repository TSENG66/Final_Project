import React from "react";
import "./inner.css"
import { Button} from 'antd';
import ManagerImg from "../images/manager.png"

export default ({hello, logout, sethome_m, setdoc_m, setmed_m, setsetting_m
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
          <h2>Intrudution</h2>
          <p>In this Experimental system, login as a manager, you're able to manage the medicine that can be used in this clinic. Also, you have the authority to delete doctors that sign up under this clinic.</p>
          <br />
          <p>In order to create admission notes or manage admission notes, you should register for a doctor account. The system doesn't support a manager account having functions that a dictor accout has. I apologized for the inconvenient</p>
          <br />
          <br />
          <br />
        </div>
      <div id="rightbar">
        <img src={ManagerImg} style={{width: '200px'}}/>
      </div>
    </div>
    <div id="bottom">
      <div id="email"><a href="b07901066@ntu.edu.tw">b07901066@ntu.edu.tw</a></div>
      <div id="validtext">
        <p>Cheerfulneis the promoter of health.</p>
      </div>
    </div>
  </div>
</div>
  );  
}
