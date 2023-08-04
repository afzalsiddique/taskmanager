
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const cors = require('cors');
const routes = require('./routes');
const app = express();
app.use(cors());

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', routes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});









// const express = require("express")
// const mongoose = require("mongoose")
// const cors = require('cors')
//
// const app = express()
// // middlewares
// app.use(express.json())
// app.use(cors())
//
// mongoose.connect("mongodb+srv://admin:fh9f5ZGXZDIQop2O@cluster0.gojklws.mongodb.net/?retryWrites=true&w=majority")
//   .then(()=> console.log("Connected to mongodb"))
//   .then(()=>{
//     app.listen(5000)
//   }).catch((err)=>console.log(err))

