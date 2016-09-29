import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data){

  let errors = {};

  if(validator.isEmpty(data.username)){
    errors.username = 'Username is required';
  }
  if(validator.isEmpty(data.email)){
    errors.email = 'Email is required';
  }
  if(!validator.isEmail(data.email)){
    errors.email = 'Email not valid';
  }
  if(validator.isEmpty(data.password)){
    errors.password = 'Password is required';
  }
  if(validator.isEmpty(data.passwordConfirmation)){
    errors.passwordConfirmation = 'password Confirmation is required';
  }
  if(!validator.equals(data.password, data.passwordConfirmation)){
    errors.passwordConfirmation = 'Password must match';
  }
  if(validator.isEmpty(data.timezone)){
    errors.timezone = 'Timezone is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
