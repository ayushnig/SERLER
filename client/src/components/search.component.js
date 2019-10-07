import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";
import Advance from './advancesearch.component';
import "bootstrap/dist/css/bootstrap.min.css"
import "../App.css";
const logo = require('../logo.png');


export default class searchFiles extends Component {
  constructor(props) {
    super(props);

    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.ontoggle = this.toggle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      description: '',
      results: [],
      toggle: true,
      showSearch: false
    }
  }

  toggle = () => {
    console.log('print me' + this.state.showSearch)
    const { showSearch } = this.state;
    this.setState({
      showSearch: !showSearch
    })
  }


  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeEnd(date) {
    this.setState({
      end: date
    })
  }


  onSubmit(e) {
    e.preventDefault();
    console.log(e)
    let authorName = this.state.description || null;
    let query = authorName.toLowerCase();
    let path = `results`;
        this.props.history.push(path, this.state);
  }
   
  componentDidMount() {
    // For initial data
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group" padding-bottom="20px">
            <div class="text-center">
              <img src={logo} alt="Serler Logo" height="350px" width="500px" padding bottom="20px" />
            </div>
          </div>

          <input type="text" required className="form-control"
            value={this.state.description}
            onChange={this.onChangeDescription} padding-bottom="20px" />            
            <a href="/savedsearches">Saved Searches</a>

          <div class="d-flex justify-content-end">
          <button className="btn btn-dark" onClick={this.save}>Save Search</button>
          </div>
          
          <div class="i-am-centered-button" padding-top="20px">
            {this.state.showSearch ? null : <input type="submit" value="Search" className="btn btn-dark" padding-top="20px" />}
          </div>
        </form>
        {this.state.showSearch ? <button className="btn btn-dark" onClick={this.toggle}>Hide Advanced Search</button> : <button className="btn btn-dark" onClick={this.toggle}>Show Advanced Search</button>}
        {this.state.showSearch ? <Advance description={this.state.description} /> : null}
        {this.state.show}
      </div>
    )
  }
}

