import { ClaimStatus } from '@prisma/client';
import { z } from 'zod';

const userRegistration = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  profile: z.object({ bio: z.string(), age: z.number() }),
});

const userLogin = z.object({
  email: z.string().email(),
  password: z.string(),
});

const category = z.object({
  name: z.string(),
});

const createFoundItem = z.object({
  categoryId: z.string(),
  foundItemName: z.string(),
  description: z.string(),
  location: z.string(),
});

const createClaim = z.object({
  foundItemId: z.string(),
  distinguishingFeatures: z.string(),
  lostDate: z
    .string()
    .datetime({
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
};
