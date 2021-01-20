import doctorRoute from './doctor'
import managerRoute from './manager'
import patientRoute from './patient'
import recordRoute from './records'
import medicineRoute from './medicine'

const wrap = fn => (...args) => fn(...args).catch(args[2])

function main(app) {
  app.post('/api/addDoctor', wrap(doctorRoute.addDoctor))
  app.post('/api/checkDoctor', wrap(doctorRoute.checkDoctor))
  app.post('/api/modifyDoctor', wrap(doctorRoute.modifyDoctor))
  app.post('/api/findDoctors', wrap(doctorRoute.findDoctors))
  app.post('/api/deleteDoctors', wrap(doctorRoute.deleteDoctors))
  app.post('/api/addManager', wrap(managerRoute.addManager))
  app.post('/api/checkManager', wrap(managerRoute.checkManager))
  app.post('/api/modifyManager_p', wrap(managerRoute.modifyManager_p))
  app.post('/api/modifyManager_c', wrap(managerRoute.modifyManager_c))
  app.post('/api/checkPatient', wrap(patientRoute.checkPatient))
  app.post('/api/addPatient', wrap(patientRoute.addPatient))
  app.post('/api/addRecord', wrap(recordRoute.addRecord))
  app.post('/api/findRecords', wrap(recordRoute.findRecords))
  app.post('/api/deleteRecords', wrap(recordRoute.deleteRecords))
  app.post('/api/addMedicine', wrap(medicineRoute.addMedicine))
  app.post('/api/findMedicine', wrap(medicineRoute.findMedicine))
  app.post('/api/findMedicine_s', wrap(medicineRoute.findMedicine_s))
  app.post('/api/deleteMedicine', wrap(medicineRoute.deleteMedicine))
  
}

export default main
