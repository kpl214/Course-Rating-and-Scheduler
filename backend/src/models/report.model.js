import mongoose from "mongoose";

const ReportSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

const Report = mongoose.model("Report", ReportSchema);

export default Report;