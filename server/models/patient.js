import mongoose from 'mongoose'

const Schema = mongoose.Schema

const PatientSchema = Schema({
  patientName: { type: String, required: true},
  patientID: { type: String, required: true},
  patientBirth: {type: String, required: true},
  healthRecord: [{type: Number, required: true}],
  clinicID: {type: String, required: true}
}, {
  collection: 'Patient',
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

const exportSchema = mongoose.model('Patient', PatientSchema)

export default exportSchema
