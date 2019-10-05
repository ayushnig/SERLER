import React, { Component } from 'react';
import { render } from "react-dom";
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from 'axios';

export default class Results extends Component {

  constructor(props) {

    super(props);


    this.state = {
      articles: []
    }

}

    componentDidMount() {
        axios.get('http://localhost:5000/articles/')
          .then(response => {
            this.setState({ articles: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }

      
  render() {
    const { articles } = this.state;
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
          defaultPageSize={20}
          className="-striped -highlight"
        />
        <br />
        
      </div>
    );
  }
}

