import * as EmailValidator from "email-validator";

export const hasValue = (input: string): boolean => {
  return !!(input.trim().length > 0);
};

export const matchPasswordFormat = (input: string) => {
  return !!(input.length > 11 && input.length < 51);
};

export const isEmail = (input: string) => {
  return !!EmailValidator.validate(input);
};
