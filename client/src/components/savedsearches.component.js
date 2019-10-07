import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from 'axios';


export default class Saved extends Component {

    constructor(props){
        super(props);

        this.state = {
            savedSearches: []
          
    }
}


componentDidMount() {
    axios.get('http://localhost:5000/searches')
      .then(response => {
        this.setState({ savedSearches: response.data })
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
                    Header: "Start Date",
                    accessor: "start"
                  },

                  {
                    Header: "End Date",
                    accessor: "end"
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
