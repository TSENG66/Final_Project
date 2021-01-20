import Manager from '../models/manager'
import Patient from '../models/patient'
import Record from '../models/record'
import Doctor from '../models/doctor'
import Medicine from '../models/medicine'

exports.checkManager = async (req, res) => {
  let usr = req.body.username
  let pass = req.body.password
  let usr_c = await Manager.find({managerAccount: usr})
  if(usr_c.length === 0){
    return res.send({msg: 'Sorry, your username is not exist or your password is incorrect.', content: false})
  }
  if(pass !== usr_c[0].managerPassword){
    return res.send({msg: 'Sorry, your username is not exist or your password is incorrect.', content: false})
  }
  return res.send({msg: 'Log in successfully!', content: true, state: usr_c[0]})
}

exports.addManager = async (req, res) => {
  let usr = req.body.username_r
  let clin = req.body.clinic_r
  const all = await Manager.find()
  let usr_c = await Manager.find({managerAccount: usr})
  let clin_c = await Manager.find({clinicID: clin})

  if(usr_c.length !== 0){
    return res.send({msg: 'Sorry, your username have been used.', content: false})
  }
  else if(clin_c.length !== 0){
    return res.send({msg: 'Sorry, your clinic code have been used.', content: false})
  }
  else{
    
    Manager.insertMany(
      {
        managerFirst: req.body.firstname_r,
        managerLast: req.body.lastname_r,
        managerAccount: usr,
        managerPassword: req.body.password_r, 
        clinicID: clin,
        doctors: []
      }
    )
    
    
    
    return res.send({msg: 'You have created your account successfully!', content: true})
  }
}

exports.modifyManager_p = async (req, res) => {
  var usr = req.body.username
  var clin = req.body.clinic
  var change = req.body.password_m_m
  var recent = req.body.password_s_m

  let usr_c = await Manager.find({managerAccount: usr, clinicID: clin})

  if(usr_c.length === 0){
    return res.send({msg: 'Something has been wrong. Please log in again.', content: false})
  }
  else if(recent != usr_c[0].managerPassword){
    return res.send({msg: 'Your password is incorrect. Please try it again.', content: false})
  }
  else{
    let result = await Manager.updateMany({managerAccount: usr, clinicID: clin},
      {$set: 
        {managerPassword: change}
      }
    )
    return res.send({msg: 'Your password has been update.', content: true})
  }
}

exports.modifyManager_c = async (req, res) => {
  var usr = req.body.username
  var clin = req.body.clinic
  var change = req.body.clinic_m
  var recent = req.body.clinic_s

  let usr_c = await Manager.find({managerAccount: usr, clinicID: clin})
  let usr_cc = await Manager.find({managerAccount: usr, clinicID: change})

  if(usr_c.length === 0){
    return res.send({msg: 'Something has been wrong. Please log in again.', content: false})
  }
  if(usr_cc.length !== 0){
    return res.send({msg: 'The modified Clinic ID has been used already. Please log in again.', content: false})
  }
  else if(recent !== usr_c[0].clinicID){
    return res.send({msg: 'Your recent Clinic ID is incorrect. Please try it again.', content: false})
  }
  else{
    let result0 = await Manager.updateMany({managerAccount: usr, clinicID: clin},
      {$set: 
        {clinicID: change}
      }
    )
    let result1 = await Doctor.updateMany({clinicID: clin},
      {$set: 
        {clinicID: change}
      }
    )
    let result2 = await Record.updateMany({clinicID: clin},
      {$set: 
        {clinicID: change}
      }
    )
    let result3 = await Patient.updateMany({clinicID: clin},
      {$set: 
        {clinicID: change}
      }
    )
    let result4 = await Medicine.updateMany({clinicID: clin},
      {$set: 
        {clinicID: change}
      }
    )
    return res.send({msg: 'Your password has been update.', content: true})
  }
}



