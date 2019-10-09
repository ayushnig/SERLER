const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const searchesSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  
  source: { type: String, required: true },
  start: { type: Date, required: true },
  end: { type: Date, required: true},
  method: { type: String, required: true},
  operator: { type: String, required: true},
  value: { type: String, required: true}
});

const Searches = mongoose.model('Searches', searchesSchema);

module.exports = Searches;