const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articlesSchema = new Schema({
  author: { type: String, required: false },
  title: { type: String, required: false },
  journal: { type: String, required: false },
  year: { type: Number, required: false},
  volume: { type: Number, required: false},
  number: { type: Number, required: false},
  pages: { type: String, required: false},
  month: { type: String, required: false},
  date: { type: Date, required: false}
});

const Articles = mongoose.model('Articles', articlesSchema);

module.exports = Articles;