import mongoose from 'mongoose'
import Doctor from './doctor'

const Schema = mongoose.Schema

const ManagerSchema = Schema({
  managerFirst: { type: String, required: true },
  managerLast: { type: String, required: true },
  managerAccount: { type: String, required: true, unique: true},
  managerPassword: {type: String, required: true},
  clinicID: {type: String, required: true},
}, {
  collection: 'Manager',
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

const exportSchema = mongoose.model('Manager', ManagerSchema)

export default exportSchema
