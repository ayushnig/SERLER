const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articlesSchema = new Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  source: { type: String, required: true },
  pages: { type: String, required: true},
  date: { type: Date, required: true}
});

const Articles = mongoose.model('Articles', articlesSchema);

module.exports = Articles;