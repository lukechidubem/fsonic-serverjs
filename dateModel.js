const mongoose = require("mongoose");

const dateSchema = new mongoose.Schema({
  date: {
    type: String,
    required: [true, "Please add a date"],
  },
});

const Date = mongoose.model("Date", dateSchema);

module.exports = Date;
