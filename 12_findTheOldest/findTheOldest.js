const findTheOldest = function (people) {
  let prevValue = 0;
  let result = "Ab";
  let newArray = [];
  people.forEach((person) => {
    if (person.yearOfDeath === null) {
      person.yearOfDeath = new Date();
    }
    person.age = person.yearOfDeath - person.yearOfBirth;
    newArray.push(person);
  });
  for (const person of newArray) {
    if (person.age > prevValue) {
      prevValue = person.age;
      result = person;
    } else {
      continue;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = findTheOldest;
