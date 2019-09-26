import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import List from './itemLister.component';
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
              <button onClick={ this.toggle }>Advanced Search</button>
            {this.state.show }
            <Advance />
            
        
      </div>

    )
  }
}

class Advance extends Component{
  constructor(props) {
      super(props);

      this.onChangeDescription = this.onChangeDescription.bind(this);
      this.onChangeStart = this.onChangeStart.bind(this);
      this.onChangeEnd = this.onChangeEnd.bind(this);
      this.onChangeMethod = this.onChangeMethod.bind(this);
      this.onChangeOperator = this.onChangeOperator.bind(this);
      this.onChangeValue = this.onChangeValue.bind(this);

      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
          description: '',
          start: '',
          end: '',
          result:[],
          toggle: true,
          method: '',
          operator: '',
          value: ''
      }
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
  
          const AdvSearch = {
              description: this.state.description,
              start: this.state.start,
              end: this.state.end,
              method: this.state.method,
              operator: this.state.operator,
              value: this.state.value
          }
  
          console.log(AdvSearch);
      }
  render() {
      return(
          <div>
            <form onSubmit={this.onSubmit}>

          <div className="i-am-centered" >


              <div className="column-container" >
                  <label className="help" > Start Date: </label>
                  <DatePicker 
                          selected={this.state.start}
                          onChange={this.onChangeStart}
                          placeholderText= "MM/DD/YYYY"
                          required
                      /> 
                      <label className="help" > End Date: </label>
                      <DatePicker
                              selected={this.state.end}
                              onChange={this.onChangeEnd}
                              placeholderText= "MM/DD/YYYY"
                              required
                          /> 
                          </div > 
                          </div>
                          <br></br>
                          
                          <div className="btn-group btn-block">
                          <label className="drop">If:</label>
                  
                      <select className="form-control" id="exampleSelect1"  value={this.state.method} 
                  onChange={this.onChangeMethod} required>
                        <option value="">Select Method</option>
                        <option>TDD</option>
                        <option>Scrum</option>
                        <option>BDD</option>
                        <option>Kanban</option>
                        <option>Agile</option>
                        <option>Walerfall</option>
                        <option>lean</option>
                        
                      </select>
                     
                          <label className="drop">Operator: </label>
                 <select className="form-control" id="exampleSelect1"  value={this.state.operator} 
             onChange={this.onChangeOperator} required>
                   <option value="">Select Operator</option>
                   <option>Contains</option>
                   <option>Doesn't Contain</option>
                   <option>Begins with</option>
                   <option>Ends With</option>
                   <option>Is Equal to</option>
                   <option>Is less than</option>
                   <option>Is more than</option>
                   
                 </select>
                 
                          <label className="drop">Value: </label>
                <input type="text" required className="form-control"
                  value={this.props.value} 
                  onChange={this.onChangeValue} padding-bottom="20px" />
                 </div>
                 <div className="i-am-centered-button" padding-top="20px">
                 <input type="submit" value="Apply Filters" className="btn btn-primary" padding-top="20px" />
                </div>
                {this.state.show}
                 </form>
                 
                 
                          </div>
      )
      }
}

