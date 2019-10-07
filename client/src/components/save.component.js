import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "../App.css";
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default class Save extends Component {

    constructor(props) {
        super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeStart = this.onChangeStart.bind(this);
    this.onChangeEnd = this.onChangeEnd.bind(this);
    this.onChangeMethod = this.onChangeMethod.bind(this);
    this.onChangeOperator = this.onChangeOperator.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      description: '',
      start: new Date,
      end: new Date,
      method: '',
      operator: '',
      value: ''
    }
  }


  onChangeName(e) {
    this.setState({
      name: e.target.value
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

  const searches = {
      name: this.state.name,
      description: this.state.description,
      start: this.state.start,
      end: this.state.end,
      method: this.state.method,
      operator: this.state.operator,
      value: this.state.value,
      
  }
  axios({
    method: 'post',
    url: 'http://localhost:5000/searches/save',
    headers: {}, 
    data: searches
  });

  console.log(searches);
  
}


    render() {
        return(
                <div>
                 <form onSubmit={this.onSubmit}>

                 <input type="text" required className="form-control"
                    value={this.state.name}
                    onChange={this.onChangeName} padding-bottom="20px" />            
                
                 <input type="text" required className="form-control"
                    value={this.state.description}
                    onChange={this.onChangeDescription} padding-bottom="20px" />            
                </form>
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
                                required
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
                                required
                            />
                        </div >


                    </div>
                    <br></br>

                    <div className="btn-group btn-block">
                        <label className="drop">If:</label>

                        <select className="form-control" id="exampleSelect1" value={this.state.method}
                            onChange={this.onChangeMethod} required>
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
                            onChange={this.onChangeOperator} required>
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
                        <input type="text" required className="form-control"
                            value={this.props.value}
                            onChange={this.onChangeValue} padding-bottom="20px" />
                    </div>
                    {this.state.show}
                    <div class="i-am-centered-button" padding-top="20px">
                        <input type="submit" value="Search" className="btn btn-dark" padding-top="20px" />
                    </div>
                </form>
            </div>
            </div>
        )
    }
}