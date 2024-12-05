const Person = {
  firstName: 'Steve',
  lastName: 'Martin',
  hobby: 'Banjo Playing',
};

let fullName = Person.firstName + ' ' + Person.lastName;
console.log(Person);
console.log("the person's name is:", fullName);

Person.job = 'jerk';
console.log("the person's current job is:", Person.job);

Person.previousJob = 'amigo';
console.log("the person's current job is:", Person.previousJob);

console.log(Person);
