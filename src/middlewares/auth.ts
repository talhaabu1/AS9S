import { env } from '@/config';
import { AppError, verifyJWT } from '@/utils';
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

const auth = (req: Request, res: Response, next: NextFunction) => {
  //? authorization token variable
  const token = req.headers.authorization;

  //?  token not found error
  if (!token)
    throw new AppError(httpStatus.UNAUTHORIZED, '💀 Invalid token 🚫');

  //? token verify function
  const verifyToken = verifyJWT(token, env.JWT_SECRET_KEY);

  //? add req object user
  req.user = verifyToken;

  next();
};

export default auth;
