const router = require('express').Router(); //router pacages for creating routes for the server side processing of data
let Searches = require('../models/searches'); //the schema for the searches to be saved, searched is imported here

//default search for getting all the searches saved in the mongodb
router.route('/').get((req, res) => {
    Searches.find()
      .then(Searches => res.json(Searches))
      .catch(err => res.status(400).json('Error: ' + err));
  });

//route created specifically for saving a new search using the schema and the save() function
router.route('/save').post((req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    
    const source = req.body.source;
    const start = req.body.start;
    const end = req.body.end;
    const method = req.body.method;
    const operator = req.body.operator;
    const value = req.body.value;
  
  
    const newSearches = new Searches({
      name,
      description,
      source,
      start,
      end,
      method,
      operator,
      value,
    });
  
    newSearches.save()
      .then(() => res.json('Search Querry has been Saved!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  module.exports = router;