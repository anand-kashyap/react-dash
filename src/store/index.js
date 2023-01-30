import { createContext } from 'react';

export const initUser = {
  fname: '',
  email: '',
  lname: '',
  pass: '',
};

export const initKYC = {
  gender: 'M', // or 'F'
  isMarried: false,
  dob: '',
  fatherFName: '',
  fatherLName: '',
};

export const Context = createContext();