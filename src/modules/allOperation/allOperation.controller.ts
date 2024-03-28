import { catchAsync, sendResponse } from '@/utils';
import { AllOperationService } from './allOperation.service';
import httpStatus from 'http-status';

const userRegistration = catchAsync(async (req, res) => {
  const result = await AllOperationService.userRegistrationIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'User registered successfully',
    data: result,
  });
});

export const AllOperationController = {
  userRegistration,
};
