const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: false}));



app.use("/api/products", productRoute);




app.get("/", (req, res) => {
  res.send("Api Product");
});


const connectionString = process.env.CONNECTION_STRING;

async function dbConnect() {
  try {
    await mongoose.connect(connectionString);
    console.log("Connected to database");
  } catch (error) {
    console.log(error.message);
  }
}

dbConnect();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

