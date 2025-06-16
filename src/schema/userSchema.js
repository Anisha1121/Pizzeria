const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    minlength: [3, 'First name must be at least 2 characters long'],
    maxlength: [20, 'First name must be at most 50 characters long'],
    lowercase: true,
    trim: true 
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    minlength: [3, 'Last name must be at least 2 characters long'],
    maxlength: [20, 'Last name must be at most 50 characters long'],
    lowercase: true,
    trim: true 
  },
  mobileNumber: {
    type: String,
    trim: true,
    minlength: [10, 'Mobile number must be at least 10 digits long'],
    required: [true, 'Mobile number is required'],
    unique: true,
    match: [/^\d{10}$/, 'Mobile number must be a 10-digit number']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [8, 'Password must be at least 8 characters long'],
    maxlength: [20, 'Password must be at most 20 characters long']
  },
  timestamps: {
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  }
});

userSchema.pre('save', function(next) {
  console.log('Before saving user:', this);
  const hashedPass=this.password = bcrypt.hashSync(this.password, 10);
  console.log('Hashed password:', hashedPass);
  console.log("Exitting pre-save hook and now creating user");
});

const User = mongoose.model('User', userSchema);//collection name is User
module.exports = User;