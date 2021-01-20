import React from "react";
import { Button, Input} from 'antd';
import "./login.css";

export default ({click_signup, login_usr, login_pass, set_login_usr, set_login_pass,
                  login_click_man, login_click_doc, loginSubmit
}) => {
  return (
    <div className="body">
      <div className="Login">
        <span className="title">Sign in as</span>
        <div className="Login-title">
            <Button id="doc" onClick={login_click_doc}>
              Doctor
            </Button> 
            <Button id="man" onClick={login_click_man}>
              Manager
            </Button>
        </div>
          <h1>Username</h1>
          <Input
            style={{ width: 400 }}
            type="username"
            value={login_usr}
            onChange={set_login_usr}
          />
          <h1>Password</h1>
          <Input
            style={{ width: 400 }}
            type="password"
            value={login_pass}
            onChange={set_login_pass}
          />
          <Button className="Login_Button" onClick={loginSubmit} style={{ width: 150 }}>
            Login
          </Button>
        <div className="signup">
          <span>Not a member? </span>
          <Button onClick={click_signup}>
          sign up
         </Button>
        </div>
      </div>
    </div>
  );  
}
