import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            description: this.props.description,
            start: '',
            end: '',
            result: [],
            toggle: true,
            method: '',
            operator: '',
            keyword: ''
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
        if (this.props.description || this.state.start || this.state.end || this.state.method || this.state.operator || this.state.keyword) {
            const AdvSearch = {
                description: this.props.description,
                start: this.state.start,
                end: this.state.end,
                method: this.state.method,
                operator: this.state.operator,
                keyword: this.state.keyword
            }
            console.log(AdvSearch);
            console.log(this.state)
            let authorName = this.state.description || null;
            // let query = authorName.toLowerCase();
            let path = `results`;
            this.props.history.push(path, AdvSearch);
        } else {
            alert('Please enter atleast one field')
        }

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
// export default withRouter(Advance);
