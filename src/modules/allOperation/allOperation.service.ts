import { AppError, createJWT, passwordHashAndCompare, prisma } from '@/utils';
import { TUserRegistration } from './allOperation.interface';
import httpStatus from 'http-status';
import { env } from '@/config';
import { TUser } from '@/types';
import { FoundItem, Prisma } from '@prisma/client';

//? user registration service⤵
const userRegistrationIntoDB = async (payload: TUserRegistration) => {
  //? password hash function
  const hashedPassword = await passwordHashAndCompare(payload.password, 'hash');

  //? user data object
  const userData = {
    name: payload.name,
    email: payload.email,
    password: hashedPassword as string,
  };

  // //! transaction operation variable
  const result = await prisma.$transaction(async (tx) => {
    //? user create
    const crateUser = await tx.user.create({
      data: userData,
    });

    //? profile create reference to user
    await tx.userProfile.create({
      data: {
        bio: payload.profile.bio,
        age: payload.profile.age,
        userId: crateUser.id,
      },
    });

    //? get and return user
    const result = await tx.user.findUnique({
      where: {
        id: crateUser.id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        password: false,
        createdAt: true,
        updatedAt: true,
        profile: true,
      },
    });

    return result;
  });

  return result;
};
//? user registration service⤴

//? user login service⤵
const userLoginFormDB = async (
  payload: Pick<TUserRegistration, 'email' | 'password'>
) => {
  //? get user data with email
  const userData = await prisma.user.findUniqueOrThrow({
    where: {
      email: payload.email,
    },
  });

  //? check this user password is valid
  const isMatch = await passwordHashAndCompare(
    payload.password,
    'compare',
    userData.password
  );

  //? user password not match error
  if (!isMatch)
    throw new AppError(httpStatus.UNAUTHORIZED, '😓 Wrong password ⛔');

  //? jwt payload object
  const jwtPayload = {
    id: userData.id,
    email: userData.email,
  };

  // ? jwt token create
  const token = createJWT(jwtPayload, env.JWT_SECRET_KEY, {
    expiresIn: '3d',
  });

  return {
    id: userData.id,
    name: userData.name,
    email: userData.email,
    token,
  };
};
//? user login service⤴

//? create category service⤵
const createCategoryIntoDB = async (
  payload: Pick<TUserRegistration, 'name'>,
  user: TUser
) => {
  //? user exists or not
  await prisma.user.findUniqueOrThrow({
    where: {
      id: user.id,
    },
  });

  //? create category into DB
  const result = await prisma.foundItemCategory.create({
    data: {
      name: payload.name,
    },
  });

  return result;
};
//? create category service⤴

//? create found item service⤵
const createFoundItemIntoDB = async (
  payload: Pick<
    FoundItem,
    'categoryId' | 'foundItemName' | 'description' | 'location'
  >,
  user: TUser
) => {
  //? user exists or not
  await prisma.user.findUniqueOrThrow({
    where: {
      id: user.id,
    },
  });

  //? found item data object
  const foundItemData = {
    userId: user.id,
    categoryId: payload.categoryId,
    foundItemName: payload.foundItemName,
    description: payload.description,
    location: payload.location,
  };

  //? create found item into DB
  const result = await prisma.foundItem.create({
    data: foundItemData,
    select: {
      id: true,
      userId: true,
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          createdAt: true,
          updatedAt: true,
        },
      },
      categoryId: true,
      category: {
        select: {
          id: true,
          name: true,
          createdAt: true,
          updatedAt: true,
        },
      },
      foundItemName: true,
      description: true,
      location: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return result;
};
//? create found item service⤴

export const AllOperationService = {
  userRegistrationIntoDB,
  userLoginFormDB,
  createCategoryIntoDB,
  createFoundItemIntoDB,
};
