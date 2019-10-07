const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articlesSchema = new Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  source: { type: String, required: true},
  journal: { type: String, required: false },
  year: { type: Number, required: true},
  volume: { type: Number, required: false},
  number: { type: Number, required: false},
  pages: { type: String, required: false},
  month: { type: String, required: false},
  date: { type: Date, required: false},
  source: { type: String, required: true}
});

const Articles = mongoose.model('Articles', articlesSchema);

module.exports = Articles;