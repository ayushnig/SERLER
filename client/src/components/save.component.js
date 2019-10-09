import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "../App.css";
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Advance from './advancesearch.component';


export default class Save extends Component {

    constructor(props) {
        super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeStart = this.onChangeStart.bind(this);
    this.onChangeEnd = this.onChangeEnd.bind(this);
    this.onChangeMethod = this.onChangeMethod.bind(this);
    this.onChangeOperator = this.onChangeOperator.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      description: '',
      start: new Date,
      end: new Date,
      method: '',
      operator: '',
      value: ''
    }
  }


  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
}

onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
}

onChangeStart(date) {
    this.setState({
      start: date
    })
}

onChangeEnd(date) {
    this.setState({
      end: date
    })
}

onChangeMethod(e) {
    this.setState({
      method: e.target.value
    })
}

onChangeOperator(e) {
    this.setState({
      operator: e.target.value
    })
}

onChangeValue(e) {
    this.setState({
      value: e.target.value
    })
}



onSubmit(e) {
  e.preventDefault();
  alert("Your search has been saved")

  const searches = {
      name: this.state.name,
      description: this.state.description,
      start: this.state.start,
      end: this.state.end,
      method: this.state.method,
      operator: this.state.operator,
      value: this.state.value,
      
  }
  axios({
    method: 'post',
    url: 'http://localhost:5000/searches/save',
    headers: {}, 
    data: searches
  });

  console.log(searches);
  
}


    render() {
        return(
                <div>
                 <form onSubmit={this.onSubmit}>

                 <input type="text" required className="form-control"
                    value={this.state.name}
                    onChange={this.onChangeName} padding-bottom="20px" />            
                
                 <input type="text" required className="form-control"
                    value={this.state.description}
                    onChange={this.onChangeDescription} padding-bottom="20px" />         

                  <br />
                  <Advance /> 
                  <div class="i-am-centered-button" padding-top="20px">
                        <input type="submit" value="Save" className="btn btn-dark" padding-top="20px" />
                    </div>  
                </form>
            </div>
        )
    }
}