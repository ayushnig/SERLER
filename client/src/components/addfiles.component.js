import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "../App.css";
import axios from 'axios';
import DatePicker from 'react-datepicker';


export default class addFiles extends Component {

    constructor(props) {
        super(props);

    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeSource = this.onChangeSource.bind(this);
    this.onChangePages = this.onChangePages.bind(this);
    this.onChangeDate= this.onChangeDate.bind(this);  
    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      author: '',
      title: '',
      source: '',
      pages: '',
      date: new Date()
    }
  }


  onChangeAuthor(e) {
    this.setState({
      author: e.target.value
    })
}

onChangeTitle(e) {
    this.setState({
      title: e.target.value
    })
}

onChangeSource(e) {
    this.setState({
      source: e.target.value
    })
}

onChangePages(e) {
    this.setState({
      pages: e.target.value
    })
}

onChangeDate(date) {
  this.setState({
    date: date
  })
}

onSubmit(e) {
  e.preventDefault();

  const Papers = {
      author: this.state.author,
      title: this.state.title,
      source: this.state.source,
      pages: this.state.pages,
      date: this.state.date,
      
  }
  axios({
    method: 'post',
    url: '/articles/add',
    headers: {}, 
    data: Papers
  });
  console.log(Papers);
  window.location='/addfiles';
  
}


    render() {
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                <div className="form-group" padding-bottom="20px">
                <label>Enter Authors:</label>
                <input type="text" required className="form-control"
                    value={this.state.author} 
                    onChange={this.onChangeAuthor} padding-bottom="20px" />
                </div>

                <div className="form-group" padding-bottom="20px">
                <label>Enter Title:</label>
                <input type="text" required className="form-control"
                    value={this.state.title} 
                    onChange={this.onChangeTitle} padding-bottom="20px" />
                </div>

                <div className="form-group" padding-bottom="20px">
                <label>Enter Pages:</label>
                <input type="text" required className="form-control"
                    value={this.state.pages} 
                    onChange={this.onChangePages} padding-bottom="20px" />
                </div>
                <label className="help" > Date: </label>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                maxDate={new Date()}
                                dropdownMode="select"
                                placeholderText="MM/DD/YYYY"
                            />
                            <div className="btn-group btn-block">
                                <label className="drop" > Source: </label>
                                <select className="form-control" id="exampleSelect1" value={this.state.Source}
                            onChange={this.onChangeSource}>
                            <option value="">Select Source</option>
                            <option>Research</option>
                            <option>Reviews</option>
                            <option>Journal</option>
                            <option>COnference Paper</option>
                            <option>Case Studies</option>

                        </select>


                                </div>


                <div class="i-am-centered-button" padding-top="20px">
                <input type="submit" value="Add Files" className="btn btn-primary" padding-top="20px" />
                </div>


                </form>
                
            </div>
        )
    }
}