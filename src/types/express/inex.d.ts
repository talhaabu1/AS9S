import { TUser } from '../global.type';

declare global {
  namespace Express {
    interface Request {
      user?: TUser;
    }
  }
}
