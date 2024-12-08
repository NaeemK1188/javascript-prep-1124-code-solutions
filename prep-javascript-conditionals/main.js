function isAdult(age) {
  if (age >= 18) {
    return true;
  }

  if (age < 18) {
    // or else
    return false;
  }
}

function didStudentPass(score) {
  if (score >= 70) {
    return true;
  }
  if (score < 70) {
    // or else
    return false;
  }
}

function gradeCalculator(score) {
  if (score < 60) {
    return 'F';
  } else if (score < 70) {
    return 'D';
  } else if (score < 80) {
    return 'C';
  } else if (score < 90) {
    return 'B';
  } else if (score < 100) {
    return 'A';
  } else if (score > 100) {
    return 'A++';
  }
}

function seasonMessenger(season) {
  if (season === 'summer') {
    return 'its hot today';
  } else if (season === 'spring') {
    return 'the flower are blooming';
  } else if (season === 'autumn') {
    return 'the leaves are changing colors';
  } else if (season === 'winter') {
    return 'its cold today';
  } else {
    return 'please enter a valid season';
    //season = prompt("enter season:") prompt user input
    //console.log(seasonMessenger(season)); prompt user input
  }
}

function dayDetecter(dayOfTheWeek) {
  if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday') {
    // its true if its either sat or sun
    return 'have a good weekend';
  } // block below is executed of the value of the dayoftheweek is any other value
  else {
    return 'its a weekday';
  }
}

let isAdultResult = isAdult(19);
console.log(isAdultResult);

let didStudentPassResult = didStudentPass(71);
console.log(didStudentPassResult);

let gradeCalculatorResult = gradeCalculator(101);
console.log(gradeCalculatorResult);

let seasonMessengerResult = seasonMessenger('spring');
console.log(seasonMessengerResult);

let dayDetecterResult = dayDetecter('monday');
console.log(dayDetecterResult);
