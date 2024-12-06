let number1 = 7;
let number2 = 4;
let product = number1 * number2;

console.log('value of product:', product);
console.log('type of product', typeof product);

let charge = 10;
let payment = 4.5;
let amountRemaining = charge - payment;

console.log('value of amount Remaining:', amountRemaining);
console.log('type of amount Remaining:', typeof amountRemaining);

let tests = 100;
let assignments = 80;
let final = 90;
let grade = (tests + assignments + final) / 3; // average grade

console.log('value of grade:', grade);
console.log('type of grade:', typeof grade);

let firstName = 'Ron';
let lastName = 'Burgundy';
let fullName = firstName + ' ' + lastName;

console.log('value of fullName:', fullName);
console.log('type of fullName:', typeof fullName);

let pH = 3;
//let isAcidic = (pH < 7); // its acidic because its less than 7 ph level or its true because 3 < 7
let isAcidic = pH > 7; // its not acidic because its less than 7 or its false because 3 is not greater tan 7

console.log('value of isAcidic:', isAcidic);
console.log('type of isAcidic:', typeof isAcidic);

let numberOfSoldiers = 300;
let isSparta = numberOfSoldiers !== 300; // false because its equal each other numberofsoldiers and 300

console.log('value of isSparta:', isSparta);
console.log('type of isSparta:', typeof isSparta);

let nickName = fullName;
//nickName = nickName + ' is the GOAT';
nickName += 'is the GOAT';

console.log('value of nickName:', nickName);
console.log('type of nickName:', typeof nickName);
