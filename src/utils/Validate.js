export const checkValidData = (email, password, mobileNumber) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  //   const isUserNameValid = /^[a-zA-Z\-]+$/.test(userName);
//   const isMobileNumberValid = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/.test(
//     mobileNumber
//   );

  //   if (!isUserNameValid) return "Enter a valid username";
//   if (!isMobileNumberValid) return "Enter a valid mobilenumber";
  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";
  return null;
};
