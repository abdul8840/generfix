import express from 'express';
import { createAppointment, deleteAppointment, getAllAppointments, getAppointment } from '../controllers/appointment.controller.js';
import {verifyToken } from '../utils/verifyUser.js'

const router = express.Router();

router.post('/create-appointment',verifyToken , createAppointment);
router.get('/get-appointment',verifyToken, getAppointment);
router.get('/getallappointments', verifyToken, getAllAppointments);
router.delete('/delete/:id', verifyToken, deleteAppointment);

export default router;
