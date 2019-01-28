const validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};
// Converts empty fields to empty string
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
// Email checks
  if (validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  } else if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
// Password checks
  if (validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};