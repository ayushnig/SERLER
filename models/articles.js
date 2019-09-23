const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articlesSchema = new Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  journal: { type: String, required: true },
  year: { type: Number, required: true},
  volume: { type: Number, required: true},
  number: { type: Number, required: true},
  pages: { type: String, required: true},
  month: { type: String, required: true}
});

const Articles = mongoose.model('Articles', articlesSchema);

module.exports = Articles;