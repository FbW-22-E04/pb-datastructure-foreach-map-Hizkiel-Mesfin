//#1

const doubleValues = (arr) => arr.map((el) => el * 2);
console.log(doubleValues([5, 1, 2, 3, 10]));

//#2

const onlyEvenValues = (arr) => arr.filter((el) => el % 2 === 0);
console.log(onlyEvenValues([32, 2, 33, 4, 13, 78]));

//#3

const showFirstAndLast = (arr) => arr.map((el) => el[0] + el[el.length - 1]);
console.log(showFirstAndLast(["colt", "matt", "tim", "udemy"]));

//#4

const addKeyAndValues = (arr, key, value) => {
  return arr.map((el) => ({ ...el, key: value }));
};

console.log(
  addKeyAndValues(
    [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
    "title",
    "instructor"
  )
);

//#5

const vowelCount = (str) => {
  const obj = {};

  [...str.toLowerCase()].forEach((el) =>
    "aeiou".includes(el) ? (obj[el] = (obj[el] || 0) + 1) : obj
  );

  return obj;
};

console.log(vowelCount("this is what i am talking about"));
