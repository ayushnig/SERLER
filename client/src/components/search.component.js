import ReactTable from "react-table"; //package for displaying the results of search
import "react-table/react-table.css"; //css for the react table package
import axios from 'axios'; //package used to send get and post requests to mongodb
import React, { Component, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "../App.css";
const logo = require('../logo.JPG'); 

//class created to display the results of the search query on the same page
export default class Results extends Component {

    //defining states
  constructor(props) {

    super(props);
    console.log(this.props.location.state)
    this.onChangeDescription = this.onChangeDescription.bind(this);

    this.ontoggle = this.toggle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      query: '',
      articles: [],
      description:'',
      searchField: '',
      results: [],
      toggle: true,
      showSearch: false,
      showResultTable: false
    }

  }

  //module to get variables initialized for the following search query 
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

    //module to fetch the results of the search
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

  //module used to toggle visibility of components
  toggle = () => {
    console.log('print me' + this.state.showSearch)
    console.log(process.env.API_KEY)
    const { showSearch } = this.state;
    this.setState({
      showSearch: !showSearch
    })
  }

  //set state module for description
  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  //module for the event of submit, click on search button
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

  // componentDidMount() {
  //     axios.get('http://localhost:5000/articles/')
  //       .then(response => {
  //         this.setState({ articles: response.data })
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       })
  //   }


  render() {
    console.log(this.state.showResultTable)
      const { articles } = this.state;
      return (
        <div>
            <div class="text-center">
              <img src={logo} alt="Serler Logo" height="350px" width="500px" padding bottom="20px" />
            </div>
            <br></br>
          <h4>Keyword Search</h4>
<br></br>
          <div>
            <form onSubmit={this.onSubmit}>

              <input placeholder="Enter Keyword Here" type="text" className="form-control"
                value={this.state.description}
                onChange={this.onChangeDescription} padding-bottom="20px" required/>

              <div>

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
          /> : ''
        
          }

        </div>
      );
    }
  }

