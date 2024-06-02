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


export type TLostItem = {
  userId: string
  categoryId: string
  location: string
  lostDate: string
  number: string
  image: string
  description: string
}
