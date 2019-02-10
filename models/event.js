const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

 const EventSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  place: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  region: {
    type: String,
    required: true
  },
  saved: {
    type: Boolean,
    default: false
  },
 
});

// This creates our model from the above schema, using mongoose's model method
const Events = mongoose.model("Event", EventSchema);

// Export the event model
module.exports = Events;