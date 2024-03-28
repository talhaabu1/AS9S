export type TUserRegistration = {
  name: string;
  email: string;
  password: string;
  profile: {
    bio: string;
    age: number;
  };
};
