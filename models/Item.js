const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ItemSchema = new Schema({
  name: String
});

module.exports = Item = mongoose.model('item', ItemSchema);
