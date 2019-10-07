const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articlesSchema = new Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  source: { type: String, required: true},
  year: { type: Number, required: true},
  number: { type: Number, required: false},
  pages: { type: String, required: false},
  month: { type: String, required: false},
  date: { type: Date, required: false},
  source: { type: String, required: true}
});

const Articles = mongoose.model('Articles', articlesSchema);

module.exports = Articles;