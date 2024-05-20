import express from 'express';
import passengerController from './controller.js';

const router = express.Router();

router.post('/register', passengerController.registerPassenger);

router.post('/login', passengerController.loginPassenger);

router.get('/profile', passengerController.getPassengerProfile);

router.put('/profile', passengerController.updatePassengerProfile);

export default router;
