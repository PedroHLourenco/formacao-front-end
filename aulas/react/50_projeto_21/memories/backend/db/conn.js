const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", true);

async function main() {
  await mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.q2indh4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  );
  console.log("Conectado com sucesso!");
}

main().catch((err) => console.log(err));

module.exports = main;
