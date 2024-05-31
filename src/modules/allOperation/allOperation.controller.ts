import { catchAsync, pick, sendResponse } from '@/utils';
import { AllOperationService } from './allOperation.service';
import httpStatus from 'http-status';
import { TUser } from '@/types';
import { optionFilterName, queryFilterName } from './allOperation.constant';

//? user registration controller⤵
const userRegistration = catchAsync(async (req, res) => {
  const result = await AllOperationService.userRegistrationIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: '🖋️ User registered successfully ✅',
    data: result,
  });
});
//? user registration controller⤴

//? user login controller⤵
const userLogin = catchAsync(async (req, res) => {
  const result = await AllOperationService.userLoginFormDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: '🖋️ User logged in successfully ✅',
    data: result,
  });
});
//? user login controller⤴

//? create category controller⤵
const createCategory = catchAsync(async (req, res) => {
  const result = await AllOperationService.createCategoryIntoDB(
    req.body,
    req.user as TUser
  );
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: '🖋️ Found item category created successfully ✅',
    data: result,
  });
});
//? create category controller⤴

//? get all categories controller⤵
const getAllCategories = catchAsync(async (req, res) => {
  const result = await AllOperationService.getAllCategoriesFormDB();
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: '🖋️ Get All Categories successfully ✅',
    data: result,
  });
});
//? get all categories controller⤴

//? create category controller⤵
const createFoundItem = catchAsync(async (req, res) => {
  const result = await AllOperationService.createFoundItemIntoDB(
    req.body,
    req.user as TUser
  );
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: '🖋️ Found item reported successfully ✅',
    data: result,
  });
});
//? create category controller⤴

//? get all found items controller⤵
const getAllFoundItems = catchAsync(async (req, res) => {
  //? check query parameters⤵
  const query = pick(req.query, queryFilterName);
  const options = pick(req.query, optionFilterName);
  //? check query parameters⤴
  const { meta, data } = await AllOperationService.getAllFoundItemsFormDB(
    query,
    options
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: '🖋️ Found items retrieved successfully ✅',
    meta,
    data,
  });
});
//? get all found items controller⤴

//? create lost item controller⤵
const createLostItem = catchAsync(async (req, res) => {
  const result = await AllOperationService.createLostItemIntoDB();
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: '🖋️ Lost item created successfully ✅',
    data: result,
  });
});
//? create lost item  controller⤴
//? create claim controller⤵
const createClaim = catchAsync(async (req, res) => {
  const result = await AllOperationService.createClaimIntoDB(
    req.body,
    req.user as TUser
  );
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: '🖋️ Claim created successfully ✅',
    data: result,
  });
});
//? create claim controller⤴

//? get claims controller⤵
const getAllClaims = catchAsync(async (req, res) => {
  const result = await AllOperationService.getAllClaimsFormDB(
    req.user as TUser
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: '🖋️ Claims retrieved successfully ✅',
    data: result,
  });
});
//? get claims controller⤴

//? update claim controller⤵
const updateClaim = catchAsync(async (req, res) => {
  //? claim id form params
  const { claimId } = req.params;
  const result = await AllOperationService.updateClaimIntoDB(
    claimId,
    req.body,
    req.user as TUser
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: '🖋️ Claim updated successfully ✅',
    data: result,
  });
});
//? update claim controller⤴

//? get my profile controller⤵
// const getMyProfile = catchAsync(async (req, res) => {
//   const result = await AllOperationService.getMyProfileFormDB(
//     req.user as TUser
//   );
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: '🖋️ Profile retrieved successfully ✅',
//     data: result,
//   });
// });
// //? get my profile controller⤴

// //? update my profile controller⤵
// const updateMyProfile = catchAsync(async (req, res) => {
//   const result = await AllOperationService.updateMyProfileIntoDB(
//     req.body,
//     req.user as TUser
//   );
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: '🖋️ User profile updated successfully ✅',
//     data: result,
//   });
// });
//? update my profile controller⤴

export const AllOperationController = {
  userRegistration,
  userLogin,
  createCategory,
  createFoundItem,
  getAllFoundItems,
  createClaim,
  getAllClaims,
  updateClaim,
  createLostItem,
  getAllCategories,
  // getMyProfile,
  // updateMyProfile,
};
