import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css"
import "../App.css";
const logo = require('../logo.png');

export default class searchFiles extends Component {
    constructor(props) {
        super(props);

        this.onChangeDescription = this.onChangeDescription.bind(this);
       
        this.onSubmit = this.onSubmit.bind(this);
        this.ontoggle = this.toggle.bind(this);

        this.state = {
            description: '',
            start: new Date(),
            end: new Date(),
            toggle: true
        }
    }

    toggle = () => {
        const {show} = this.state;
        this.setState({
            show: !show
        })
    }
    
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

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

    onSubmit(e) {
        e.preventDefault();

        const Search = {
            description: this.state.description,
            start: this.state.start,
            end: this.state.end
        }

        console.log(Search);
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group" padding-bottom="20px">
                    <div class="text-center">
                        <img src={logo} alt="Serler Logo" height="350px" width="500px" padding bottom="20px" />
                    </div>

                </div>
                <input type="text" required className="form-control"
                    value={this.state.description} 
                    onChange={this.onChangeDescription} padding-bottom="20px" />


            
            <div class="i-am-centered-button" padding-top="20px">
                <input type="submit" value="Search" className="btn btn-primary" padding-top="20px" />
            </div>
            <button onClick={ this.toggle }>Advanced Search</button>
            {this.state.show && <Advance />}
            <div>
            </div> 
            
                </form>

                
                        )
                    }
}
class Advance extends Component{
    constructor(props) {
        super(props);

        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeStart = this.onChangeStart.bind(this);
        this.onChangeEnd = this.onChangeEnd.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            description: '',
            start: new Date(),
            end: new Date(),
            toggle: true
        }
    }

        onChangeDescription(e) {
            this.setState({
                description: e.target.value
            })
        }
    
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
    
        onSubmit(e) {
            e.preventDefault();
    
            const Search = {
                description: this.state.description,
                start: this.state.start,
                end: this.state.end
            }
    
            console.log(Search);
        }
        componentDidMount() {
            // For initial data
            this.fetchData();
          }
        
          fetchData = (query) => {
            fetch("http://localhost:5000/articles", {
              method: "GET",
              dataType: "JSON",
              headers: {
                "Content-Type": "application/json; charset=utf-8",
              }
            })
              .then((resp) => {
                return resp.json()
              })
              .then((data) => {
                console.log(data)
                this.setState({ results: data })
              })
              .catch((error) => {
                console.log(error, "catch the hoop")
              })
          }

    render() {
        return(
            <div>
            <div> This is the Advance Search Field</div>
            <div className="i-am-centered" >


                <div className="column-container" >
                    <label className="help" > Start Date: </label>
                    <DatePicker
                            selected={this.state.start}
                            onChange={this.onChangeStart}
                        /> 
                        <label className="help" > End Date: </label><DatePicker
                                selected={this.state.end}
                                onChange={this.onChangeEnd}
                            /> 
                            </div > 
                            </div>
                            </div>
        )
    }
}