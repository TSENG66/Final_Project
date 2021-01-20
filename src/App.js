import React, { useState } from "react";
import {message, Select} from 'antd';
import moment from 'moment';

import "./containers/login.css"
import "./containers/register.css"
import "./containers/list.css"

import DeleteImg from "./images/x.png"

import Login from "./containers/login";
import Register from "./containers/register";
import Inner from "./containers/inner";
import Record from "./containers/record"
import Patient from "./containers/patient"
import Contact from "./containers/contact"
import Inner_m from "./containers/inner_m"
import Setting from "./containers/setting"
import Doc from "./containers/doc"
import Drug from "./containers/drug"
import axios from 'axios';
const API_ROOT = 'http://localhost:4000/api'
const instance = axios.create({
  baseURL: API_ROOT
})


function App() {
    const [signup, setSignup] = useState(false)
    const [clinic, setClinic] = useState("");   
    const [signin, setSignin] = useState(false)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(0);
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [doctors, setDoctors] = useState([])
    const [drugs, setDrugs] = useState([])

    
    
//================ Login ==========================///
    const reset = () =>{
        setSignup(false)
        setSignin(false)
        setClinic("")
        setUsername("")
        setPassword("")
        click_usr(0)
        setFirstName("")
        setLastName("")
        setDoctors([])
        setDrugs([])
    }
    const displayStatus = (s) => {
        if (s.msg) {
          const { type, msg } = s
          const content = {
            content: msg,
            duration: 1
          }
          switch (type) {
            case 'success':
              message.success(content)
              break
            case 'info':
              message.info(content)
              break
            case 'danger':
            default:
              message.error(content)
            break
          }
        }
    }
    const click_usr = (type) => {
        if(user === 0){
          setUser(type)
          if(type === 1){
            document.getElementById('doc').style.borderColor = "green"
          }
          else if(type === 2){
            document.getElementById('man').style.borderColor = "green"
          }
        }
        else if(user === 1){
          if(type === 1){
            document.getElementById('doc').style.borderColor = "red"
            setUser(0)
          }
          else if(type === 2){
            document.getElementById('man').style.borderColor = "green"
            document.getElementById('doc').style.borderColor = "red"
            setUser(2)
          }
        } 
        else if(user === 2){
          if(type === 1){
            document.getElementById('doc').style.borderColor = "green"
            document.getElementById('man').style.borderColor = "red"
            setUser(1)
          }
          else if(type === 2){
            document.getElementById('man').style.borderColor = "red"
            setUser(0)
          }
        }
    }
    const login_submit = () => {
        if(user===0){
          displayStatus({
            type: 'error',
            msg: 'Please select an account identity !!'
          })
          return
        }
        if(!username){
          displayStatus({
            type: 'error',
            msg: 'Please enter Username!!'
          })
          return
        }
        if(!password){
          displayStatus({
            type: 'error',
            msg: 'Please enter Password!!'
          })
          return
        }
        if(user === 1){
          const outcome = instance.post('/checkDoctor', {username, password})
          let C = outcome.then(response => response.data).then(response => response.content)
          let M = outcome.then(response => response.data).then(response => response.msg)
          let S = outcome.then(response => response.data).then(response => response.state)
          C.then((result) => {
            if(result === false){
              M.then((message)=>{
                displayStatus({
                  type: 'error',
                  msg: message
                })
                
              })
              setPassword("")
              return
            }
            else{
              S.then((status)=>{
                  setFirstName(status.doctorFirst)
                  setLastName(status.doctorLast)
                  setClinic(status.clinicID)
                  medicine_find(status.clinicID)
              })
              M.then((message)=>{
                displayStatus({
                  type: 'success',
                  msg: message
                })            
              })
              console.log(M);
              console.log(S);
              setSignin(true)
              setInnermode(0)
              
              return
            }
            
          });
        }
        else if(user===2){
          const outcome = instance.post('/checkManager', {username, password})
          let C = outcome.then(response => response.data).then(response => response.content)
          let M = outcome.then(response => response.data).then(response => response.msg)
          let S = outcome.then(response => response.data).then(response => response.state)
          C.then((result) => {
            if(result === false){
              M.then((message)=>{
                displayStatus({
                  type: 'error',
                  msg: message
                })
              })
              setPassword("")
              return
            }
            else{
              console.log(S)
              
              S.then((status)=>{
                  setFirstName(status.managerFirst)
                  setLastName(status.managerLast)
                  setClinic(status.clinicID)
                  doctor_find(status.clinicID)
                  medicine_find(status.clinicID)
              })
              M.then((message)=>{
                displayStatus({
                  type: 'success',
                  msg: message
                })
              })
              setSignin(true)
              setInnermode(4)
              
              return
            }
            
          });
        }
    }
    const login = (
        <Login click_signup={() => setSignup(true)}
            login_usr={username}
            login_pass={password}
            set_login_usr={(e)=> setUsername(e.target.value)}
            set_login_pass={(e)=> setPassword(e.target.value)}
            login_click_doc={()=>click_usr(1)}
            login_click_man={()=>click_usr(2)}
            loginSubmit = {login_submit}
        />
    )
//================ Login ==========================///

//================ Register ==========================///
    const [firstname_r, setFirstName_r] = useState("")
    const [lastname_r, setLastName_r] = useState("")  
    const [username_r, setUsername_r] = useState("")     
    const [password_r, setPassword_r] = useState("")
    const [user_r, setUser_r] = useState(0)
    const [password_C_r, setPassword_C_r] = useState("")
    const [clinic_r, setClinic_r] = useState("")

    const regis_submit = () =>{
        if(user_r===0){
          displayStatus({
            type: 'error',
            msg: 'Please select an account identity !!'
          })
          return false;
        }
        if(!firstname_r){
          displayStatus({
            type: 'error',
            msg: 'Please enter First Name!!'
          })
          return false;
        }
        if(!lastname_r){
          displayStatus({
            type: 'error',
            msg: 'Please enter Last Name!!'
          })
          return false;
        }
        if(!username_r){
          displayStatus({
            type: 'error',
            msg: 'Please enter Username!!'
          })
          return false;
        }
        if(!password_r){
          displayStatus({
            type: 'error',
            msg: 'Please enter Password!!'
          })
          return false;
        }
        if(password_r.length < 8){
          displayStatus({
            type: 'error',
            msg: 'Your Password is less than 8 characters!!'
          })
          return false;
        }
        if(password_r !== password_C_r){
          displayStatus({
            type: 'error',
            msg: 'Two passwords are not the same, please try again!!'
          })
          return false;
        }
        if(!clinic_r){
          displayStatus({
            type: 'error',
            msg: 'Please enter Clinic Code!!'
          })
          return false;
        }
        if(clinic_r.length !== 10){
            displayStatus({
                type: 'error',
                msg: 'Your Clinic ID should contain 10 numbers!!'
              })
              return false;
        }
        else{
            if(!clinic_r.match(/^[0-9]+$/)){
                displayStatus({
                    type: 'error',
                    msg: 'Your Clinic ID should contain only numbers of 0-9!!'
                  })
                  return false;
            }
        }
        if(user_r === 1){
          const outcome = instance.post('/addDoctor', {firstname_r, lastname_r, username_r, password_r, clinic_r})
          let S = outcome.then(response => response.data).then(response => response.content)
          let M = outcome.then(response => response.data).then(response => response.msg)
          S.then((result) => {
            if(result === false){
              M.then((message)=>{
                displayStatus({
                  type: 'error',
                  msg: message
                })
              })
              reset_r()
              return false;
            }
            else{
              M.then((message)=>{
                displayStatus({
                  type: 'success',
                  msg: message
                })
                reset_r()
                setSignup(false)
                return true;
              }) 
            }
          });
        }
        else if(user_r === 2){
          const outcome = instance.post('/addManager', {firstname_r, lastname_r, username_r, password_r, clinic_r})
          let S = outcome.then(response => response.data).then(response => response.content)
          let M = outcome.then(response => response.data).then(response => response.msg)
          S.then((result) => {
            if(result === false){
              M.then((message)=>{
                displayStatus({
                  type: 'error',
                  msg: message
                })
                reset_r()
                return false;
              })
            }
            else{
              M.then((message)=>{
                displayStatus({
                  type: 'success',
                  msg: message
                })
                reset_r()
                setSignup(false)
                return true;
              })
            }
            
          });
        }
        
    }
    const click_usr_r = (type) => {
        if(user_r === 0){
          setUser_r(type)
          if(type === 1){
            document.getElementById('doc_r').style.borderColor = "green"
          }
          else if(type === 2){
            document.getElementById('man_r').style.borderColor = "green"
          }
        }
        else if(user_r === 1){
          if(type === 1){
            document.getElementById('doc_r').style.borderColor = "red"
            setUser_r(0)
          }
          else if(type === 2){
            document.getElementById('man_r').style.borderColor = "green"
            document.getElementById('doc_r').style.borderColor = "red"
            setUser_r(2)
          }
        } 
        else if(user_r === 2){
          if(type === 1){
            document.getElementById('doc_r').style.borderColor = "green"
            document.getElementById('man_r').style.borderColor = "red"
            setUser_r(1)
          }
          else if(type === 2){
            document.getElementById('man_r').style.borderColor = "red"
            setUser_r(0)
          }
        }
    }
    const reset_r = () =>{
        setUser_r("")
        setFirstName_r("")
        setLastName_r("")
        setUsername_r("")
        setPassword_r("")
        setPassword_C_r("")
        setClinic_r("")
    }
    const register = (
        <Register click_back={() => setSignup(false)}
                  firstname={firstname_r}
                  lastname={lastname_r}
                  username={username_r}
                  password={password_r}
                  password_C={password_C_r}
                  clinic={clinic_r}
                  set_reg_first={(e)=>setFirstName_r(e.target.value)}
                  set_reg_last={(e)=>setLastName_r(e.target.value)}
                  set_reg_usr={(e)=>setUsername_r(e.target.value)}
                  set_reg_pass={(e)=>setPassword_r(e.target.value)}
                  set_reg_pass_C={(e)=>setPassword_C_r(e.target.value)}
                  set_reg_clin={(e)=>setClinic_r(e.target.value)}
                  regisSubmit={regis_submit}
                  reg_click_doc={()=>click_usr_r(1)}
                  reg_click_man={()=>click_usr_r(2)}
        />
    )
//================ Register ==========================///
//================ Record =============================///
    const [name_p, setName_p] = useState("");
    const [id_p, setID_p] = useState("")
    const [records, setRecords] = useState([])
    const [record_num, setRecord_Num] = useState(0)
    const [search, setSearch] = useState(false)
    const [add, setADD] = useState(false)
    const [nowpatient, setNowPatient] = useState("")
    const [innermode, setInnermode] = useState(0)
    const [symtom, setSymtom] = useState("")
    const [medicine, setMedicine] = useState("")
    const [date, setDate] = useState(moment())
    const Logout = () => {
        reset();
        reset_a()
        reset_r();
        reset_p();
        reset_d();
        reset_c();
        reset_s_m();
        
    }
    const { Option } = Select;
    let medlist =  drugs.map((e) => (
        <Option value={e.Name}>
        {e.Name}
        </Option>
        )
    )
    const reset_p = () => {
        setName_p("")
        setID_p("")
        setSearch(false)
        setRecords([])
        setADD(false)
        setNowPatient("")
      }
    const patient_find = () => {
        const outcome = instance.post('/checkPatient', {name_p, id_p, clinic})
        let S = outcome.then(response => response.data).then(response => response.content)
        let M = outcome.then(response => response.data).then(response => response.msg)
        S.then((result) => {
          if(result === false){
            M.then((message)=>{
              displayStatus({
                type: 'error',
                msg: message
              })
            })
            reset_p()
            return
          }
          else{
            M.then((message)=>{
              displayStatus({
                type: 'success',
                msg: message
              })            
            })
            setNowPatient(name_p)
            setSearch(true)
            record_find()
            return
          }
        });
    }
    const addrecord = () => {
        if(!symtom){
            displayStatus({
              type: 'error',
              msg: 'Please enter Symptom!!'
            })
            return
        }
        if(!medicine){
            displayStatus({
              type: 'error',
              msg: 'Please enter Medicine!!'
            })
            return
        }
        let current_doc = firstname + ", " + lastname;
        let date_p = date.format('YY-MM-DD').toString()
        const outcome = instance.post('/addRecord', {symtom, clinic, medicine, current_doc, id_p, date_p})
        let S = outcome.then(response => response.data).then(response => response.content)
        let M = outcome.then(response => response.data).then(response => response.msg)
        S.then((result) => {
            if(result === false){
              M.then((message)=>{
                displayStatus({
                  type: 'error',
                  msg: message
                })
              })
              reset_p()
              return
            }
            else{
              M.then((message)=>{
                displayStatus({
                  type: 'success',
                  msg: message
                })            
              })
              setSymtom("")
              setMedicine("")
              return
            }
          });
    }
    const record_find = ()=> {
        
        const outcome = instance.post('/findRecords', {id_p, clinic})
        let C = outcome.then(response => response.data).then(response => response.content)
        let M = outcome.then(response => response.data).then(response => response.msg)
        let L = outcome.then(response => response.data).then(response => response.Length)
        let R = outcome.then(response => response.data).then(response => response.record)
        setADD(false)


        C.then((result) => {
            if(result === false){
              M.then((message)=>{
                displayStatus({
                  type: 'error',
                  msg: message
                })
              })
              return
            }
            else{
              L.then((Length)=>{
                  setRecord_Num(Length)
              })
              R.then((notes)=>{
                  setRecords(notes)
              })
              console.log(records)
              return
            }
          });
    }

    const record_delete = (record_ID) => {
        const outcome = instance.post('/deleteRecords', {id_p, record_ID, clinic})
        let S = outcome.then(response => response.data).then(response => response.content)
        let M = outcome.then(response => response.data).then(response => response.msg)
        
        S.then((result) => {
          if(result === false){
            M.then((message)=>{
              displayStatus({
                type: 'error',
                msg: message
              })
            })
            return
          }
          else{
            M.then((message)=>{
              displayStatus({
                type: 'success',
                msg: message
              })            
            }) 
            record_find()
            return
          }
        });
    }

    let recordlist =  records.map((e) => (
        <li className="todo-app__item">
            <div className="todo-app__item-detail">
              <h4>Symptom</h4>
              <span>{e.Symptom}</span>
            </div>
            <div className="todo-app__item-detail">
              <h4>Medicine</h4>
              <span>{e.Medicine}</span>
            </div>
            <div className="todo-app__item-detail">
              <h6>Doctor</h6>
              <span>{e.Doctor}</span>
            </div>
            <div className="todo-app__item-detail">
              <h6>Date</h6>
              <span>{e.Date}</span>
            </div>
            <img src={DeleteImg} className="x" onClick={() => record_delete(e.ID)}/>
            
        </li>
        )
    )

    const record = (
        <Record 
            checkPatient={patient_find}
            name={name_p}
            setname={(e)=>setName_p(e.target.value)}
            id={id_p}
            setid={(e)=>setID_p(e.target.value)}
            add={add}
            setadd_t={()=>setADD(true)}
            setadd_f={record_find}
            reset={reset_p}
            nowpatient={nowpatient}
            search={search}
            addrecord={addrecord}
            sethome={()=>setInnermode(0)}
            setaddpatient={()=>setInnermode(1)}
            setRecord={()=>setInnermode(2)}
            setContact={()=>setInnermode(3)}
            hello={"Hello~ Dr."+lastname}
            logout={Logout}
            record_num={record_num}
            sym={symtom}
            setSym={(e)=>setSymtom(e.target.value)}
            medlist={medlist}
            setmed={(e)=>setMedicine(e+",'\n'")}
            today={date}
            list={recordlist}
            />
    )
//================ Record =============================///
//================ Patient ============================///
    const [name_a, setName_a] = useState("")
    const [id_a, setID_a] = useState("")
    const [birth, setBirth] = useState("");

    const reset_a = () =>{
        setName_a("")
        setID_a("")
        setBirth("")
    }

    const patient_submit = () => {
        if(id_a.length !== 10){
            displayStatus({
                type: 'error',
                msg: 'Patient\'s ID should contain 10 characters!!'
              })
              return false;
        }
        else{
            if(!id_a.substring(0,1).match(/^[A-Z]+$/)){
                displayStatus({
                    type: 'error',
                    msg: 'First character should be A-Z!!'
                  })
                  return false;
            }
            if(!id_a.substring(1,10).match(/^[0-9]+$/)){
                displayStatus({
                    type: 'error',
                    msg: 'Your Clinic ID should contain only numbers of 0-9!!'
                  })
                  return false;
            }
        }
        const outcome = instance.post('/addPatient', {name_a, id_a, birth, clinic})
        let S = outcome.then(response => response.data).then(response => response.content)
        let M = outcome.then(response => response.data).then(response => response.msg)
        S.then((result) => {
          if(result === false){
            M.then((message)=>{
              displayStatus({
                type: 'error',
                msg: message
              })
            })
            reset_a()
            return
          }
          else{
            M.then((message)=>{
              displayStatus({
                type: 'success',
                msg: message
              })            
            })
            reset_a()
            return
          }
        });
    }

    const patient =(
        <Patient
            sethome={()=>setInnermode(0)}
            setaddpatient={()=>setInnermode(1)}
            setRecord={()=>setInnermode(2)}
            setContact={()=>setInnermode(3)}
            hello={"Hello~ Dr."+lastname}
            logout={Logout}
            name={name_a}
            setname={(e)=>setName_a(e.target.value)}
            id={id_a}
            setID={(e)=>setID_a(e.target.value)}
            birth={birth}
            setBirth={(e)=>setBirth(e)}
            checkSubmit={patient_submit}
        />
    )
//================ Patient ============================///
//================ Inner ==============================///
    const inner = (
        <Inner
            hello={"Hello~ Dr."+lastname}
            logout={Logout}
            sethome={()=>setInnermode(0)}
            setaddpatient={()=>setInnermode(1)}
            setRecord={()=>setInnermode(2)}
            setContact={()=>setInnermode(3)}
        />
    )

    const inner_m = (
        <Inner_m
            hello={"Hello~ Dr."+lastname}
            logout={Logout}
            sethome_m={()=>setInnermode(4)}
            setdoc_m={()=>setInnermode(5)}
            setmed_m={()=>setInnermode(6)}
            setsetting_m={()=>setInnermode(7)}
        />
    )
//================ Inner ==============================///
//================ Conatct ============================///
    const [password_m, setPassword_m] = useState("")
    const [password_s, setPassword_s] = useState("")

    const reset_c = () => {
        setPassword_s("")
        setPassword_m("")
    }

    const changepass = ()=>{
        if(!password_m || !password_s){
            displayStatus({
              type: 'error',
              msg: 'Please enter Password!!'
            })
            return false;
          }
          if(password_m.length < 8){
            displayStatus({
              type: 'error',
              msg: 'Your New Password is less than 8 characters!!'
            })
            return false;
          }
        const outcome = instance.post('/modifyDoctor', {username, clinic, password_s, password_m})
        let S = outcome.then(response => response.data).then(response => response.content)
        let M = outcome.then(response => response.data).then(response => response.msg)
        S.then((result) => {
          if(result === false){
            M.then((message)=>{
              displayStatus({
                type: 'error',
                msg: message
              })
            })
            setPassword_s("")
            setPassword_m("")
            return
          }
          else{
            M.then((message)=>{
              displayStatus({
                type: 'success',
                msg: message
              })            
            })
            setPassword_s("")
            setPassword_m("")
            return
          }
        });
    }
    const contact = (
        <Contact
            hello={"Hello~ Dr."+lastname}
            logout={Logout}
            sethome={()=>setInnermode(0)}
            setaddpatient={()=>setInnermode(1)}
            setRecord={()=>setInnermode(2)}
            setContact={()=>setInnermode(3)}
            password_s={password_s}
            setpass_s={(e)=>setPassword_s(e.target.value)}
            password_m={password_m}
            setpass_m={(e)=>setPassword_m(e.target.value)}
            changepass={changepass}
        />
    )
//================ Conatct ============================///
//================ Setting ============================///
    const [password_m_m, setPassword_m_m] = useState("")
    const [password_s_m, setPassword_s_m] = useState("")
    const [clinic_s, setClinic_s] = useState("")
    const [clinic_m, setClinic_m] = useState("")
    const reset_s_m = () =>{
        setPassword_s_m("")
        setPassword_m_m("")
        setClinic_m("")
        setClinic_s("")
    }
    const changepass_m = ()=>{
        if(!password_m_m || !password_s_m){
            displayStatus({
              type: 'error',
              msg: 'Please enter Password!!'
            })
            return false;
          }
          if(password_m_m.length < 8){
            displayStatus({
              type: 'error',
              msg: 'Your New Password is less than 8 characters!!'
            })
            return false;
          }
        const outcome = instance.post('/modifyManager_p', {username, clinic, password_s_m, password_m_m})
        let S = outcome.then(response => response.data).then(response => response.content)
        let M = outcome.then(response => response.data).then(response => response.msg)
        S.then((result) => {
          if(result === false){
            M.then((message)=>{
              displayStatus({
                type: 'error',
                msg: message
              })
            })
            reset_s_m()
            return
          }
          else{
            M.then((message)=>{
              displayStatus({
                type: 'success',
                msg: message
              })            
            })
            reset_s_m()
            return
          }
        });
    }
    const changeclin_m = ()=>{
        if(!clinic_s || !clinic_m){
            displayStatus({
              type: 'error',
              msg: 'Please enter Clinic ID!!'
            })
            return false;
        }
        if(clinic_m.length !== 10){
            displayStatus({
                type: 'error',
                msg: 'Your New Clinic ID should contain 10 numbers!!'
              })
              return false;
        }
        else{
            if(!clinic_m.match(/^[0-9]+$/)){
                displayStatus({
                    type: 'error',
                    msg: 'Your Clinic ID should contain only numbers of 0-9!!'
                  })
                  return false;
            }
        }
        const outcome = instance.post('/modifyManager_c', {username, clinic, clinic_m, clinic_s})
        let S = outcome.then(response => response.data).then(response => response.content)
        let M = outcome.then(response => response.data).then(response => response.msg)
        S.then((result) => {
          if(result === false){
            M.then((message)=>{
              displayStatus({
                type: 'error',
                msg: message
              })
            })
            reset_s_m()
            return
          }
          else{
            M.then((message)=>{
              displayStatus({
                type: 'success',
                msg: message
              })            
            })
            reset_s_m()
            return
          }
        });
    }
    const setting = (
        <Setting
            hello={"Hello~ Dr."+lastname}
            logout={Logout}
            sethome_m={()=>setInnermode(4)}
            setdoc_m={()=>setInnermode(5)}
            setmed_m={()=>setInnermode(6)}
            setsetting_m={()=>setInnermode(7)}
            password_s_m={password_s_m}
            setpass_s_m={(e)=>setPassword_s_m(e.target.value)}
            password_m_m={password_m_m} 
            setpass_m_m={(e)=>setPassword_m_m(e.target.value)}
            changepass_m={changepass_m}
            clinic_s={clinic_s} 
            clinic_m={clinic_m}
            setclinic_s={(e)=>setClinic_s(e.target.value)}
            setclinic_m={(e)=>setClinic_m(e.target.value)}
            changeclin={changeclin_m}
        />
    )
//================ Setting ============================///
//================ Doctor =============================///
    const [doctor_d, setDoctor_d] = useState("")
   
    
    let doclist =  doctors.map((e) => (
        <Option value={"Name: " + e.doctorFirst + ", " + e.doctorLast + ", Username: " + e.doctorAccount}>
            {e.doctorFirst + ", " + e.doctorLast}
        </Option>
        )
    )
   
    const reset_d = () => {
        setDoctor_d("")
    }
    const doctor_find = (temp)=> {
        let clinic = temp;
        const outcome = instance.post('/findDoctors', {clinic})
        let C = outcome.then(response => response.data).then(response => response.content)
        let M = outcome.then(response => response.data).then(response => response.msg)
        let L = outcome.then(response => response.data).then(response => response.Length)
        let R = outcome.then(response => response.data).then(response => response.record)

        C.then((result) => {
            if(result === false){
              
              return
            }
            else{
              R.then((notes)=>{
                  setDoctors(notes)
              })
              return
            }
          });
    }

    const doctor_delete = () => {
        const outcome = instance.post('/deleteDoctors', {doctor_d, clinic})
        let S = outcome.then(response => response.data).then(response => response.content)
        let M = outcome.then(response => response.data).then(response => response.msg)
        S.then((result) => {
          if(result === false){
            M.then((message)=>{
              displayStatus({
                type: 'error',
                msg: message
              })
            })
            return
          }
          else{
            M.then((message)=>{
              displayStatus({
                type: 'success',
                msg: message
              })            
            }) 
            doctor_find(clinic)
            setDoctor_d("")
            return
          }
        });
    }
    const doc = (
        <Doc
            hello={"Hello~ Dr."+lastname}
            logout={Logout}
            sethome_m={()=>setInnermode(4)}
            setdoc_m={()=>setInnermode(5)}
            setmed_m={()=>setInnermode(6)}
            setsetting_m={()=>setInnermode(7)}
            doclist={doclist}
            setDoctor_d={(e)=>setDoctor_d(e)}
            deletedoc={doctor_delete}
            doc_usr={doctor_d}
        />
    )
//================ Doctor =============================///
//================ Medicine ===========================///
    
    
    const [drug_find, setDrug_Find] = useState("")
    const [drug_delete, setDrug_Delete] = useState("")
    const [now_drug_name, setNow_Drug_Name] = useState("")
    const [now_drug_eff, setNow_Drug_Eff] = useState("")
    const [drug_name_add, setDrug_Name_Add] = useState("")
    const [drug_eff_add, setDrug_Eff_Add] = useState("")
        
    
    const medicine_find = (temp)=> {
        let clinic = temp
        const outcome = instance.post('/findMedicine', {clinic})
        let C = outcome.then(response => response.data).then(response => response.content)
        let M = outcome.then(response => response.data).then(response => response.msg)
        let R = outcome.then(response => response.data).then(response => response.record)
        C.then((result) => {
            if(result === false){
              
              setDrugs([])
              return
            }
            else{
              R.then((notes)=>{
                setDrugs(notes)
                console.log(drugs)
              })
              return
            }
          });
       
    }
    const setFind = () =>{
        setNow_Drug_Name(drug_find)
        const outcome = instance.post('/findMedicine_s', {drug_find, clinic})
        let C = outcome.then(response => response.data).then(response => response.content)
        let M = outcome.then(response => response.data).then(response => response.msg)
        let R = outcome.then(response => response.data).then(response => response.record)
        C.then((result) => {
            if(result === false){
              M.then((message)=>{
                displayStatus({
                  type: 'error',
                  msg: message
                })
              })
              return
            }
            else{
              R.then((notes)=>{
                  setNow_Drug_Eff(notes)
                  console.log(medlist)
              })
              return
            }
          });

    }
    const medicine_submit = () => {
        const outcome = instance.post('/addMedicine', {drug_name_add, drug_eff_add, clinic})
        let S = outcome.then(response => response.data).then(response => response.content)
        let M = outcome.then(response => response.data).then(response => response.msg)
        S.then((result) => {
          if(result === false){
            M.then((message)=>{
              displayStatus({
                type: 'error',
                msg: message
              })
            })
            return
          }
          else{
            M.then((message)=>{
              displayStatus({
                type: 'success',
                msg: message
              })            
            }) 
            medicine_find(clinic)
            setDrug_Eff_Add("")
            setDrug_Name_Add("")
            return
          }
        });
    }
    const medicine_delete = () => {
        const outcome = instance.post('/deleteMedicine', {drug_delete, clinic})
        let S = outcome.then(response => response.data).then(response => response.content)
        let M = outcome.then(response => response.data).then(response => response.msg)
        S.then((result) => {
          if(result === false){
            M.then((message)=>{
              displayStatus({
                type: 'error',
                msg: message
              })
            })
            return
          }
          else{
            M.then((message)=>{
              displayStatus({
                type: 'success',
                msg: message
              })            
            }) 
            medicine_find(clinic)
            setDrug_Delete("")
            return
          }
        });
    }

    const drug = (
        <Drug
            hello={"Hello~ Dr."+lastname}
            logout={Logout}
            sethome_m={()=>setInnermode(4)}
            setdoc_m={()=>setInnermode(5)}
            setmed_m={()=>setInnermode(6)}
            setsetting_m={()=>setInnermode(7)}
            medlist={medlist} 
            setmed_d={(e)=>setDrug_Delete(e)}
            delete_med={medicine_delete}
            
            eff_med={drug_eff_add}
            name_med={drug_name_add}
            setname_med={(e)=>setDrug_Name_Add(e.target.value)}
            seteff_med={(e)=>setDrug_Eff_Add(e.target.value)}
            add_med={medicine_submit} 
            setfind_d={(e)=>setDrug_Find(e)} 
            find_med={setFind} 
            detail_name_d={now_drug_name}
            detail_eff_d={now_drug_eff}
        />
    )
//================ Medicine ===========================///
    const In_p = (
        <div>{innermode===1?patient:inner}</div>
    )
    const In_r = (
        <div>{innermode===2?record:In_p}</div>
    )
    const In_s = (
        <div>{innermode===3?contact:In_r}</div>
    )

    const In_p_m = (
        <div>{innermode===5?doc:inner_m}</div>
    )
    const In_r_m = (
        <div>{innermode===6?drug:In_p_m}</div>
    )
    const In_s_m = (
        <div>{innermode===7?setting:In_r_m}</div>
    )

    const In = (
        <div>{innermode<4?In_s:In_s_m}</div>
    )
    

    const outer =(
        <div>{signup?register:login}</div>
    )
    
    

  
    //return <div className="APP">{signin?inner:outer}</div>
    //return <div className="APP">{signup?register:login}</div>
    return <div>{signin?In:outer}</div>
  }
  
export default App