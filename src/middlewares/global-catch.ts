import * as handle from '@helpers/handle-errors';
import { AppError } from '@utils';
import { NextFunction, Request, Response } from 'express';
import { ErrorResponse } from 'interface/errors';
import { ZodError } from 'zod';

let errorResponse: ErrorResponse = {
  success: false,
  status: 500,
  message: '📢 Internal server error ☠️',
  error: {
    sources: [],
    stack: undefined,
  },
};

export function globalCatch(
  error: ZodError | AppError | Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof ZodError) {
    const zError = handle.zodError(error);

    errorResponse = { ...errorResponse, ...zError };
  } else if (error instanceof AppError) {
    const appError = handle.appError(error);

    errorResponse = { ...errorResponse, ...appError };
  } else if (error instanceof Error) {
    const serverError = handle.serverError(error);

    errorResponse = {
      ...errorResponse,
      ...serverError,
    };
  }

  const { status, ...response } = errorResponse;

  return res.status(status).json(response);
}
