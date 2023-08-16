const mongoose = require("mongoose");

//creating the schema
const ContractSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  arbiter: {
    type: String,
    required: true,
  },
  beneficiary: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Contract", ContractSchema);
