import mongoose from 'mongoose';

const StampDutySchema = new mongoose.Schema({
  state: { type: String, required: true },
  dutyType: { type: String, required: true },
  rate: { type: Number, required: true },
});

export default mongoose.model('StampDuty', StampDutySchema);

