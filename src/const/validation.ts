// Any validaion rules can be added here, consisted with error message,
// converter function and validator functions.

import type { ValidationsRuleSet } from "../types";
import { trimmer } from "../helpers/converters";
import { hasValue, matchPasswordFormat, isEmail } from "../helpers/validators";

export const VALIDATION_RULES: ValidationsRuleSet = {
  required: {
    error: "This is required.",
    validator: hasValue,
    groupValidator: () => true,
    converter: trimmer,
  },
  alphanumeric: {
    error: "Accepts only alphabet and numbers.",
    validator: hasValue,
    groupValidator: () => true,
    converter: trimmer,
  },
  password: {
    error: "At least 12 characters are required.",
    validator: matchPasswordFormat,
    groupValidator: () => true,
    converter: trimmer,
  },
  email: {
    error: "Must be email address.",
    validator: isEmail,
    groupValidator: () => true,
    converter: trimmer,
  },
};
