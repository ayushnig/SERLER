import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import searchFiles from "./search.component"
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css"
import "../App.css";
const logo = require('../logo.png');

export default class Advance extends Component {
    constructor(props) {
        super(props);

        // this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeStart = this.onChangeStart.bind(this);
        this.onChangeEnd = this.onChangeEnd.bind(this);
        this.onChangeMethod = this.onChangeMethod.bind(this);
        this.onChangeOperator = this.onChangeOperator.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onChangeSource = this.onChangeSource.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            description: this.props.description,
            start: '',
            end: '',
            source: '',
            result: [],
            toggle: true,
            method: '',
            operator: '',
            value: ''
        }
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

    onChangeSource(e) {
        this.setState({
            source: e.target.value
        })
    }

    onChangeMethod(e) {
        this.setState({
            method: e.target.value
        })
    }

    onChangeOperator(e) {
        this.setState({
            operator: e.target.value
        })
    }

    onChangeValue(e) {
        this.setState({
            value: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const AdvSearch = {
            description: this.props.description,
            start: this.state.start,
            end: this.state.end,
            source: this.state.source,
            method: this.state.method,
            operator: this.state.operator,
            value: this.state.value
        }

        console.log(AdvSearch);
        window.location = '/results';
    }



    render() {
        return (
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
                        </div >


                    </div>
                    <br></br>

                    <div className="btn-group btn-block">
                        <label className="drop">If:</label>

                        <select className="form-control" id="exampleSelect1" value={this.state.method}
                            onChange={this.onChangeMethod}>
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
                            onChange={this.onChangeOperator}>
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
                        <input type="text" className="form-control"
                            value={this.props.value}
                            onChange={this.onChangeValue} padding-bottom="20px" />
                    </div>
                    {this.state.show}
                    <div class="i-am-centered-button" padding-top="20px">
                        <input type="submit" value="Search" className="btn btn-dark" padding-top="20px" />
                    </div>
                </form>
            </div>
        )
    }
}