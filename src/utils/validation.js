/* eslint-disable no-useless-escape */

const inputRegex = {
  firstname: /^[a-zA-Z]{1,256}$/,
  lastname: /^[a-zA-Z]{1,256}$/,
  zipcode: /^\d{5}(-\d{4})?$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  phonenumber: /^(\(\d{3}\)|\d{3})[ .-]?\d{3}[ .-]?\d{4}$/,
};

//list of inputs to exclude from validation check
const noValidationList = ['address', 'citytown', 'linkedin', 'website'];

const handleSubmit = (ev) => {
  ev.preventDefault();
  const inputs = Array.from(document.querySelectorAll('input')).filter(
    (item) => !noValidationList.includes(item.id),
  );
  inputs.forEach((inputField) => {
    if (isValidInput(inputField, inputRegex[inputField.id])) {
      console.log(inputField.id + ' is Valid!');
    } else {
      console.log(inputField.id + ' NOT Valid!');
    }
  });
};

// const isValidInput = (ev) => {
//   if (ev.target.value && ev.target.id in inputRegex) {
//     if (inputRegex[ev.target.id].test(ev.target.value)) {
//       return true;
//     } else {
//       return false;
//     }
//   } else return true;
// };

const isValidInput = (inputElement) => {
  if (inputElement.value && inputElement.id in inputRegex) {
    if (inputRegex[inputElement.id].test(inputElement.value)) {
      return true;
    } else {
      return false;
    }
  } else return true;
};

export { handleSubmit, isValidInput };
