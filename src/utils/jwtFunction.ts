import jwt, { JwtPayload, Secret, SignOptions } from 'jsonwebtoken';

//! create jwt
export const createJWT = (
  payload: {
    id: string;
    email: string;
  },
  secret: Secret,
  options: SignOptions
) => {
  const result = jwt.sign(payload, secret, options);
  return result;
};

//! verify jwt
export const verifyJWT = (token: string, secret: Secret) => {
  const result = jwt.verify(token, secret) as JwtPayload & {
    id: string;
    email: string;
  };
  return result;
};
