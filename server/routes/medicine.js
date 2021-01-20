import Medicine from "../models/medicine"

exports.addMedicine = async (req, res) => {
  let name_m = req.body.drug_name_add
  let treat = req.body.drug_eff_add
  let clin = req.body.clinic
  
  let med_c = await Medicine.find({Name: name_m, clinicID:clin})

  if(med_c.length !== 0){
    return res.send({msg: 'Sorry, the medicine has already been added.', content: false})
  }

  Medicine.insertMany(
    {
      Name: name_m,
      Treatment: treat,
      clinicID: clin,
    }
  )
  return res.send({msg: 'Successfully add medicine!', content: true})    
}

exports.findMedicine = async (req, res) => {
  let clin = req.body.clinic

  console.log(clin)
  
  let M = await Medicine.find({clinicID: clin})

  console.log(M)

  if(M.length === 0){
    return res.send({msg: 'No medicines found', content: false, record:[]})
  }
  
  return res.send({msg: 'Success!', content: true, record: M})
}


exports.findMedicine_s = async (req, res) => {
  let clin = req.body.clinic
  let name = req.body.drug_find
  
  let M = await Medicine.find({Name: name, clinicID: clin})

  if(M.length === 0){
    return res.send({msg: 'No medicines found', content: false})
  }
  
  return res.send({msg: 'Success!', content: true, record: M[0].Treatment})
}

exports.deleteMedicine = async (req, res) => {
  let name_m = req.body.drug_delete
  let clin = req.body.clinic

  let M = await Medicine.find({Name: name_m, clinicID:clin})

  if(M.length === 0){
    return res.send({msg: 'The medicine cannot be delete!', content: false})
  }
  const result = await Medicine.deleteMany({Name: name_m, clinicID:clin})
  return res.send({msg: 'Successfully delete the medicine!', content: true}) 
}
 