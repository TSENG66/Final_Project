import React from "react";
import "./inner.css"



import { Button, Input, DatePicker, Select} from 'antd';



export default ({checkPatient, name, id, setname, setid, setadd_t, setadd_f, add, reset, nowpatient, search, addrecord,
                  setaddpatient, sethome, setRecord, setContact, hello, logout, record_num, sym, setSym, medlist, setmed, today, list
})=>{

  const Search = (
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
            value = {name}
            placeholder = "Name"
            onChange = {setname}
          ></Input>
          <span>ID</span>
          <Input
            placeholder = "ID"
            value = {id}
            onChange = {setid}
          ></Input>
          <Button onClick={checkPatient}>Search</Button>
        </div>
      <div id="rightbar">
        <h2>Patient's Health Records</h2>
        <p><span className="blacktext">
          Please key in the patient's name and id completely to search for his or her admission notes.</span></p>
        <p>
        </p>
      </div>
        </div>
        <div id="bottom">
          <div id="email"><a href="b07901066@ntu.edu.tw">b07901066@ntu.edu.tw</a></div>
          <div id="validtext">
            <p>Bed is a medicine.</p>
          </div>
        </div>
      </div>
    </div>
  )
  const New = (
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
          <h3>Symptom</h3>
          <Input
            value={sym}
            onChange={setSym}
          ></Input>
          <h3>Medicine</h3>
          <Select
            mode="multiple"
            allowClear
            style={{ width: 300 }}
            placeholder="Please select"
            defaultValue={[]}
            onChange={setmed}
          >
          {medlist}
          </Select>
          <br />
        
          <h3>Today</h3>
            <DatePicker
              disabled = 'true'
              defaultValue={today}
            ></DatePicker>
        <Button onClick={addrecord}>ADD</Button>
      </div>
    <div id="rightbar">
      <h2>Current Patient</h2>
      <p><span className="blacktext">{nowpatient}</span></p>
      <p>
        <Button
          onClick = {reset}
        >Change Patient</Button>
        
        <Button
          onClick = {setadd_f}
        >View Admission Notes</Button>
      </p>
    </div>
      </div>
      <div id="bottom">
        <div id="email"><a href="b07901066@ntu.edu.tw">b07901066@ntu.edu.tw</a></div>
        <div id="validtext">
          <p>To know the disease is half the cure.</p>
        </div>
      </div>
    </div>
  </div>
  )

  
  
  const Result = (
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
              <li onClick={setRecord}>New Admission Notes</li>
              <li onClick={setContact}>Contact us</li>
            </ul>
          </div>
        </div>
        <div id="mainimg">
          <h3>Admission Note System</h3>
        </div>
      <div id="contentarea">
        <div id="leftbar">
          {record_num===0?<h2>No admission notes for current patient.</h2>:list}
        </div>
        <div id="rightbar">
          <h2>Current Patient</h2>
            <p><span className="blacktext">{nowpatient}</span></p>
          <p>
            <Button
              onClick = {reset}
            >Change Patient</Button>
            
            <Button
              onClick = {setadd_t}
            >Add New Note</Button>
          </p>
        </div>
        </div>
        <div id="bottom">
          <div id="email"><a href="b07901066@ntu.edu.tw">b07901066@ntu.edu.tw</a></div>
          <div id="validtext">
            <p>Bitter pills may have blessed effects.</p>
          </div>
        </div>
      </div>
    </div>
  )

  const ADD = (
    <div>{add?New:Result}</div>
  )
  return (
    <div>{search?ADD:Search}</div>
  );  
}
