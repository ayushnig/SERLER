const mongoose = require('mongoose'); //package needed for creating a skeleton of the type of data to be stored and its accompanied variables

const Schema = mongoose.Schema;

//defined the basic schema here for the articles stored in the mongodb
const articlesSchema = new Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  source: { type: String, required: true },
  pages: { type: String, required: true},
  date: { type: Date, required: true}
});

const Articles = mongoose.model('Articles', articlesSchema);

module.exports = Articles;