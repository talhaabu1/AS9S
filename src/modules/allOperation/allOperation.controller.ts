import { catchAsync, sendResponse } from '@/utils';
import { AllOperationService } from './allOperation.service';
import httpStatus from 'http-status';

//? user registration controller⤵
const userRegistration = catchAsync(async (req, res) => {
  const result = await AllOperationService.userRegistrationIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: ' 🖋️ User registered successfully ✅',
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

export const AllOperationController = {
  userRegistration,
  userLogin,
};
