import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">SERLER</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/addfiles" className="nav-link">Add Files</Link>
          </li>
          <li className="navbar-item">
          <Link to="/savedsearches" className="nav-link">My Saved Searches</Link>
          </li>
          <li className="navbar-item">
          <Link to="/fileupload" className="nav-link">Bibtex Upload</Link>
          </li>

        </ul>
        </div>
      </nav>
    );
  }
}