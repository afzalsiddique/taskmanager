const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = "mongodb+srv://admin:fh9f5ZGXZDIQop2O@cluster0.gojklws.mongodb.net/?retryWrites=true&w=majority";
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
      // useCreateIndex: true,
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
