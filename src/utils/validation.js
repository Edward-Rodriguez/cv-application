/* eslint-disable no-useless-escape */

const inputRegex = {
  firstname: /^[a-zA-Z]{1,256}$/,
  lastname: /^[a-zA-Z]{1,256}$/,
  zipcode: /^\d{5}(-\d{4})?$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  phonenumber: /^(\(\d{3}\)|\d{3})[ .-]?\d{3}[ .-]?\d{4}$/,
};

const isValidInput = (ev) => {
  if (ev.target.value && ev.target.id in inputRegex) {
    if (inputRegex[ev.target.id].test(ev.target.value)) {
      return true;
    } else {
      return false;
    }
  } else return true;
};

export { isValidInput };
