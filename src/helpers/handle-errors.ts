import { ErrorResponse } from '@/interface/errors';
import { env } from '@config';
import { AppError } from '@utils';
import { ZodError } from 'zod';

function getStack(stack: string | undefined) {
  return env.isDevelopment ? stack : undefined;
}

export function appError(error: AppError): ErrorResponse {
  return {
    status: error.status,
    message: error.message,
    error: {
      sources: [],
      stack: getStack(error.stack),
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

export function zodError(error: ZodError): ErrorResponse {
  const sources = error.issues.map((issue) => {
    return {
      path: issue.path[issue.path.length - 1],
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
