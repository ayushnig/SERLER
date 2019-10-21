import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "../App.css";
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";



export default class Save extends Component {

  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);

    this.onChangeSource = this.onChangeSource.bind(this);
    this.onChangeStart = this.onChangeStart.bind(this);
    this.onChangeEnd = this.onChangeEnd.bind(this);
    this.onChangeMethod = this.onChangeMethod.bind(this);
    this.onChangeOperator = this.onChangeOperator.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      description: '',
      source: '',
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

  onChangeSource(e) {
    this.setState({
      source: e.target.value
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

      source: this.state.source,
      start: this.state.start,
      end: this.state.end,
      method: this.state.method,
      operator: this.state.operator,
      value: this.state.value,

    }
    axios({
      method: 'post',
      url: '/searches/save',
      headers: {},
      data: searches
    });

    console.log(searches);
    window.location = "/savesearch";

  }


  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Type a Name for saving the Search:</label>
          <input type="text" required className="form-control"
            value={this.state.name}
            onChange={this.onChangeName} padding-bottom="20px" />
          <label>Description: </label>
          <input type="text" required className="form-control"
            value={this.state.description}
            onChange={this.onChangeDescription} padding-bottom="20px" />

          <br />
     
        </form>
      </div>
    )
  }
}