const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
app.use(cors());
app.use(express.json());


const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  mobileNumber: Number,
  gender: String,
  passwordHash: String
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);