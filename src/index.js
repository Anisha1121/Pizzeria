const express = require('express')
const bodyParser = require('body-parser');
const ServerConfig = require('./config/serverConfig');
const connectDB = require('./config/dgconfig');
const User = require('./schema/userSchema'); // Assuming you have a User model defined in src/schema/userSchema.js
const userRouter = require('./routes/UserRoute');
const cartRouter = require('./routes/cartRoute'); // Assuming you have a cartRouter defined in src/routes/cartRoute.js
const app= express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded());

app.use('/users', userRouter);
app.use('/carts', cartRouter);

app.post('/ping', (req, res) => {
  console.log('Received ping request', req.body);
  return res.json({ message: 'Pong' });
});

app.listen(ServerConfig.PORT, async() => {
await connectDB();
console.log(`Server started at port ${ServerConfig.PORT}`);


// const newUser = await User.create({
//   firstName: 'Vidhan',
//   lastName: 'Dwivedi',
//   mobileNumber: '1234567891',
//   email: 'vidhan.dwivedi@example.com',
//   password: 'password123'

});
// console.log('New user created:', newUser);
// });
// Assuming you have a User model defined in src/schema/userSchema.js
// 34.5.1.21.8:5500 -> socket address
//for local machine we write localhost:5500