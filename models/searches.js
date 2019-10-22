const mongoose = require('mongoose');//package needed for creating a skeleton of the type of data to be stored and its accompanied variables


const Schema = mongoose.Schema;

//defined the basic schema here for the searches to be stored in the mongodb
const searchesSchema = new Schema({
  name: { type: String, required: false },
  description: { type: String, required: false },
  source: { type: String, required: false },
  start: { type: Date, required: false },
  end: { type: Date, required: false},
  method: { type: String, required: false},
  operator: { type: String, required: false},
  value: { type: String, required: false}
});

const Searches = mongoose.model('Searches', searchesSchema);

module.exports = Searches;