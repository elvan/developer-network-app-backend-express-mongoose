const mongoose = require('mongoose');

const MONGODB_URL =
  process.env.MONGODB_URL || 'mongodb://localhost:27017/developer-network-app';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
