// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Filippo",
//   age: 27
// };

//role is a tuple

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Filippo",
//   age: 27,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"]
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}

const person = {
  name: "Filippo",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.AUTHOR
};

//person.role.push("admin"); not error, push is a special operation for tuples
//person.role[1] = 10; error

// person.role = [0, 'admin', 'user']; not valid!!

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //console.log(hobby.map()) Error!
}

if (person.role === Role.AUTHOR) {
  console.log("is author");
}
