const CheckValidationForm = (email, Password) => {
  const emailValidation =
    /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const PasswordValidation =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(Password);
  if (!emailValidation) return "Email Id is not Valid";
  if (!PasswordValidation) return "Password is not Valid";

  return null;
};
export default CheckValidationForm;
