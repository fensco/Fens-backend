import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import passport from "passport";

// import "src/routes/authentication";
// // import googleAuth from "src/routes/admin.routes";
// import jwt from "jsonwebtoken";

import passportGoogleAuth from "passport-google-oauth20";
const GoogleStrategy = passportGoogleAuth.Strategy;

// import { Admin } from "../src/models/admin.models";

// import "./tokenJWT.controllers";
dotenv.config();
const app = express();
const port = process.env.PORT || 3500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const passportConfig = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3100/google/callback",
  passReqToCallback: true,
};
app.use(passport.initialize());
// passport.use(Admin.createStrategy());

passport.use(
  new GoogleStrategy(passportConfig, function (
    request,
    accessToken,
    refreshToken,
    profile,
    done
  ) {
    console.log(profile);
    done(null, profile);
  })
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.serializeUser(function (user, done) {
  done(null, user);
});

// app.use("/auth", googleAuth);

app.get("/", (req, res) => {
  console.log(`Starting...`);
});

app.get("/google", passport.authenticate("google", { scope: "profile" }));

app.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }, () => {
    console.log("Logged in!");
  })
);

app.route(
  "/getDetails",
  passport.authenticate("jwt_strategy", { session: false }),
  (req, res) => {
    console.log(req.user);
  }
);

app.listen(port, () => {
  console.log(`At port ${port}`);
});
