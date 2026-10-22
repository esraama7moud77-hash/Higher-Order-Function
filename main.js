//  Solve This Problems with Higher Order Functions (HOF)

// 1- calculate and print the sum

// const numbers = [10, 20, 30, 40, 50];

// Output: 150


// const nums = [10, 20, 30, 40, 50];

// const newNums = nums.reduce((nums, nextNum) => nums + nextNum, 0);

// console.log(newNums);


// -------------------------------

// 2- Create a new array where every number is doubled.

// const numbers = [1, 2, 3, 4, 5];

// Output: [2, 4, 6, 8, 10]


// const nums = [1, 2, 3, 4, 5];
// const newNums = nums.map((num) => num *2)

// console.log(newNums);


// -------------------------------

// 3- Create a new array containing only the names.

// const users = [
//   { id: 1, name: "Ahmed", age: 22 },
//   { id: 2, name: "Mona", age: 25 },
//   { id: 3, name: "Ali", age: 20 }
// ];

// Output: ["Ahmed", "Mona", "Ali"]


// const users = [
//   { id: 1, name: "Ahmed", age: 22 },
//   { id: 2, name: "Mona", age: 25 },
//   { id: 3, name: "Ali", age: 20 }
// ];
// const newNums = users.map((user) => user.name);

// console.log(newNums);


// -------------------------------

// 4- Create a new array containing only even numbers.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Output: [2, 4, 6, 8]


// const nums = [2, 4, 6, 8];
// const newNums = nums.filter((num) => num % 2 === 0);

// console.log(newNums);


// -------------------------------

// 5- Return users whose age is 18 or greater.

// const users = [
//   { name: "Ahmed", age: 17 },
//   { name: "Mona", age: 22 },
//   { name: "Ali", age: 15 },
//   { name: "Sara", age: 30 }
// ];

// Output: [
//   { name: "Mona", age: 22 },
//   { name: "Sara", age: 30 }
// ]


// const users = [
//   { name: "Ahmed", age: 17 },
//   { name: "Mona", age: 22 },
//   { name: "Ali", age: 15 },
//   { name: "Sara", age: 30 }
// ];
// const newNums = users.filter((user) => user.age >= 18);

// console.log(newNums); 

// -------------------------------

// 6- Find the product with the name "Phone".

// const products = [
//   { id: 1, name: "Laptop", price: 30000 },
//   { id: 2, name: "Phone", price: 15000 },
//   { id: 3, name: "Tablet", price: 10000 }
// ];
 

// Output: { id: 2, name: "Phone", price: 15000 }



// const products = [
//   { id: 1, name: "Laptop", price: 30000 },
//   { id: 2, name: "Phone", price: 15000 },
//   { id: 3, name: "Tablet", price: 10000 }
// ];
// const newNums = products.find((product) => product.name === "Phone");

// console.log(newNums); 

// -------------------------------

// 7- Check that all products has stock.

// const products = [
//   { name: "Laptop", stock: 0 },
//   { name: "Phone", stock: 0 },
//   { name: "Tablet", stock: 5 }
// ];


// Output: true


// const products = [
//   { name: "Laptop", stock: 0 },
//   { name: "Phone", stock: 0 },
//   { name: "Tablet", stock: 5 }
// ];
// const newNums = products.some((product) => product.stock > 0);

// console.log(newNums);

// -------------------------------

// 8- Calculate the cart total price.

// const cart = [
//   { name: "Laptop", price: 30000 },
//   { name: "Phone", price: 15000 },
//   { name: "Tablet", price: 10000 }
// ];


// Output: 55000


// const cart = [
//   { name: "Laptop", price: 30000 },
//   { name: "Phone", price: 15000 },
//   { name: "Tablet", price: 10000 }
// ];

// const newNums = cart.reduce((total, item) => total + item.price, 0);

// console.log(newNums); 


// -------------------------------