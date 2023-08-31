export function validateLogin(userData, { email, password }) {
  const errors = {};

  if (!email || /\s/.test(email)) {
    errors.email = "Email is invalid.";
  } else if (userData && userData.length === 0) {
    errors.user = "User with this email does not exist.";
  } else if (userData[0].password !== password) {
    errors.password = "Password is invalid.";
  }

  if (!password || /\s/.test(password)) {
    errors.password = "Password is invalid.";
  }

  return errors;
}
