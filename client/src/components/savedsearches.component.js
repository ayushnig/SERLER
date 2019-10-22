import React, { Component } from 'react';
import ReactTable from "react-table"; //package used to display the results of the saved searches querry
import "react-table/react-table.css"; //css for the react table package
import axios from 'axios'; //package for sending get and post requests to the mongodb

//class created for displaying the saved searches from the mongodb database
export default class Saved extends Component {

  constructor(props) {
    super(props);

    this.state = {
      savedSearches: []

    }
  }

  //module created for fetching the saved searches from the mongodb
  componentDidMount() {
    axios.get('/searches')
      .then(response => {
        if (response.data && response.data.length > 0) {
          for (let i = 0; i < response.data.length; i++) {
            let startConversion = response.data[i].start
            let endConversion = response.data[i].end
            response.data[i].start = new Date(startConversion).toISOString().split('T')[0];
            response.data[i].end = new Date(endConversion).toISOString().split('T')[0];
          }
          this.setState({ savedSearches: response.data })
        } else {
          this.setState({ savedSearches: '' })
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    const { savedSearches } = this.state;
    return (
      <div>
        <ReactTable
          data={savedSearches}
          columns={[
            {
              columns: [

                {
                  Header: "Name",
                  accessor: "name"
                },

                {
                  Header: "Description",
                  accessor: "description"
                },

                {
                  Header: "Source",
                  accessor: "source"
                },
                {
                  Header: "Method",
                  accessor: "method"
                },

                {
                  Header: "Operator",
                  accessor: "operator"
                },

                {
                  Header: "Value",
                  accessor: "value"
                },

                {
                  Header: "Start Date",
                  accessor: "start"
                },

                {
                  Header: "End Date",
                  accessor: "end"
                }


              ]
            },

          ]}
          defaultSorted={[
            {
              id: "name",
              asc: true
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />

      </div>
    )
  }
}
