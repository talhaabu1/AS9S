import { passwordHashAndCompare, prisma } from '@/utils';
import { TUserRegistration } from './allOperation.interface';

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
    await tx.profile.create({
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

export const AllOperationService = {
  userRegistrationIntoDB,
};
