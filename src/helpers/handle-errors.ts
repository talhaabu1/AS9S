import { env } from '@/config';
import { ErrorResponse } from '@/interface/errors';
import { AppError } from '@utils';
import httpStatus from 'http-status';
import { ZodError } from 'zod';

function getStack(stack: string | undefined) {
  return env.isDev ? stack : undefined;
}

export function appError(error: AppError): ErrorResponse {
  return {
    status: error.status,
    message: error.message,
    error: {
      sources: [],
      stack: getStack(error.message),
    },
  };
}

export function serverError(error: Error): ErrorResponse {
  return {
    status: 500,
    message: error.message,
    error: {
      sources: [],
      stack: getStack(error.stack),
    },
  };
}

export function JWTExpiredError(error: Error): ErrorResponse {
  return {
    status: httpStatus.UNAUTHORIZED,
    message: '💥 Token is expired 💢',
    error: {
      sources: [],
      stack: getStack(error.stack),
    },
  };
}

export function JWTWebError(error: Error): ErrorResponse {
  return {
    status: httpStatus.UNAUTHORIZED,
    message: '💥 Invalid Token ⛔',
    error: {
      sources: [],
      stack: getStack(error.stack),
    },
  };
}

export function zodError(error: ZodError): ErrorResponse {
  const sources = error.issues.map((issue) => {
    return {
      field: issue.path[issue.path.length - 1],
      message: issue.message,
    };
  });

  return {
    status: 403,
    message: 'Zod validation error',
    error: {
      sources,
      stack: getStack(error.stack),
    },
  };
}
