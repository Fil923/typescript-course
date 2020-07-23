import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

import { Product } from "./product.model";

const products = [
  { title: "A gift", price: 12.99 },
  { title: "A Book", price: 12.99 },
];

const newProd = new Product("", -5.29);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log("Validation Errors");
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});

// const p1 = new Product("A Book", 12.99);

// console.log(p1.getInformation());

const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}
