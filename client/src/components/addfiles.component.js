import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "../App.css";
import axios from 'axios';


export default class addFiles extends Component {

    constructor(props) {
        super(props);

    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeJournal = this.onChangeJournal.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangeVolume = this.onChangeVolume.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.onChangePages = this.onChangePages.bind(this);
    this.onChangeMonth = this.onChangeMonth.bind(this);    
    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      author: '',
      title: '',
      journal: '',
      year: '',
      volume: '',
      number: '',
      pages: '',
      month:'',
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

onChangeJournal(e) {
    this.setState({
      journal: e.target.value
    })
}

onChangeYear(e) {
    this.setState({
      year: e.target.value
    })
}

onChangeVolume(e) {
    this.setState({
      volume: e.target.value
    })
}

onChangeNumber(e) {
    this.setState({
      number: e.target.value
    })
}

onChangePages(e) {
    this.setState({
      pages: e.target.value
    })
}

onChangeMonth(e) {
    this.setState({
      month: e.target.value
    })
}

onSubmit(e) {
  e.preventDefault();

  const Papers = {
      author: this.state.author,
      title: this.state.title,
      journal: this.state.journal,
      year: this.state.year,
      volume: this.state.volume,
      number: this.state.number,
      pages: this.state.pages,
      month: this.state.month,
      date: new Date()
      
  }

  console.log(Papers);
  
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
                <label>Enter Journal Name:</label>
                <input type="text" required className="form-control"
                    value={this.state.journal} 
                    onChange={this.onChangeJournal} padding-bottom="20px" />
                </div>

                <div className="form-group" padding-bottom="20px">
                <label>Enter Year Published:</label>
                <input type="text" required className="form-control"
                    value={this.state.year} 
                    onChange={this.onChangeYear} padding-bottom="20px" />
                </div>

                <div className="form-group" padding-bottom="20px">
                <label>Enter Volume:</label>
                <input type="text" required className="form-control"
                    value={this.state.volume} 
                    onChange={this.onChangeVolume} padding-bottom="20px" />
                </div>

                <div className="form-group" padding-bottom="20px">
                <label>Enter Volume Number:</label>
                <input type="text" required className="form-control"
                    value={this.state.number} 
                    onChange={this.onChangeNumber} padding-bottom="20px" />
                </div>

                <div className="form-group" padding-bottom="20px">
                <label>Enter Pages:</label>
                <input type="text" required className="form-control"
                    value={this.state.pages} 
                    onChange={this.onChangePages} padding-bottom="20px" />
                </div>

                <div className="form-group" padding-bottom="20px">
                <label>Enter Month Published:</label>
                <input type="text" required className="form-control"
                    value={this.state.month} 
                    onChange={this.onChangeMonth} padding-bottom="20px" />
                </div>

                <div class="i-am-centered-button" padding-top="20px">
                <input type="submit" value="Search" className="btn btn-primary" padding-top="20px" />
                </div>


                </form>
                
            </div>
        )
    }
}