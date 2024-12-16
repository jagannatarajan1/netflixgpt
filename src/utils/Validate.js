const Validate = (email, password) => {
  const emailValidation = /^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
  const passwordValidation =
    /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
  if (!emailValidation) return "email is not valid";
  if (!passwordValidation) return "password is not valid";
  return null;
};

export default Validate;
