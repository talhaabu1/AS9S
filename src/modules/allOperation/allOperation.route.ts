import { Router } from 'express';
import { AllOperationController } from './allOperation.controller';
import auth from '@/middlewares/auth';

const router = Router();

//? user registration route
router.post('/register', AllOperationController.userRegistration);

//? user login route
router.post('/login', AllOperationController.userLogin);

//? create category route
router.post(
  '/found-item-categories',
  auth,
  AllOperationController.createCategory
);

//? create found item route
router.post('/found-items', auth, AllOperationController.createFoundItem);

export default router;
