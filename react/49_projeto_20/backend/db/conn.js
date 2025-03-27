const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      "mongodb+srv://PedroLourenco:1zG7eOe6Lat3NWVM@cluster0.bdpuaze.mongodb.net/?retryWrites=true&w=majority"
    );

    console.log("Conectado ao banco!");
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = main;
