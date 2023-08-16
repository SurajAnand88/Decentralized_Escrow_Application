const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose
      .connect(
        `mongodb+srv://eeeerr00:${process.env.MONGO_PASSWORD}@cluster0.jgnxi3c.mongodb.net/escrow`
      )
      .then(console.log("Connected to the MongoDB"));
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  connect,
};
