const { findUser, createUser } = require("../repository/userRepository");
  async function registerUser(userDetails) {
    console.log("Service called");
    const user = await findUser({ 
      email: userDetails.email, mobileNumber: userDetails.mobileNumber });

      if (user) {
        throw new Error('User already exists with this email or mobile number', { status: 400 });
      }

    const newUser = await createUser({
      email: userDetails.email,
      mobileNumber: userDetails.mobileNumber,
      firstName: userDetails.firstName,
      password: userDetails.password,
      lastName: userDetails.lastName
    });

    if (!newUser) {
      throw new Error('Failed to create user', { status: 500 });
    }
    return newUser
  }

module.exports = {
  registerUser
};