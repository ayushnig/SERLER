const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

 const uri = "mongodb+srv://jay:serler@serler-efnxr.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// mongoose.Promise = global.Promise
// mongoose
//   .connect(uri, {
//     useNewUrlParser: true,
//     dbName: 'SERLER'
//   })
//   .then((db) => {
//     console.log('Mongodb is connected!!')
//   })
//   .catch((err) => {
//     console.warn(err)
//   })

const articlesRouter = require('./routes/articles');
app.use('/articles', articlesRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
