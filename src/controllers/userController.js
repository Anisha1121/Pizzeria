const { registerUser } = require("../services/userService");

async function createUser(req, res) {
  console.log("Controller called");
  console.log(req.body);

  
  try {
    const response = await registerUser(req.body);
    return res.status(201).json({
      message: "Successfully registered the user",
      data: response,
      success: true,
      error: {}
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.reason || "Something went wrong",
      error: error,
      data: {}
    });
  }
}

module.exports = { createUser };
