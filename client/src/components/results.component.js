import { render } from "react-dom";
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from 'axios';
import React, { Component, useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css"
import "../App.css";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default class Results extends Component {

  constructor(props) {
    console.log(props.location.state)
    super(props);

    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.ontoggle = this.toggle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  
    this.state = {
      query: this.props.location.state.description,
      articles: [],
      description: this.props.location.state,
      results: [],
      toggle: true,
      showSearch: false
    }

  }

  componentWillMount() {
    let authorName = this.state.query || null;
    let query = authorName;
    axios.get(`http://localhost:5000/articles/search?&author=${query}`)
      .then(response => {
        console.log(response.data)
        this.setState({ articles: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
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
}

      
  render() {
    const { articles } = this.state;
    console.log(articles.length)
    return (
      <div>
         <h1>Search Results</h1>
         
        <div>
        <form onSubmit={this.onSubmit}>
          
          <input type="text" required className="form-control"
            value={this.state.description}
            onChange={this.onChangeDescription} padding-bottom="20px" />            
            <a href="/savedsearches">Saved Searches</a>

          <div class="d-flex justify-content-end">
          <button className="btn btn-dark" onClick={this.save}>Save Search</button>
          </div>
        </form>
        <div>
                <form onSubmit={this.onSubmit}>
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
                                required
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
                                required
                            />
                        </div >


                    </div>
                    <br></br>

                    <div className="btn-group btn-block">
                        <label className="drop">If:</label>

                        <select className="form-control" id="exampleSelect1" value={this.state.method}
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
                        <select className="form-control" id="exampleSelect2" value={this.state.operator}
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
                    {this.state.show}
                    <div class="i-am-centered-button" padding-top="20px">
                        <input type="submit" value="Search" className="btn btn-dark" padding-top="20px" />
                    </div>
                </form>
            </div>
      </div>
          <br></br>
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
                  Header: "Journal",
                  accessor: "journal"
                },

                {
                  Header: "Year",
                  accessor: "year"
                },

                {
                  Header: "Volume",
                  accessor: "volume"
                },

                {
                  Header: "Number",
                  accessor: "number"
                },

                {
                  Header: "Pages",
                  accessor: "pages"
                },

                {
                  Header: "Month",
                  accessor: "month"
                }


              ]
            },

          ]}
          defaultSorted={[
            {
              id: "title",
              asc: true
            }
          ]}
          pageSize={articles.length} // the number of rows per page to be displayed
          className="-striped -highlight"
        />
        <br />
      </div>
    );
  }
}

