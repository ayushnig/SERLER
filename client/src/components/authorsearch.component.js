import ReactTable from "react-table"; //an important module to display results in tabular fomat
import "react-table/react-table.css";//css for the react table
import axios from 'axios'; //for sending get,post requests to mongodb
import React, { Component, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css" //css for styling
import "../App.css"; //css for extra and custom styling
import DatePicker from 'react-datepicker'; //package for selectig date from a calander popup
import "react-datepicker/dist/react-datepicker.css"; //css accompanied by the datpicker package
const logo = require('../logo.JPG'); //logo of the SERLER

//created the author class as an advance search component to search mongodb using author name
export default class Author extends Component {

  //to work with the chaning states
  constructor(props) {

    super(props);
   
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeStart = this.onChangeStart.bind(this);
    this.onChangeEnd = this.onChangeEnd.bind(this);
    this.ontoggle = this.toggle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      start: '',
      end: '',
      query: '',
      articles: [],
      description: '',
      searchField: '',
      results: [],
      toggle: true,
      showSearch: false,
      showResultTable: false
    }

  }

  //created variables for the search string here to be sent to mongodb
  componentWillMount() {
    let authorName = this.state.description;
    let fromDate = '';
    let toDate = '';
    if (this.state.query) {
      if (this.state.query.description) {
        authorName = this.state.query.description.toLowerCase() || '';
      }
      else if (this.state.query.start && this.state.query.end) {
        fromDate = this.state.query.start
        toDate = this.state.query.end
      }
    }
    //created a search url for the mongodb
    // let authorName = this.state.query.description || null;
    axios.get(`/articles/search?&author=${authorName}&fromDate=${fromDate}&toDate=${toDate}`)
      .then(response => {
        console.log(response.data)
        if (response.data && response.data.length > 0) {
          for (let i = 0; i < response.data.length; i++) {
            let dateConversion = response.data[i].date
            console.log(dateConversion)
            response.data[i].date = new Date(dateConversion).toISOString().split('T')[0];
          }
          this.setState({ articles: response.data })
        } else {
          this.setState({ showResultTable: false, articles: '' })
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

//small modules to toggle visibility of search
  toggle = () => {
    console.log('print me' + this.state.showSearch)
    const { showSearch } = this.state;
    this.setState({
      showSearch: !showSearch
    })
  }

//set state for the search string as reffered everywhere by descripton
  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

//set state for start and end date
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

//on submit event where the search button is clicked
  onSubmit(e) {
    e.preventDefault();
    let authorName = this.state.description || '';

    let fromDate = this.state.start || '';
    let toDate = this.state.end || '';
    if (this.state.query) {
      if (this.state.query.description) {
        authorName = authorName || '';
      }
      else if (this.state.query.start && this.state.query.end) {
        fromDate = this.state.query.start
        toDate = this.state.query.end
      }
    }
    console.log(fromDate + toDate)

    axios.get(`articles/search?&author=${authorName}&fromDate=${fromDate}&toDate=${toDate}`)
      .then(response => {
        console.log(response.data)
        if (response.data && response.data.length > 0) {
          for (let i = 0; i < response.data.length; i++) {
            let dateConversion = response.data[i].date
            console.log(dateConversion)
            response.data[i].date = new Date(dateConversion).toISOString().split('T')[0];
          }
          this.setState({ articles: response.data, showResultTable: true })
        } else {
          this.setState({ articles: '', showResultTable:false })
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }


  render() {
    console.log(this.state.showResultTable)
      const { articles } = this.state;
      return (
        <div>
            <div class="text-center">
              <img src={logo} alt="Serler Logo" height="350px" width="500px" padding bottom="20px" />
            </div>
            <br></br>
          <h4>Author Search</h4>
          <br></br>

          <div>
            <form onSubmit={this.onSubmit}>

              <input placeholder="Enter Author Name here" type="text" className="form-control"
                value={this.state.description}
                onChange={this.onChangeDescription} padding-bottom="20px" required/>

              <div class="d-flex justify-content-end">
                <a href="/savesearch">Save Search</a>
              </div>

              <div>

                <div className="i-am-centered" >
                  <div className="column-container" >
                    <label className="help" > Start Date: </label>
                    <DatePicker
                      selected={this.state.start}
                      onChange={this.onChangeStart}
                      peekNextMonth
                      showMonthDropdown
                      showYearDropdown
                      maxDate={new Date()}
                      dropdownMode="select"
                      placeholderText="MM/DD/YYYY"

                    />
                    <label className="help" > End Date: </label>
                    <DatePicker
                      selected={this.state.end}
                      onChange={this.onChangeEnd}
                      peekNextMonth
                      showMonthDropdown
                      showYearDropdown
                      maxDate={new Date()}
                      dropdownMode="select"
                      placeholderText="MM/DD/YYYY"

                    />
                  </div >


                </div>
                <br></br>

                <div className="btn-group btn-block">
                  <label className="drop">If:</label>

                  <select className="form-control" id="exampleSelect1" value={this.state.method}
                    onChange={this.onChangeMethod}>
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
                  <select className="form-control" id="exampleSelect2" value={this.state.operator}
                    onChange={this.onChangeOperator}>
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
                  <input type="text" className="form-control"
                    value={this.props.value}
                    onChange={this.onChangeValue} padding-bottom="20px" />
                </div>
                {this.state.show}
                <div class="i-am-centered-button" padding-top="20px">
                  <input type="submit" value="Search" className="btn btn-dark" padding-top="20px" />
                </div>

              </div>
            </form>
          </div>
          {this.state.showResultTable ? 
          <ReactTable
            data={articles}
            columns={[
              {
                columns: [

                  {
                    Header: "Author",
                    accessor: "author"
                  },

                  {
                    Header: "Title",
                    accessor: "title"
                  },

                  {
                    Header: "Source",
                    accessor: "source"
                  },

                  {
                    Header: "Date of Publish",
                    accessor: "date"
                  },


                  {
                    Header: "Pages",
                    accessor: "pages"
                  },

                ]
              },

            ]}
            defaultSorted={[
              {
                id: "title",
                asc: true
              }
            ]}
            pageSize={articles.length}
            className="-striped -highlight"
          /> : 
          ''
          }

        </div>
      );
    }
  }

