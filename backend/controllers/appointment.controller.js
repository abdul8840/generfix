import Appointment from "../models/appointment.model.js";
import mongoose from 'mongoose';
import moment from 'moment';

export const createAppointment = async (req, res, next) => {
  try {
    const { name, email, phone, serviceType, selectedServices, timeSlot, message, date } = req.body;

    const appointment = new Appointment({
      userId: req.user.id, // Use the user ID from the verified token
      name,
      email,
      phone,
      serviceType,
      selectedServices,
      timeSlot,
      message,
      date,
    });

    const savedAppointment = await appointment.save();
    res.status(201).json(savedAppointment);
  } catch (err) {
    res.status(500).json({ message: "Error creating appointment", error: err.message });
  }
};

export const getAppointment = async (req, res, next) => {
  try {
    const userId = new mongoose.Types.ObjectId(req.user.id);

    const appointments = await Appointment.find({ userId }).sort({ createdAt: -1 });

    if (appointments.length === 0) {
      return res.status(404).json({ message: 'No appointments found for this user' });
    }

    res.status(200).json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(400).json({ message: 'Error fetching appointments', error: error.message });
  }

}

export const getAllAppointments = async (req, res, next) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });

    if (appointments.length === 0) {
      return res.status(404).json({ message: 'No appointments found' });
    }

    res.status(200).json(appointments);
  } catch (error) {
    console.error('Error fetching all appointments:', error);
    res.status(400).json({ message: 'Error fetching appointments', error: error.message });
  }
};


export const deleteAppointment = async (req, res, next) => {
  try {
    const appointmentId = req.params.id;

    // Check if the appointment exists and delete it
    const appointment = await Appointment.findByIdAndDelete(appointmentId);

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    // Ensure the user is an admin before allowing the deletion
    if (!req.user.isAdmin) {
      return res.status(403).json({ message: 'Access denied' });
    }

    res.status(200).json({ message: 'Appointment deleted successfully' });

  } catch (error) {
    console.error('Error deleting appointment:', error);
    res.status(500).json({ message: 'Error deleting appointment', error: error.message });
  }
};


