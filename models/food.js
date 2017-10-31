const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({

  // meal: {type: String, required: true },
  name: { type: String },
  calories: { type: Number },
  protein: { type: Number},
  fat: { type: Number },
  carbs: { type: Number }
  // qty: { type: Number, required: true }

});

module.exports = foodSchema;
