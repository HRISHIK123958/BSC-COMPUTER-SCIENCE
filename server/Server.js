// Assuming .env file is configured and dotenv is installed
require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const mongoose = require('mongoose');
const axios = require('axios');
const User = require('./models/Users');

// Path to your User model
const app = express();
app.use(cors());
app.use(express.json());

// Move the database connection outside the route handler
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

app.post('/signup', async (req, res) => {
  const { firstName, lastName, email, mobileNumber, gender, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = await new User({
      firstName,
      lastName,
      email,
      mobileNumber,
      gender,
      passwordHash: hashedPassword
    });

    newUser.save();
    console.log(newUser);
    res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error registering user' });
  }
});
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) {
          return res.status(404).send({ message: 'User not found' });
      }

      // Compare the submitted password with the hashed password in the database
      const isMatch = await bcrypt.compare(password, user.passwordHash);
      if (!isMatch) {
          return res.status(400).send({ message: 'Invalid credentials' });
      }

      // Here, you would typically issue a token (e.g., JWT) for session management
      // For simplicity, this example just sends a success response
      res.send({ message: 'Login successful' });
  } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Server error' });
  }
});
// Define a Mongoose schema and model for the shipping data
const shippingSchema = new mongoose.Schema({
  senderAddress: String,
  senderPincode: String,
  senderMobileNumber: String,
  receiverAddress: String,
  receiverPincode: String,
  receiverMobileNumber: String,
  productType: String,
  productWeight: Number,
  estimatedTime: String,
  cost: Number,
  // Include fields for storing geocoded coordinates if needed
  senderCoords: { lat: Number, lon: Number },
  receiverCoords: { lat: Number, lon: Number }
});

const ShippingData = mongoose.model('ShippingData', shippingSchema);
// Function to geocode an address using LocationIQ
const LOCATIONIQ_API_KEY = process.env.LOCATIONIQ_API_KEY;

// Function to geocode an address using LocationIQ

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
