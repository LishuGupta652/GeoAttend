const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { loginValidation, registerValidation } = require("../validation");

exports.homepage = (req, res) => {
  return res.status(200).json({
    error: "You are not authorized to access this page.",
    message: "Welcome to Gea Attend API v1.0.0",
  });
};

exports.signup = async (req, res) => {
  const { warning, value, error } = registerValidation(req.body);
  if (error) {
    return res.status(400).json({
      error: error.details[0].message,
      message: "",
    });
  }

  // Check if the user already exists
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) {
    return res.status(400).send({
      error: "Email already exists",
      message: "",
    });
  }

  // Hash the password
  // Salt must be integer and bcrypt is responding with a string
  const salt = bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, parseInt(salt));

  // Create New User
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    res.send({ user: { id: savedUser._id } });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      error: "Something went wrong. Please try again later.",
      message: err.message,
    });
  }
};

exports.login = async (req, res) => {
  // Validate the data
  try {
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const { email, password } = req.body;

    // Validating the email
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).send({
        error: "No User Found",
        message: "",
      });
    }

    // Validating the password
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) {
      return res.status(400).send({
        error: "Email or password is wrong",
        message: "",
      });
    }

    const token = jwt.sign(
      {
        _id: user._id,
        email,
        name: user.name,
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
      },
      process.env.TOKEN_SECRET
    );

    res.cookie("auth-token", token, { httpOnly: true });
    return res.header("auth-token", token).json({ user: { token: token } });
  } catch (err) {
    console.log(
      "Error while logging in: " + err.message + " " + err.details[0].message
    );
    res.status(404).json({
      error: "Something went wrong. Please try again later.",
      message: err.message,
    });
  }
};
