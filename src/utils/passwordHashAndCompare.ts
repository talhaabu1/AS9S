import argon2 from 'argon2';

export const passwordHashAndCompare = async (
  password: string,
  option: 'hash' | 'compare',
  hashedPassword?: string | null
) => {
  if (option === 'hash') {
    const hashPassword = await argon2.hash(password);
    return hashPassword;
  }
  if (option === 'compare') {
    const isMatch = await argon2.verify(hashedPassword as string, password);

    return isMatch;
  }
};
