export const checkValidData = (email, password, fullNameVal) => {
  const isEmailValid = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  if (fullNameVal?.length < 3) {
    return "Please Enter a valid Name";
  }
  if (!isEmailValid) {
    return "Email id is not valid";
  }
  if (!isPasswordValid) {
    return "password is not valid";
  }
};

// if no string is returned then everything is okay
