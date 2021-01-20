import mongoose from 'mongoose'

const Schema = mongoose.Schema

const MedicineSchema = Schema({
  Name: {type: String, required: true},
  Treatment: { type: String, required: true},
  clinicID: {type: String, required: true}
}, {
  collection: 'Medicine',
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

const exportSchema = mongoose.model('Medicine', MedicineSchema)

export default exportSchema
