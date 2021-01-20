import Patient from "../models/patient"

exports.checkPatient = async (req, res) => {
  let Name = req.body.name_p
  let ID = req.body.id_p
  let clin = req.body.clinic

  
  let patient_c = await Patient.find({patientID: ID, clinicID: clin})

  if(patient_c.length === 0){
    return res.send({msg: 'Sorry, the ID is incorrect.', content: false})
  }
  
  return res.send({msg: 'Success!', content: true})
  
}
 

exports.addPatient = async (req, res) => {
  let Name = req.body.name_a
  let ID = req.body.id_a
  let clin = req.body.clinic
  let birth = req.body.birth

  console.log(birth)
  console.log(clin)
  
  let patient_c = await Patient.find({patientID: ID})


  if(patient_c.length !== 0){
    for(let i = 0; i < patient_c.length; ++i){
      if(patient_c[i].clinicID === clin){
        return res.send({msg: 'This patient have been checked in before.', content: false})
      }
    }
    Patient.insertMany(
      {
        patientName: Name,
        patientID: ID,
        patientBirth: birth,
        healthRecord: [],
        clinicID: clin, 
      }
    )    
    return res.send({msg: 'The patient have been added to your clinic!', content: true})
  }
  else{    
    Patient.insertMany(
      {
        patientName: Name,
        patientID: ID,
        patientBirth: birth,
        healthRecord: [],
        clinicID: clin, 
      }
    )    
    return res.send({msg: 'The patient have been added to your clinic!', content: true})
  }
}

