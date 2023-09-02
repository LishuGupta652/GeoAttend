const mongoose = require("mongoose");
const { USER_ROLE } = require("../constants");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 4,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: [6, "Email must be at least 6 characters long."],
    max: 255,
  },
  password: {
    type: String,
    required: true,
    min: [
      3,
      "Password must be at least 3 characters long, and contain at least one number.",
    ],
    max: [
      32,
      "Password must be at MAX 32 characters long, and contain at least one number.",
    ],
  },
  date: {
    type: Date,
    default: Date.now,
  },

  // 0 for user, 1 for admin
  role: {
    type: Number,
    default: USER_ROLE,
  },
});

// Register the schema as a model
module.exports = mongoose.model("User", userSchema);
