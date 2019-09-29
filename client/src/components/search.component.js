import React, { Component, useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
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
      toggle: true
    }
  }

  toggle = () => {
    const {show} = this.state;
    this.setState({
        show: !show
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

  const Search = {
      description: this.state.description


  }

  console.log(Search);
}

  componentDidMount() {
    // For initial data
    this.fetchData();
  }

  fetchData = (query) => {
    fetch("http://localhost:5000/articles", {
      method: "GET",
      dataType: "JSON",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      }
    })
      .then((resp) => {
        return resp.json()
      })
      .then((data) => {
        console.log(data)
        this.setState({ results: data })
      })
      .catch((error) => {
        console.log(error, "catch the hoop")
      })
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


            
            <div class="i-am-centered-button" padding-top="20px">
                <input type="submit" value="Search" className="btn btn-primary" padding-top="20px" />
            </div>
            
            
              </form>
              <Link to="/advancesearch" className="btn btn-primary">Advanced Search</Link>
              {this.state.show}

        
      </div>

    )
  }
}

