// Require necessary modules
<<<<<<< HEAD
const express = require("express");
const bodyParser = require("body-parser");
const swaggerUI = require("swagger-ui-express");
//Routes
const loginRoute = require("./src/routes/open/login");
const registerRoute = require("./src/routes/open/signup");
const schedulesRoute = require("./src/routes/protected/schedule");
const usersRoute = require("./src/routes/protected/users");
// Call config
require("dotenv").config();
=======
import swaggerUI from "swagger-ui-express";
//Routes
import loginRoute from "./src/routes/open/login";
import registerRoute from "./src/routes/open/signup";
import schedualsRoute from "./src/routes/protected/schedual";
import usersRoute from "./src/routes/protected/users";
// Call config
>>>>>>> 92e429f (merge with JMV's work on auth with JWT)
// Create an instance of express app
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import passport from "passport";
import googleAuth from "./routes/protected/admin.routes";
import jwt from "jsonwebtoken";

dotenv.config();
const app = express();
//DB connectivity
const connect = require("./src/models/DB");
connect();

// Set up middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//Create home Interface
app.get("/", (req, res) => {
  try {
    res.status(200).render("welcome");
  } catch (error) {
    res.status(500).render("failure");
  }
});

//Set view engine
app.set("view engine", "ejs");
app.use("/v1/api/login", loginRoute);
app.use("/v1/api/register", registerRoute);
app.use("/v1/api/users", usersRoute);
<<<<<<< HEAD
app.use("/v1/api/schedules", schedulesRoute);
app.use("/v1/api-docs", swaggerUI.serve, swaggerUI.setup(require("./swagger")));

=======
app.use("/v1/api/scheduals", schedualsRoute);
app.use("/v1/api-docs", swaggerUI.serve, swaggerUI.setup(require("./swagger")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", googleAuth);

app.get("/", (req, res) => {
  console.log(`Starting...`);
});

>>>>>>> 92e429f (merge with JMV's work on auth with JWT)
app.listen(process.env.PORT, () =>
  console.log(`server is running on http://localhost:${process.env.PORT}`)
);
