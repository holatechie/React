const squareArea = function (side) {
  return side * side;
};
console.log("Square ", squareArea(3));

const squareArrow = (x) => x * x;
console.log(squareArrow(3));

const circleArea = (radius) => {
  return 3.14 * radius * radius;
};
console.log("Circle of Area", circleArea(3));

//get firstName

const fullName = "Yesha Patel";
const Name = fullName.split(" ");
console.log(Name);

const getFirstName = (name) => {
  return name[0];
};

const getLastName = (name) => name.split(" ")[0];

console.log(getFirstName(Name));
console.log(getLastName(fullName));
