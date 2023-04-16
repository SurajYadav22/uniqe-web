import mongoose from "mongoose";
const leadsSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone_number: { type: Number, required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now() },
});

export const Leads = mongoose.model("Leads", leadsSchema);
