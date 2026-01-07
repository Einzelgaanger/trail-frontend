export type Login = {
  email: string;
  password: string;
  user_type: string;
};

export type IForgotPassword = {
  email: string;
};

export type ISignUp = {
  firstName: string;
  lastName: string;
  email: string;
  altEmail: string;
  phone: number;
  password: string;
  password2: string;
  accountType: string;
  organisation: {
    name: string;
    type: string;
    website: string;
  };
  terms: boolean;
};
