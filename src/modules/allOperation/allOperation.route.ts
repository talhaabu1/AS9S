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

//? get all found items route
router.get('/found-items', AllOperationController.getAllFoundItems);

//? create claim route
router.post('/claims', auth, AllOperationController.createClaim);

//? get claims route
router.get('/claims', auth, AllOperationController.getAllClaims);

//? update claim route
router.put('/claims/:claimId', auth, AllOperationController.updateClaim);

//? get my profile  route
router.get('/my-profile', auth, AllOperationController.getMyProfile);

//? update my profile  route
router.put('/my-profile', auth, AllOperationController.updateMyProfile);

export default router;
