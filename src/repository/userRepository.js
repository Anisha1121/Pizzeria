const User = require('../schema/userSchema'); // Assuming you have a User model defined in src/schema/userSchema.js


  async function findUser(parameters) {

    try{
       const response = await User.findOne(parameters);
    return response; 

    }
    catch (error) {
      console.error('Error in findUser:', error);
      throw new Error('Database query failed');
    }
   
}
  async function createUser(userDetails) {
    try {
      const response = await User.create(userDetails);
      return response;
    } catch (error) {
      console.error('Error in createUser:', error);
      throw new Error('Database query failed');
    }
  

}

module.exports = {
  findUser,
  createUser
};