import React, { Component } from 'react';
class List extends React.Component {
    render() {
        return (
            <div>
                { this.props.results ? <ul>
                    {this.props.results.map(item => (
                        <li key={item}>
                            {item} &nbsp;
                        </li>
                    ))}
                </ul>: <div> No data.</div>}
            </div>
        )
    }
}

export default List