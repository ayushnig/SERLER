const router = require('express').Router();
let Searches = require('../models/searches');


router.route('/').get((req, res) => {
    Searches.find()
      .then(Searches => res.json(Searches))
      .catch(err => res.status(400).json('Error: ' + err));
  });


router.route('/save').post((req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const start = req.body.start;
    const end = req.body.end;
    const method = req.body.method;
    const operator = req.body.operator;
    const value = req.body.value;
  
  
    const newSearches = new Searches({
      name,
      description,
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