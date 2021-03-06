const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const columnSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    cards: [{ type: Schema.Types.ObjectId, ref: 'Card' }],
  },
  {
    timestamps: true
  }
);

module.exports = model('Column', columnSchema);
