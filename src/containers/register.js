import React from "react";
import "./register.css";
import { Button, Input} from 'antd';


export default ({click_back, firstname, lastname, username, password, password_C, clinic,
                 set_reg_first, set_reg_last, set_reg_pass, set_reg_usr, set_reg_clin, set_reg_pass_C,
                 regisSubmit, reg_click_doc, reg_click_man
}) => {

  return (
    <div className="body">
      <div className="Reg">
        <div className="title">
          Create Your Account!!
        </div>
        <div className="Login-title">
            <Button id="doc_r" onClick={reg_click_doc}>
              Doctor
            </Button>
            <button id="man_r" onClick={reg_click_man}>
              Manager
            </button>

        </div>
        <div className="name">
          <Input 
            value={firstname}
            onChange={set_reg_first}
            className="info"
            placeholder="First Name"
            allowClear = 'true'
          >
          </Input>
          <Input 
            value={lastname}
            onChange={set_reg_last}
            className="info"
            placeholder="Last Name"
            allowClear = 'true'
          >
          </Input>
          <Input 
            value={username}
            type="username"
            onChange={set_reg_usr}
            className="info"
            placeholder="Username"
            allowClear = 'true'
          >
          </Input>
          <Input 
            value={password}
            type = "password"
            onChange={set_reg_pass}
            className="info"
            placeholder="Password (greater or equal to 8 characters.)"
            allowClear = 'true'
          >
          </Input>
          <Input 
            value={password_C}
            type="password"
            onChange={set_reg_pass_C}
            className="info"
            placeholder="Comfirm Password"
            allowClear = 'true'
          >
          </Input>
          <Input
            value={clinic}
            onChange={set_reg_clin}
            className="info"
            placeholder="Clinic Code (it should be 10 numbers)"
            allowClear = 'true'
          >
          </Input>
        </div>
        <div className="reg_but">
          <Button onClick={regisSubmit}>
            Register
          </Button>
        </div>
        
        <div className="goback">
          <span>Go back to </span>
          <button className="back" onClick={click_back}>
          login page
         </button>
        </div>
      </div>
    </div>
  );  
}
