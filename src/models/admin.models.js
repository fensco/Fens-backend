import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
import findOrCreate from "mongoose-findorcreate";

const adminSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
    index: true,
  },
  password: {
    type: String,
    trim: true,
    minlength: 6,
    maxlength: 60,
  },
  token: {
    type: String,
    unique: true,
  },
  phone: { type: String, required: true },
});

adminSchema.plugin(findOrCreate);
adminSchema.plugin(passportLocalMongoose);

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
