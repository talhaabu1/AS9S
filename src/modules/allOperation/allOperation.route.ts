import { Router } from 'express';
import { AllOperationController } from './allOperation.controller';

const router = Router();

router.post('/register', AllOperationController.userRegistration);

export default router;
