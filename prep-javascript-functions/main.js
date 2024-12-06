function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

function convertHoursToMinutes(hours) {
  const minutes = hours * 60;
  return minutes;
}

function getGreeting(name) {
  const resultGreeting = 'Hello ' + name;
  return resultGreeting;
}

function addAndMultiplyByFive(num1, num2) {
  const result = (num1 + num2) * 5;
  return result;
}

function multiplyAndDivideByFive(num1, num2) {
  const result = (num1 * num2) / 5;
  return result;
}

function subtractTwoNumbers(num1, num2) {
  const result = num1 - num2;
  return result;
}

function getCircleCircumference(radius) {
  result = 2 * Math.PI * radius;
  return result;
}

function getFullName(firstName, lastName) {
  const result = firstName + ' ' + lastName;
  return result;
}

function cube(num) {
  const result = num ** 3;
  return result;
}

const sum = addTwoNumbers(2, 2);
const minutes = convertHoursToMinutes(2);
const greeting = getGreeting('World');
const sumTimesFive = addAndMultiplyByFive(10, 5);
const productDivideByFive = multiplyAndDivideByFive(35, 10);
const difference = subtractTwoNumbers(22, 7);
const circumference = getCircleCircumference(5);
const fullName = getFullName('Juan', 'Ramirez');
const cubed = cube(5);
console.log('Add two numbers exercise:', sum);
console.log('Convert hours to minutes exercise:', minutes);
console.log('Get greeting exercise:', greeting);
console.log('add And Multiply By Five exercise:', sumTimesFive);
console.log('multiply And Divide By Five exercise:', productDivideByFive);
console.log('Subtract two numbers exercise:', difference);
console.log('Get Circle Circumference exercise:', circumference);
console.log('Get full name exercise:', fullName);
console.log('get cube exercise:', cubed);
