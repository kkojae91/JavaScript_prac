"use strict";
// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join(); // apple,banana,orange
  console.log(result);
  console.log(typeof result);
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const result = fruits.split(",");
  const result2 = fruits.split(",", 2);
  console.log(result); // ["🍎", " 🥝", " 🍌", " 🍒"]
  console.log(result2); // ["🍎", " 🥝"]
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result); // [5, 4, 3, 2, 1]
  console.log(array); // [5, 4, 3, 2, 1]
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.splice(2, 3);
  console.log(result); // [3, 4, 5]
  console.log(array); // [1, 2]

  const array2 = [1, 2, 3, 4, 5];
  const result2 = array2.slice(2, 5);
  console.log(result2); // [3, 4, 5]
  console.log(array2); // [1, 2, 3, 4, 5]
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find((student) => student.score === 90);
  console.log(result); // Student {name: "C", age: 30, enrolled: true, score: 90}
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);

  for (let student of result) {
    console.log(student);
  }
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result); // [45, 80, 90, 66, 88]
}

// Q8. check if there is a student with the score lower than 50
{
  // 어떤 학생이든 점수가 50점 보다 낮다면 true 아니면 false
  const result = students.some((student) => student.score < 50);
  console.log(result); // true

  // 모든 학생들의 점수가 50점보다 낮다면 true 아니면 false
  const result2 = students.every((student) => student.score < 50);
  console.log(result2); // false
}

// Q9. compute students' average score
{
  console.clear();
  const result = students.reduce((prev, curr) => {
    console.log("----------------");
    console.log(prev);
    console.log(curr);
    return prev + curr.score;
  }, 0);

  // 위의 코드를 아래와 같이 나타낼 수 있습니다.
  const result2 = students.reduce((prev, curr) => prev + curr.score, 0);

  console.log("================");
  console.log(result / students.length);
  console.log(result2 / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map((student) => student.score).join(", ");
  console.log(result);

  // make a string containing >=50 the scores
  // result2 should be: '80, 90, 66, 88'
  const result2 = students
    .map((student) => student.score) // [45, 80, 90, 66, 88]
    .filter((score) => score >= 50) // [80, 90, 66, 88]
    .join(", ");
  console.log(result2);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join(", ");

  console.log(result);

  // do sorted in descending order
  // result2 should be: '90, 88, 80, 66, 45'
  const result2 = students
    .map((student) => student.score)
    .sort((a, b) => b - a)
    .join(", ");
  console.log(result2);
}
