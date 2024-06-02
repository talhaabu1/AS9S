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
  '/category',
  auth('ADMIN'),
  validateRequest(AllOperationValidation.category),
  AllOperationController.createCategory
);

//? get all categories
router.get(
  '/categories',
  auth('ADMIN', 'USER'),
  AllOperationController.getAllCategories
);

//? create found item route
router.post(
  '/found-item',
  auth('USER'),
  validateRequest(AllOperationValidation.createFoundItem),
  AllOperationController.createFoundItem
);

//? get all found items route
router.get('/found-items', AllOperationController.getAllFoundItems);

//? create lost item route
router.post(
  '/lost-item',
  auth('USER'),
  validateRequest(AllOperationValidation.createLostItem),
  AllOperationController.createLostItem
);

//? create claim route
router.post(
  '/claims',
  auth('ADMIN'),
  validateRequest(AllOperationValidation.createClaim),
  AllOperationController.createClaim
);

//? get claims route
router.get('/claims', auth('ADMIN'), AllOperationController.getAllClaims);

//? update claim route
router.put(
  '/claims/:claimId',
  auth('ADMIN'),
  validateRequest(AllOperationValidation.updateClaim),
  AllOperationController.updateClaim
);

// //? get my profile  route
// router.get('/my-profile', auth, AllOperationController.getMyProfile);

// //? update my profile  route
// router.put(
//   '/my-profile',
//   auth,
//   validateRequest(AllOperationValidation.updateMyProfile),
//   AllOperationController.updateMyProfile
// );

export default router;
