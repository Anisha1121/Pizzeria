const mongoose = require('mongoose');
const serverConfig = require('./serverConfig');
async function connectDB()
{
try
{
  await mongoose.connect(serverConfig.DB_URL); 
    console.log("MongoDB connected successfully");
  ;
}
catch (error) {
  console.error('Error connecting to MongoDB:', error);
  throw error;
}
}
module.exports = connectDB;