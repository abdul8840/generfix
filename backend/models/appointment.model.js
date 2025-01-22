import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    serviceType: {
      type: String,
      enum: ["Repair Service", "Online Service", "IT Solution Services"],
      required: true,
    },
    selectedServices: {
      type: [String],
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    timeSlot: {
      startTime: String,
      endTime: String,
    },
  },
  { timestamps: true }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);
export default Appointment;
