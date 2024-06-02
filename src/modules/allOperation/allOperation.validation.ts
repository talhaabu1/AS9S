import { ClaimStatus } from '@prisma/client';
import { z } from 'zod';

const userRegistration = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
});

const userLogin = z.object({
  userNameOrEmail: z.string(),
  password: z.string(),
});

const category = z.object({
  name: z.string(),
});

const createFoundItem = z.object({
  userId: z.string(),
  categoryId: z.string(),
  location: z.string(),
  foundDate: z.string().datetime({
    message:
      'This is not a valid datetime valid datetime exmpale [2020-01-01T00:00:00Z]  ',
  }),
  number: z.string(),
  image: z.string(),
  description: z.string(),
});

const createLostItem = z.object({
  userId: z.string(),
  categoryId: z.string(),
  location: z.string(),
  lostDate: z.string().datetime({
    message:
      'This is not a valid datetime valid datetime exmpale [2020-01-01T00:00:00Z]  ',
  }),
  number: z.string(),
  image: z.string(),
  description: z.string(),
  asFound: z.boolean().optional().default(false),
});

const createClaim = z.object({
  foundItemId: z.string(),
  distinguishingFeatures: z.string(),
  lostDate: z.string().datetime({
    message:
      'This is not a valid datetime valid datetime exmpale [2020-01-01T00:00:00Z]  ',
  }),
});

const updateClaim = z.object({
  status: z.enum([ClaimStatus.APPROVED, ClaimStatus.REJECTED]),
});

const updateMyProfile = z.object({
  bio: z.string().optional(),
  age: z.number().optional(),
});

export const AllOperationValidation = {
  userRegistration,
  userLogin,
  category,
  createFoundItem,
  createClaim,
  updateClaim,
  updateMyProfile,
  createLostItem,
};
