const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://drumsmanku:Mankubro4444@database1.rwujdsu.mongodb.net/shopInventory?retryWrites=true&w=majority', { //I am specifying this here itself. I know this is supposed to go in the .env file but for testing purposes I am writing this here itself.
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
