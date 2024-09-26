const mongoose = require("mongoose");


async function main() {
  await mongoose.connect(
    "mongodb+srv://tekchandlol22:vishal@123@cluster0.lnnl0.mongodb.net/"
  );
}
