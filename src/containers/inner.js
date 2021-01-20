import React from "react";
import "./inner.css"
import { Button} from 'antd';
import DoctorImg from "../images/doctor.png"

export default ({hello, logout, setRecord, sethome, setaddpatient, setContact
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
          <h2>Introduction</h2>
          <p>In this Experimental system, login as a doctor, you're able to add new coming patients to database. Create the admission note for the patient, and of course, search for the admission notes.</p>
          <br />
          <p>All the data of patients and admission notes is based on the clinicID when you registered. Don't worry if the manager changed the clinicID, all data of the clinic will also be updated. However, manager have the authority to eliminate your account, so if you find that you can't login, please check that whether you were eliminated. </p>
          <br />
          <br />
          <br />
        </div>
      <div id="rightbar">
        <img src={DoctorImg} style={{width: '200px'}}/>
      </div>
    </div>
    <div id="bottom">
      <div id="email"><a href="b07901066@ntu.edu.tw">b07901066@ntu.edu.tw</a></div>
      <div id="validtext">
        <p>Prescribe the right medicine for a symptom.</p>
      </div>
    </div>
  </div>
</div>
  );  
}
