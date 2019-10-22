import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase"; //essential package for initializing a connection with the firebase
import FileUploader from "react-firebase-file-uploader"; //essential package for uploading a bibtext file
require('dotenv').config(); //getting environment variables to hide the apikey and other important keys


// setting up Firebase connectioning using environment variable
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

  //logging environment variables for checking the working of the defined variables
  console.log(process.env)

  //created a class for specifically uplading a bibtext file from local machine and storing it in firebase
export default class FileUpload extends React.Component {

  //setting the default states for the variables
  state = {
    filenames: [],
    downloadURLs: [],
    isUploading: false,
    uploadProgress: 0,
    showlink: false
  };

  handleUploadStart = () =>
    this.setState({
      isUploading: true,
      uploadProgress: 0
    });

  handleProgress = progress =>
    this.setState({
      uploadProgress: progress
    });

  handleUploadError = error => {
    this.setState({
      isUploading: false
      // Todo: handle error
    });
    console.error(error);
  };

  //created a small module for creating a download link for the uploaded bibtext file
  handleUploadSuccess = async filename => {
    const downloadURL = await firebase
      .storage()
      .ref("text")
      .child(filename)
      .getDownloadURL();
      console.log(downloadURL);
      if (downloadURL!= 'Null'){
        this.setState({
            showlink: true
        })
      }


    this.setState(oldState => ({
      filenames: [filename],
      downloadURLs: [downloadURL],
      uploadProgress: 100,
      isUploading: false
 
    }));
  };

  render() {
    return (
      <div>
        <FileUploader
          accept="*"
          name="file-uploader"
          randomizeFilename
          storageRef={firebase.storage().ref("text")}
          onUploadStart={this.handleUploadStart}
          onUploadError={this.handleUploadError}
          onUploadSuccess={this.handleUploadSuccess}
          onProgress={this.handleProgress}
          multiple
        />

        <p>Progress: {this.state.uploadProgress}</p>

        <p>Filenames: {this.state.filenames.join(", ")}</p>

        <div>

          {this.state.showlink ? <a href={this.state.downloadURLs}>Click here to download your uploaded bibtext file!</a> : ''}
        </div>
      </div>
    );
  }
}

