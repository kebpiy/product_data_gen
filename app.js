import express from "express";
import { Product, randomProduct } from "./product.js";

const app = express();
const port = 3000;
const numProducts = 50;

// keeps track of number of requests during current runtime
let requestNum = 0;

app.get("/", (_, res) => {
  const productList = Array.from({ length: numProducts }, (_, i) => {
    return i % 4 == 0 ? randomProduct(false) : randomProduct(true);
  });
  const data = {
    "id": requestNum,
    "products": productList
  }
  requestNum++;
  res.json(data);
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});
