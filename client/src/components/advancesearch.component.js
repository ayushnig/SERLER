import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
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
        this.handleMethod = this.handleMethod.bind(this);
        this.handleOperator = this.handleOperator.bind(this);
        this.handleKeyword = this.handleKeyword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            description: this.props.description,
            start: '',
            end: '',
            result: [],
            toggle: true,
            method: [],
            operator: [],
            keyword: []
        }
    }

    createUI(el,i) {
        return this.state.method.map((el,i) =>
        <div key={i}>
                <div className="btn-group btn-block">
                    <label className="drop">If:</label>

                    <select className="form-control" id="exampleSelect1" value={this.props.method}
                        onChange={this.handleMethod.bind(this, i)} required>
                        <option value="">Select Method</option>
                        <option>TDD</option>
                        <option>Scrum</option>
                        <option>BDD</option>
                        <option>Kanban</option>
                        <option>Agile</option>
                        <option>Waterfall</option>
                        <option>lean</option>
            
                    </select>
                    
                    <label className="drop">Operator: </label>
                    <select className="form-control" id="exampleSelect2" onChange={this.handleOperator.bind(this, i)}
                    value={this.props.operator} required>
                        <option value="">Select Operator</option>
                        <option>Contains</option>
                        <option>Doesn't Contain</option>
                        <option>Begins with</option>
                        <option>Ends With</option>
                        <option>Is Equal to</option>
                        <option>Is less than</option>
                        <option>Is more than</option>
                    </select>
                  
                    <label className="drop">Keyword: </label>
                    <input type="text" required className="form-control" value={this.props.keyword} onChange={this.handleKeyword.bind(this, i)}
                    padding-bottom="20px" />
                    <div className="delete-button">
                        <input type='button' value='Delete' className="btn btn-danger" onClick={this.removeClick.bind(this, i)} />
                    </div>
                    </div>
                    <br /> <br />
                    </div>
        )
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

    handleMethod(i, event) {
        let method = [...this.state.method];
        method[i] = event.target.value;
        this.setState({ method });
    }

    handleOperator(i, event) {
        let operator = [...this.state.operator];
        operator[i] = event.target.value;
        this.setState({ operator });
    }

    handleKeyword(i, event) {
        let keyword = [...this.state.keyword];
        keyword[i] = event.target.value;
        this.setState({ keyword });
    }

    addClick() {
        this.setState(prevState => ({ method: [...prevState.method, ''] }))
        this.setState(prevState => ({ operator: [...prevState.operator, ''] }))
        this.setState(prevState => ({ keyword: [...prevState.keyword, ''] }))

    }

    removeClick(i) {
        let method = [...this.state.method];
        method.splice(i, 1);
        this.setState({ method });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.description || this.state.start || this.state.end || this.state.method || this.state.operator || this.state.keyword) {
            const AdvSearch = {
                description: this.props.description,
                start: this.state.start,
                end: this.state.end,
                method: this.state.method.join(','),
                operator: this.state.operator.join(','),
                keyword: this.state.keyword.join(',')
            }
            console.log(AdvSearch);
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
                <form onSubmit={this.handleSubmit}>
                    <div class="add-button" >
                        <input type="button" value="Add" className="btn btn-dark" onClick={this.addClick.bind(this)} />
                    </div>
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
                    <br />
                    {this.createUI()}
                    <div class="i-am-centered-button" padding-top="20px">
                        <input type="submit" value="Search" className="btn btn-dark" padding-top="20px" />
                    </div>
                </form>

            </div>
        )
    }
}
// export default withRouter(Advance);
