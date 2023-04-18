const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");

//Define user schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

// Define schedule schema
const scheduleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  time: { type: String, required: true },
  description: { type: String, required: true },
});

const validate = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().label("Name"),
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  });
  return schema.validate(data);
};

const User = mongoose.model("user", userSchema);
const Schedule = mongoose.model("schedule", scheduleSchema);

module.exports = { validate, User, Schedule };
