require('dotenv').config(); //acquiring the environment variables set for not disclosing apikeys and other keys
const express = require('express'); //package imported for routing
const cors = require('cors'); //corss server resource sharing
const mongoose = require('mongoose'); //package for initializing the connection with the mongodb
const path = require('path'); //package used for joining the path for the deployment environment
const firebase = require('firebase'); //package used for initializing the app with firebase

const app = express();
const port = process.env.PORT || 5000; //setting the port for the server to be running on

app.use(cors()); //cross server resource sharing
app.use(express.json());

const uri = "mongodb+srv://jay:serler@serler-efnxr.mongodb.net/test?retryWrites=true&w=majority" //setting the uri for the mongodb connection
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully"); //checking for a succesfull connection
})

// Setup Firebase
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };
  firebase.initializeApp(firebaseConfig);

  //defining the routes and the corresponding class after importing it

const articlesRouter = require('./routes/articles');
app.use('/articles', articlesRouter);

const searchesRouter = require('./routes/searches');
app.use('/searches', searchesRouter);

//setting up deployment environment related routes
if (process.env.NODE_ENV === 'production') {
  app.use(express.static( 'client/build' ));

  app.get("*", (req, res) => {
    res.sendFile(path.join(_dirname, 'client', 'build', 'index.html'));
  });
}


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

module.exports = app
