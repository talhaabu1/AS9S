export type TUserRegistration = {
  username: string;
  email: string;
  password: string;
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
