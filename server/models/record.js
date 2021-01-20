import mongoose from 'mongoose'

const Schema = mongoose.Schema

const RecordSchema = Schema({
  Patient: {type: String, required: true},
  Symptom: { type: String, required: true},
  Medicine: [{type: String, required: true}],
  Doctor: {type: String, required: true},
  Date: {type: String, required: true},
  clinicID: {type: String, required: true},
  ID: {type: String, required:true, unique: true}
}, {
  collection: 'Record',
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

const exportSchema = mongoose.model('Record', RecordSchema)

export default exportSchema
