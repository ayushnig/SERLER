import React, { Component } from 'react';
import { render } from "react-dom";
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from 'axios';

export default class Results extends Component {

  constructor(props) {
    console.log(props.location.state)
    super(props);


    this.state = {
      query: this.props.location.state,
      articles: []
    }

  }

  componentWillMount() {
    let authorName = this.state.query || null;
    let query = authorName.toLowerCase();
    axios.get(`http://localhost:5000/articles/search?&author=${query}`)
      .then(response => {
        console.log(response.data)
        this.setState({ articles: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }


  render() {
    const { articles } = this.state;
    console.log(articles.length)
    return (
      <div>
        <h1>Search Results</h1>
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

