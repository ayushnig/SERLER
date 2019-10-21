
import React from 'react'
import axios, { post } from 'axios';


class SimpleReactFileUpload extends React.Component {

  onChangeHandler=event=>{

    console.log(event.target.files[0])
      let files = event.target.files;
      console.log(files);
      let reader = new FileReader();
      reader.onload = r => {
        
        console.log(r.target.result);
       };
      reader.readAsDataURL(files[0]);


}

  render() {
    return (
      

      <input type="file" name="file" onChange={this.onChangeHandler}/>
   )
  }
}



export default SimpleReactFileUpload