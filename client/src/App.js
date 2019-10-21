import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from "react-router-dom";
import addFiles from "./components/addfiles.component";
import Navbar from './components/navbar.component';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import searchFiles from "./components/search.component";


import Saved from './components/savedsearches.component';
import Save from './components/save.component';
import SimpleReactFileUpload from './components/fileupload.component';
import Footer from './components/footer.component';
import Author from './components/authorsearch.component';

function App() {
  return (
    <Router>
      <Navbar />
    
      <div className="container">
      <br/>
      <Route path="/addfiles" exact component={addFiles} />
      <Route path="/" exact component={searchFiles} />
      <Route path = "/advancesearch" exact component={Author} />

      <Route path = "/savedsearches" exact component={Saved} />
      <Route path = "/savesearch" exact component={Save} />
      <Route path = "/fileupload" exact component={SimpleReactFileUpload} />
      
    
      

      </div>
      <Footer />

    </Router>
  );
}

export default App;
