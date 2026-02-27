/* eslint-disable no-useless-escape */
import {
  ERROR_REQUIRED_FIELDS,
  REGEX_ERROR_MESSAGE,
} from '../consts/errorMessages';
import { USER_FIELDS } from '../consts/input';

const inputRegex = {
  firstname: /^[a-zA-Z]{1,256}$/,
  lastname: /^[a-zA-Z]{1,256}$/,
  zipcode: /^\d{5}(-\d{4})?$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  phonenumber: /^(\(\d{3}\)|\d{3})[ .-]?\d{3}[ .-]?\d{4}$/,
  degree: /^[A-Za-z0-9\s.'-,]{2,100}$/,
};

//list of inputs required
const requiredFields = [
  USER_FIELDS.FIRST_NAME,
  USER_FIELDS.LAST_NAME,
  USER_FIELDS.EMAIL,
];

function validateProfile(profile) {
  const newErrors = {};

  Object.keys(profile).forEach((input) => {
    if (!profile[input] && requiredFields.includes(input)) {
      newErrors[input] = ERROR_REQUIRED_FIELDS[input];
    } else if (!isValidInput(input, profile)) {
      newErrors[input] = REGEX_ERROR_MESSAGE[input];
    }
  });
  return newErrors;
}

const isValidInput = (input, profile) => {
  if (profile[input] && input in inputRegex) {
    if (inputRegex[input].test(profile[input])) {
      return true;
    } else {
      return false;
    }
  } else return true;
};

export { validateProfile };
