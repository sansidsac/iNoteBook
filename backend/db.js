const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/iNotebook";

async function connectToMongo() {
    await mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully");
  }
  
  module.exports = connectToMongo;
