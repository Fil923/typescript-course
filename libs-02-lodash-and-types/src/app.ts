import "reflect-metadata";
import { plainToClass } from "class-transformer";

import { Product } from "./product.model";

const products = [
  { title: "A gift", price: 12.99 },
  { title: "A Book", price: 12.99 },
];

// const p1 = new Product("A Book", 12.99);

// console.log(p1.getInformation());

const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}
