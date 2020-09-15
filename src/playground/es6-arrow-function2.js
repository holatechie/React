//arguments object - no longer bond with arrow functions

const add = (num1, num2) => {
  // console.log(arguments);
  return num1 + num2;
};
console.log(add(1, 3));

//this keyword - no longer bound

const user = {
  name: "Yesha",
  cities: ["Vapi", "Ahmedabad", "Mundra"],
  printPlace() {
    this.cities.forEach((city) => console.log(`${this.name} visited ${city}`));
    this.cities.map((city) => console.log(`this is using mapping ${city}`));
    const cityMsg = this.cities.map((city, index) => {
      console.log("citymsg Map:", city);
      return `${city} ${index}`;
    });
    console.log(
      "array of cities after map It will show return value of cityMsg",
      cityMsg
    );
    return cityMsg;
  },
};

user.printPlace();
console.log(user.printPlace);

const fruit = {
  name: "Apple",
  places: ["kashmir", "punjab", "gujarat"],
  getPlace() {
    return this.places.map((place) => `${this.name} is from ${place}`);
  },
};

console.log(fruit.getPlace());

//challenge

const multiplier = {
  numbers: [1, 2, 3, 4],
  multiplyBy: 12,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  },
};
console.log(multiplier.multiply());
