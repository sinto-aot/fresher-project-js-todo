let arr = [
  {
    name: "arun",
    age: 25,
  },
  {
    name: "amal",
    age: 23,
  },
  {
    name: "john",
    age: 30,
  },
];

// FIltered Age
let filteredAge = arr.filter((e) => {
  return e.age < 25;
});
console.log(filteredAge);

// Age + 2
let newAge = arr.map((e) => {
  return e.age + 2;
});
console.log(newAge);
