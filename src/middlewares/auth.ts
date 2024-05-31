import { env } from '@/config';
import { AppError, catchAsync, verifyJWT } from '@/utils';
import httpStatus from 'http-status';

type TRole = 'ADMIN' | 'USER';

const auth = (...requiredRole: TRole[]) => {
  return catchAsync(async (req, res, next) => {
    //? authorization token variable
    const token = req.headers.authorization;

    //?  token not found error
    if (!token)
      throw new AppError(httpStatus.UNAUTHORIZED, '💀 Invalid token 🚫');

    //? token verify function
    const verifyToken = verifyJWT(token, env.JWT_SECRET_KEY);

    //? add req object user
    req.user = verifyToken;

    if (!requiredRole.length || !requiredRole.includes(verifyToken.role))
      throw new AppError(httpStatus.UNAUTHORIZED, '💀 Role Not Match 🚫');

    next();
  });
};

export default auth;
