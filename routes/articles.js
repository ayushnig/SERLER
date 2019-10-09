const router = require('express').Router();
let Articles = require('../models/articles');

router.route('/').get((req, res) => {
  Articles.find()
    .then(Articles => {
      console.log(Articles) 
      res.json(Articles)
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/search').get(async (req, res) => {
  console.log(req.query);
  const { author, fromDate, toDate } = req.query;
  console.log(author + fromDate + toDate)
  let query = {};
  if (author) {
    query.author = author;
  }
  if (fromDate && toDate ) {
   let date = { "date": {
      $gte: new Date(fromDate),
      $lt: new Date(toDate)
    }
  }
  // let date = {"date" : {"$gte": new Date(fromDate)}}
  query.date = date.date
 }
console.log(query)
  await Articles.find(query)
    .then(Articles => {
      console.log(Articles)
      res.json(Articles)
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const author = req.body.author;
  const title = req.body.title;
  const source = req.body.source;
  const pages = req.body.pages;
  const date = req.body.date;


  const newArticles = new Articles({
    author,
    title,
    source,
    pages,
    date,
  });
console.log(newArticles);
  newArticles.save()
    .then(() => res.json('Article has been added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;