// server.js
const express = require('express');
const User = require('./models/User'); 

const connect = require("./config/connectDB");
const app = express();
require("dotenv").config({ path: "./config/.env" });



app.use(express.json());

connect();

// const mongoose = require('mongoose');



// const User = require('./models/User'); // Import the User model


app.use(express.json()); // Middleware to parse JSON




// POST: Add a new user to the database
app.post("/add", async (req, res) => {
  const { fullname, email, phone} = req.body;
  try {
    const newPerson = new User({
      fullname,
      email,
      phone,
      
    });
    await newPerson.save()
    res.send(newPerson);
  } catch (error) {
    console.log(error);
  }
});

app.get("/get", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    console.log(error);
  }
});

app.get("/get/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.send(user);
  } catch (error) {
    console.log(error);
  }
});

app.put("/update/:id", async (req, res) => {
  try {
    const updateduser = await User.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
      },
      { new: true }
    );
    res.send(updateduser);
  } catch (error) {
    console.log(error);
  }
});

app.delete("/del/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.send("user is deleted successfully");
  } catch (error) {
    console.log(error);
  }
});

// Start the server

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  
