import React from "react";
import "./inner.css"
import { Button, Input, Select } from 'antd';
import MedicineImg from "../images/medicine.jpg"

export default ({hello, logout, sethome_m, setdoc_m, setmed_m, setsetting_m, 
                 setmed_d, medlist, delete_med, name_med, setname_med, eff_med, 
                 seteff_med, add_med, setfind_d, find_med, detail_name_d, detail_eff_d
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
        <div>
          <h1>Find Medicine</h1>
          <Select
            showSearch
            style={{ width: 250 }}
            placeholder="Select medicine"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            onChange={setfind_d}
          >
          {medlist}
          </Select>
          <Button onClick={find_med}>Find</Button>
          <h3>Name : </h3>
          <h5>{detail_name_d}</h5>
          <h3>Effect</h3>
          <h5>{detail_eff_d}</h5>
        </div>
        <div>
          <h1>Delete Medicine</h1>
          <Select
            showSearch
            style={{ width: 250 }}
            placeholder="Select medicine"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            onChange={setmed_d}
          >
          {medlist}
          </Select>  
          <Button onClick={delete_med}>Delete</Button>
        </div>
        <div>
          <h1>Add Medicine</h1>
          <Input
            placeholder="Name"
            style={{ width: 300 }}
            value={name_med}
            onChange={setname_med}
          ></Input>
          <Input
            placeholder="Effect"
            style={{ width: 300 }}
            value={eff_med}
            onChange={seteff_med}
          ></Input>
          <Button onClick={add_med}>ADD</Button>
        </div>
        
      </div>
      <div id="rightbar">
        <img src={MedicineImg} style={{width: '200px'}}/> 
      </div>
    </div>
    <div id="bottom">
      <div id="email"><a href="b07901066@ntu.edu.tw">b07901066@ntu.edu.tw</a></div>
      <div id="validtext">
        <p>An apple a day keeps the doctor away.</p>
      </div>
    </div>
  </div>
</div>
  );  
}