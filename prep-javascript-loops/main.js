// create your loops here.

function whileLoop1() {
  const newArr = [];
  let index = 0;

  while (index <= 9) {
    newArr.push(index);
    index++;
  }

  return newArr;
}

function whileLoop2() {
  const newArr = [];
  let index = 0;

  while (index < 20) {
    // it stops at 18 because +=2 makes it = 20 which breaks the loop
    // < 10 makes it runs 5 times
    newArr.push(index);
    index += 2;
  }

  return newArr;
}

function forLoop1() {
  const newArr = [];
  for (let i = 0; i < 10; i++) {
    newArr.push(i);
  }

  return newArr;
}

function forLoop2() {
  for (let i = 100; i >= 0; i--) {
    console.log('time Till Explosion', i);
  }
}

const person = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(object) {
  const newArr = [];
  for (const key in object) {
    newArr.push(key);
  }

  return newArr;
}

function forInLoop2(object) {
  const newArr = [];

  for (const key in object) {
    newArr.push(object[key]);
  }

  return newArr;
}
//const arr = whileLoop1();

whileLoop1Result = whileLoop1();
console.log(whileLoop1Result); // or use arr
whileLoop2Result = whileLoop2();
console.log(whileLoop2Result);
forLoop1Result = forLoop1();
console.log(forLoop1Result);
forLoop2();
forInLoop1Result = forInLoop1(person);
console.log(forInLoop1Result);
forInLoop2Result = forInLoop2(person);
console.log(forInLoop2Result);
