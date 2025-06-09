const express = require('express')
const bodyParser = require('body-parser');
const ServerConfig = require('./config/serverConfig');
const connectDB = require('./config/dgconfig');

const app= express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded());

app.post('/ping', (req, res) => {
  console.log('Received ping request', req.body);
  return res.json({ message: 'Pong' });
});

app.listen(ServerConfig.PORT, async() => {
await connectDB();
console.log(`Server started at port ${ServerConfig.PORT}`);

})
// 34.5.1.21.8:5500 -> socket address
//for local machine we write localhost:5500