export type TUserRegistration = {
  name: string;
  email: string;
  password: string;
  profile: {
    bio: string;
    age: number;
  };
};

export type TQuery = {
  searchTerm?: string;
  foundItemName?: string;
};

export type TOptions = {
  page?: number;
  limit?: number;
  sortBy?: string | undefined;
  sortOrder?: 'asc' | 'desc' | undefined;
};
