import mongoose from 'mongoose'

const Schema = mongoose.Schema

const DoctorSchema = Schema({
  doctorFirst: { type: String, required: true },
  doctorLast: { type: String, required: true },
  doctorAccount: { type: String, required: true, unique: true},
  doctorPassword: {type: String, required: true},
  clinicID: {type: String, required: true}
}, {
  collection: 'Doctor',
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

const exportSchema = mongoose.model('Doctor', DoctorSchema)

export default exportSchema
