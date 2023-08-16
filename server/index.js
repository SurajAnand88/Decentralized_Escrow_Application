const express = require("express");
require("dotenv").config();
const { connect } = require("./Helper/connect");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const ContractSchema = require("./Model/schema");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// getting contracts from  the database
app.get("/contracts", async (req, res) => {
  try {
    const contracts = await ContractSchema.find({});
    res.status(200).json({ contracts });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Posting contracts to thge database
app.post("/contracts", async (req, res) => {
  try {
    // pushing new contract to the database
    await ContractSchema.create(req.body);
    const contracts = await ContractSchema.find({});
    res.status(200).json({ contracts });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  connect();
  console.log(`Listening on port ${PORT}`);
});
