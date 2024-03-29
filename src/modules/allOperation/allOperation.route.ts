import { Router } from 'express';
import { AllOperationController } from './allOperation.controller';

const router = Router();

//? user registration route
router.post('/register', AllOperationController.userRegistration);

//? user login route
router.post('/login', AllOperationController.userLogin);

export default router;
