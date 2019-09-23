import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class searchFiles extends Component {
    constructor(props) {
        super(props);

        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);

        this.state = {
            description: '',
            date: new Date()
          }
        }

          onChangeDescription(e) {
            this.setState({
              description: e.target.value
            })
          }

          onChangeDate(date) {
            this.setState({
              date: date
            })
          }

          onSubmit(e) {
            e.preventDefault();
        
                const Search = {
                description: this.state.description,
                date: this.state.date
            }
        
            console.log(Search);
            }
    render() {
        return(
            <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription} />
        </div>
         <div className="form-group">
         <label>Start Date: </label>
         <div>
           <DatePicker
             selected={this.state.date}
             onChange={this.onChangeDate}
           />
         </div>
       </div>
       <div className="form-group">
         <label>End Date: </label>
         <div>
           <DatePicker
             selected={this.state.date}
             onChange={this.onChangeDate}
           />
         </div>
       </div>

       <div className="form-group">
         <input type="submit" value="Search" className="btn btn-primary" />
       </div>
     </form>
        )
    }
}
