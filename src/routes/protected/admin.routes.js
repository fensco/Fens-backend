import express from "express";
import jwt from "jsonwebtoken";
import passport from "passport";
import dotenv from "dotenv";
dotenv.config();
const router = express.Router();


router.get("/google", passport.authenticate('google', {scope: ['email', 'profile']}));

const baseFrontendUrl = process.env.FRONTEND_URL;

router.get('/google/callback',
  passport.authenticate("google", {
    failureRedirect: "/failedLogin",
    session:false
  }),
  function (req, res) {
    const token = jwt.sign({user:{"email":req.user.email}, id:req.user._id}, process.env.jwt_secret_key);
    res.redirect(`${baseFrontendUrl}/OAuthRedirecting?token=${token}`);
  }
);

module.exports = router;