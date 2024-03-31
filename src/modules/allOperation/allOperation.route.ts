import { Router } from 'express';
import { AllOperationController } from './allOperation.controller';
import auth from '@/middlewares/auth';
import { validateRequest } from '@/middlewares/validate-request';
import { AllOperationValidation } from './allOperation.validation';

const router = Router();

//? user registration route
router.post(
  '/register',
  validateRequest(AllOperationValidation.userRegistration),
  AllOperationController.userRegistration
);

//? user login route
router.post(
  '/login',
  validateRequest(AllOperationValidation.userLogin),
  AllOperationController.userLogin
);

//? create category route
router.post(
  '/found-item-categories',
  auth,
  validateRequest(AllOperationValidation.category),
  AllOperationController.createCategory
);

//? create found item route
router.post(
  '/found-items',
  auth,
  validateRequest(AllOperationValidation.createFoundItem),
  AllOperationController.createFoundItem
);

//? get all found items route
router.get('/found-items', AllOperationController.getAllFoundItems);

//? create claim route
router.post(
  '/claims',
  auth,
  validateRequest(AllOperationValidation.createClaim),
  AllOperationController.createClaim
);

//? get claims route
router.get('/claims', auth, AllOperationController.getAllClaims);

//? update claim route
router.put(
  '/claims/:claimId',
  auth,
  validateRequest(AllOperationValidation.updateClaim),
  AllOperationController.updateClaim
);

//? get my profile  route
router.get('/my-profile', auth, AllOperationController.getMyProfile);

//? update my profile  route
router.put(
  '/my-profile',
  auth,
  validateRequest(AllOperationValidation.updateMyProfile),
  AllOperationController.updateMyProfile
);

export default router;
