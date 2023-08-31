export function validateLogin(userData, { email, password }) {
  const errors = {};
  console.log("validate login", userData);

  if (!email || /\s/.test(email)) {
    errors.email = "Email is either empty or have empty space.";
  } else if (userData && userData.length === 0) {
    errors.user = "User with this email does not exist.";
  } else if (userData[0].password !== password) {
    errors.password = "Password is invalid.";
  }

  if (!password || /\s/.test(password)) {
    errors.password = "Password is either empty or have empty space.";
  }

  return errors;
}
