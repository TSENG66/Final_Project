import Records from "../models/record" 
import Patient from "../models/patient"
import moment from 'moment';

exports.addRecord = async (req, res) => {
  let sym = req.body.symtom
  let patient_id = req.body.id_p
  let clin = req.body.clinic
  let med = req.body.medicine
  let doc = req.body.current_doc
  let today = req.body.date_p
  let patient_c = await Patient.find({patientID: patient_id, clinicID:clin})
  let record_c = await Records.find({Patient: patient_id, clinicID:clin})

  if(patient_c.length === 0){
    return res.send({msg: 'Sorry, current patient is not found.', content: false})
  }


  let ID_r = patient_id + "_" + clin + "_" + moment().toString()
  Records.insertMany(
    {
      Patient: patient_id,
      Symptom: sym,
      Medicine: med,
      Doctor: doc,
      Date: today,
      clinicID: clin,
      ID: ID_r
    }
  )
  return res.send({msg: 'Successfully add admission note to this patient!', content: true})    
}

exports.findRecords = async (req, res) => {
  let patient_id = req.body.id_p
  let clin = req.body.clinic
  
  let R = await Records.find({Patient: patient_id, clinicID: clin})

  if(R.length === 0){
    return res.send({msg: 'No admission notes found', content: false, Length: 0, record:[]})
  }
  
  return res.send({msg: 'Success!', content: true, Length: R.length, record: R})
  
}

exports.deleteRecords = async (req, res) => {
  let record_id = req.body.record_ID
  let R = await Records.find({ID: record_id})
  if(R.length === 0){
    return res.send({msg: 'The admission note cannot be delete!', content: false})
  }
  const result = await Records.deleteMany({ID: record_id})
  return res.send({msg: 'Successfully delete the admission note!', content: true}) 
}
 