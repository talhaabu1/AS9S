import { Response } from 'express';

type TSendResponse<T> = {
  statusCode: number;
  success: boolean;
  message: string;
  meta?: {
    page: number;
    limit: number;
    total: number;
  };
  data: T | null | undefined;
};

export const sendResponse = <T>(res: Response, resData: TSendResponse<T>) => {
  res.status(resData.statusCode).json({
    success: resData.success,
    statusCode: resData.statusCode,
    message: resData.message,
    meta: resData.meta || null || undefined,
    data: resData.data || null || undefined,
  });
};
