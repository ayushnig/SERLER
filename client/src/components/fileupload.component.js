import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";

// Setup Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD6fusjXSa4VwEZDzdLFvpJyEDQHamsNks",
    authDomain: "serler-b3a52.firebaseapp.com",
    databaseURL: "https://serler-b3a52.firebaseio.com",
    projectId: "serler-b3a52",
    storageBucket: "serler-b3a52.appspot.com",
    messagingSenderId: "695052293400",
    appId: "1:695052293400:web:cf05eda59e1de71816fa6d",
    measurementId: "G-SCG9GCD9H4"
  };
  firebase.initializeApp(firebaseConfig);

export default class FileUpload extends React.Component {
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

