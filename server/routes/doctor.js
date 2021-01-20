import Doctor from '../models/doctor'
import Manager from '../models/manager'

exports.checkDoctor = async (req, res) =>{
  let usr = req.body.username
  let pass = req.body.password
  let usr_c = await Doctor.find({doctorAccount: usr})

  if(usr_c.length === 0){
    return res.send({msg: 'Sorry, your username is not exist or your password is incorrect.', content: false})
  }
  if(pass !== usr_c[0].doctorPassword){
    return res.send({msg: 'Sorry, your username is not exist or your password is incorrect.', content: false})
  }
  return res.send({msg: 'Log in successfully!', content: true, state: usr_c[0]})
}

exports.addDoctor = async (req, res) => {
  var usr = req.body.username_r
  var clin = req.body.clinic_r

  let usr_c = await Doctor.find({doctorAccount: usr})
  let clin_c = await Manager.find({clinicID: clin})

  console.log(clin_c[0])

  if(usr_c.length !== 0){
    return res.send({msg: 'Sorry, your username have been used.', content: false})
  }
  else if(clin_c.length === 0){
    return res.send({msg: 'Sorry, the clinic code is not exist.', content: false})
  }
  else{

    Doctor.insertMany(
      {
        doctorFirst: req.body.firstname_r,
        doctorLast: req.body.lastname_r,
        doctorAccount: usr,
        doctorPassword: req.body.password_r, 
        clinicID: clin
      }
    )
    return res.send({msg: 'You have created your account successfully!', content: true})
  }
}

exports.modifyDoctor = async (req, res) => {
  var usr = req.body.username
  var clin = req.body.clinic
  var change = req.body.password_m
  var recent = req.body.password_s

  let usr_c = await Doctor.find({doctorAccount: usr, clinicID: clin})

  if(usr_c.length === 0){
    return res.send({msg: 'Something has been wrong. Please log in again.', content: false})
  }
  else if(recent != usr_c[0].doctorPassword){
    return res.send({msg: 'Your password is incorrect. Please try it again.', content: false})
  }
  else{
    let result = await Doctor.update({doctorAccount: usr, clinicID: clin},
      {$set: 
        {doctorPassword: change}
      }
    )
    return res.send({msg: 'Your password has been update.', content: true})
  }
}
exports.findDoctors = async (req, res) => {
  let clin = req.body.clinic
  
  let D = await Doctor.find({clinicID: clin})

  if(D.length === 0){
    return res.send({msg: 'No doctors found', content: false, Length: 0, record:[]})
  }
  return res.send({msg: 'Success!', content: true, Length: D.length, record: D})
  
}

exports.deleteDoctors = async (req, res) => {
  let doc_usr = req.body.doctor_d
  let clin = req.body.clinic
  console.log(doc_usr)
  
  let start = doc_usr.indexOf(", Username: ")
  console.log(start)
  let doctor_usr = doc_usr.slice(start+12, 1000)
  console.log(doctor_usr)
  let D = await Doctor.find({doctorAccount: doctor_usr, clinicID: clin})
  if(D.length === 0){
    return res.send({msg: 'The doctor cannot be delete!', content: false})
  }
  const result = await Doctor.deleteMany({doctorAccount: doctor_usr})
  return res.send({msg: 'Successfully delete the doctor!', content: true}) 
}
 



