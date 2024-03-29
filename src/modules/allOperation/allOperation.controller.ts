import { catchAsync, sendResponse } from '@/utils';
import { AllOperationService } from './allOperation.service';
import httpStatus from 'http-status';
import { TUser } from '@/types';

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

export const AllOperationController = {
  userRegistration,
  userLogin,
  createCategory,
  createFoundItem,
};
