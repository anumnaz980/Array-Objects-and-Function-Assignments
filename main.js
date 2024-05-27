"use strict";
// // Object , Array and function
Object.defineProperty(exports, "__esModule", { value: true });
// // Assignment 1: Building Your Friend List
// // Learning Objective: Practice working with objects and arrays in TypeScript to create a data
// // structure.
// // Task: Create a program that manages a simple friend list.
// // 1. Define an object named people containing an empty array called friends.
// // 2. Create three separate objects, each representing a friend, with properties like firstName,
// // lastName, and optionally id.
// // 3. Add these friend objects to the friends array within the people object.
// // 4. Output the entire people object to the console, displaying your information and your
// // friend list.
let people = {
    friends: [],
};
let friend1 = {
    firstName: "Anum Naz",
    lastName: "Saleem",
    id: "1234"
};
let friend2 = {
    firstName: "Rifat",
    lastName: "Abdul Aziz",
    id: "rifatanjum@gmail.com"
};
let friend3 = {
    firstName: "Fatima",
    lastName: "Ali",
};
people.friends.push(friend1, friend2, friend3);
console.log(people);
// // Assignment 2:Manipulating an Array: Rearranging Words
// // Objective:
// // Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
// // Steps:
// // 1. Scrambled Array:
// // o Start with an array of elements in a scrambled order, like:
// // const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
// // • Modify the Array:
// // • Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
// // o Convert non-strings (booleans, numbers) to strings if needed.
// // o Split elements into character arrays (optional).
// // o Rearrange characters or elements in the desired order (modify original array or
// // create temporary arrays).
// // • Output the Result:
// // • Use join() to combine elements back into a single string: "I am a student of GIAIC".
// const scrambledArray:(string | number | boolean)[] = ["student","of",true,123,"am","a","GIAIC","I"];
// scrambledArray.splice(2,2);
// scrambledArray.pop();
// scrambledArray.unshift("I")
// scrambledArray.splice(3,2)
// scrambledArray.splice(1,0,"am","a")
// // console.log(scrambledArray.join(" "));
// // Assignment 3: Company Product Catalog
// // Learning Objective: Implement data structures in TypeScript to represent and manage product
// // information.
// // Task: Create a program to represent a product catalog using an array and perform basic queries.
// // 1. Define an array named inventory to store product information.
// // 2. Create three separate objects, each representing a product, with properties like name,
// // model, cost, and quantity.
// // 3. Add these product objects to the inventory array using an appropriate array method.
// // 4. Access and log the quantity property of a specific product (e.g., third product) in the
// // inventory array.
// // 5. Explore adding and accessing more elements within the inventory array to understand
// // how to manage product data.
let inventory = [];
let product1 = {
    name: "Sumsung",
    model: "Galaxy note15",
    cost: 179999,
    quantity: 1
};
let product2 = {
    name: "Realme",
    model: "note 50",
    cost: 25000,
    quantity: 1
};
let product3 = {
    name: "Apple",
    model: "iphone 15",
    cost: 250000,
    quantity: 1
};
inventory.push(product1, product2, product3);
console.log(`The quantity property of the third product is ${inventory[2].quantity}`);
let product4 = {
    name: "Infinix",
    model: "note 30",
    cost: 49000,
    quantity: 1
};
inventory.push(product4);
console.log(`The name of first product is ${inventory[0].name}.`);
console.log(`The model of second product is ${inventory[1].model}.`);
console.log(`The cost of forth product is ${inventory[3].cost}.`);
let students = [
    {
        name: "Anum",
        isSenior: true,
        completedAssignments: true,
    },
    {
        name: "Rifat",
        isSenior: false,
        completedAssignments: false,
    },
    {
        name: "Sitara",
        isSenior: true,
        completedAssignments: true,
    },
    {
        name: "Faima",
        isSenior: false,
        completedAssignments: false,
    },
];
function senoirStudWithAssignment(students) {
    let result = [];
    for (let student of students) {
        if (student.isSenior && student.completedAssignments) {
            result.push(student);
        }
    }
    return result;
}
const seniorWithAssignment = senoirStudWithAssignment(students);
console.log(seniorWithAssignment);
function removeStudentsWithNoAssignments(students) {
    let result = [];
    for (let student of students) {
        if (!student.isSenior || student.completedAssignments == false) {
            result.push(student);
        }
    }
    return result;
}
const updatedClassList = removeStudentsWithNoAssignments(students);
console.log(updatedClassList);
// // Define an object named people containing an empty array called friends
// let people: { friends: Friends[] } = {
//     friends: [],
// };
// // Define the Friends interface
// interface Friends {
//     firstName: string;
//     lastName: string;
//     id?: string | number;
// }
// // Create three separate objects representing friends
// let friend1: Friends = {
//     firstName: "Anum Naz",
//     lastName: "Saleem",
//     id: "1234"
// };
// let friend2: Friends = {
//     firstName: "Rifat",
//     lastName: "Abdul Aziz",
//     id: "rifatanjum@gmail.com"
// };
// let friend3: Friends = {
//     firstName: "Fatima",
//     lastName: "Ali"
// };
// // Add the friend objects to the friends array within the people object
// people.friends.push(friend1, friend2, friend3);
// // Output the entire people object to the console
// console.log(people);
