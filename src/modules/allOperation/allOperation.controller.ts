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

export const AllOperationController = {
  userRegistration,
  userLogin,
  createCategory,
  createFoundItem,
  getAllFoundItems,
  createClaim,
};
