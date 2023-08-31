export function validateRegister(userData, { name, email, password }) {
  const errors = {};

  console.log("userData:", userData);

  if (!name) {
    errors.name = "Enter a valid name.";
  }

  if (!email) {
    errors.email = "Email is invalid.";
  } else {
    const pattern =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const is_email_empty = /\s/.test(email);
    const is_email_valid = pattern.test(email);
    if (is_email_empty || !is_email_valid) {
      errors.email = "Email is invalid.";
    }
  }

  if (userData && userData.length !== 0) {
    errors.user = "User with this email already exists.";
  }

  if (password || !/\s/.test(password)) {
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const is_password_valid = pattern.test(password);
    if (!is_password_valid) {
      errors.password = "Password is invalid.";
    }
  }

  return errors;
}
