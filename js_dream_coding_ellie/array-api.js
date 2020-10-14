// // array 순회 하기 연습
// console.group("array 순회하기 연습");
// fruits1.forEach((fruit, index) => console.log(fruit,index));
// for (let i = 0; i < fruits1.length; i++){
//     console.log(fruits1[i]);
// }
// for (let fruit of fruits1){
//     console.log(fruit);
// }
// console.groupEnd();

// Q1. make a string out of an array
const fruits1 = ['apple', 'banana', 'orange'];
console.log("Q1. make a string out of an array");
console.log(fruits1);
console.log(fruits1.toString());
// 위의 toString과 join 을 통해 배열을 문자열로 변환 시킬 수 있다.
// join()은 ()사이에 ',' '|' 등을 통해 구분자를 넣으면 그 구분자에 맞게 리턴된다.
console.log(fruits1.join(','));


// Q2. make an array out of a string
console.log("Q2. make an array out of a string");
let fruits2 = '🍎, 🥝, 🍌, 🍒';
let result2 = fruits2.split(",",2);
console.log(result2);
fruits2 = fruits2.split(",");
// console.log(fruits2.split(","));
// split은 separator를 꼭 넣어 주어야 한다. 
// 2번째 인자는 limit인데, limit값을 2로 주면 앞에서 두번째까지만, 배열에 담기게 된다.
console.log(fruits2);

// Q3. make this array look like this: [5, 4, 3, 2, 1]
console.log("Q3. make this array look like this: [5,4,3,2,1]");
let array1 = [1, 2, 3, 4, 5];
let result3 = array1.reverse();
// reverse()를 하게 되면 원래 배열 역시 reverse 되는 것을 주의 해야한다.
console.log(result3);
console.log(array1);

// Q4. make new array without the first two elements
console.log("Q4. make new array without the first two elements");
const array = [1, 2, 3, 4, 5];
// slice()
let newArray = array.slice(2,5);
console.log(newArray);


class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
console.log("Q5. find a student with the score 90");
function findScore90(){
    students.forEach((student) => {
        if (student.score === 90){
            console.log(student);
        }
    })
}
findScore90();
// find함수를 사용하면 훨씬 더 편하게 검색할 수 있다.
// 파라미터가 여러개 있다. 확인해봐야함.
// true 값을 찾으면 그 즉시 true인 객체를 return 해주고 반복하지 않는다.
let result4 = students.find((student) => student.score === 90);
console.log(result4);

// Q6. make an array of enrolled students
console.log("Q6. make an array of enrolled students");
function makeArray1(){
    let enrolled_students = [];
    students.forEach((student) => {
        if (student.enrolled === true){
            enrolled_students.push(student);
        }
    })
    return enrolled_students;
}
console.log(makeArray1());
// 아래와 같이 filter()를 사용해서 원하는 것들을 간단하게 받아 올 수 있다.
let result6 = students.filter((student) => student.enrolled);
console.log(result6);


// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
console.log("Q7. make an array containing only the students scores");
function makeScoreArray(){
    let scoreArray = [];
    students.forEach((student) => {
        scoreArray.push(student.score);
    })
    return scoreArray;
}
console.log(makeScoreArray());
// 아래와 같이 map()함수를 사용할 수 있다.
let result7 = students.map((student) => student.score);
console.log(result7);
// student.score을 double score로 만들어 줄 수 있다.
let result7_1 = students.map((student) => student.score * 2);
console.log(result7_1);

// Q8. check if there is a student with the score lower than 50
console.log("Q.8 check if there is a student with the score lower than 50");
// some
// 배열중 하나라도 true인게 있다면 return true; 하나도 없다면 return false;
let result8_1 = students.some((student) => student.score < 50);
console.log(result8_1); // true

// every
// 배열 모두 true이여야 return true, 그렇지 않다면 return false
let result8_2 = students.every((student) => student.score < 50);
console.log(result8_2); // false

// Q9. compute students' average score
console.log("Q9. compute students average score");
function getSumScore(){
    let sumScore = 0;
    students.forEach((student) => {
        sumScore += student.score;
    })
    // console.log(sumScore);
    return sumScore;
}

let sum_score = getSumScore();

function getAverage(){
    return sum_score / students.length;
}

console.log(getAverage());

// 아래와 같이 reduce()함수를 사용할 수 있습니다.
// 누적합을 구할 때 reduce함수를 많이 사용합니다.
let result9 = students.reduce((previous, current) => {
    // console.log("-----------");
    // console.log(previous);
    // console.log(current);
    return previous+current.score;
}, 0)
// 위의 코드를 아래와 같이 간략하게 줄여 사용 할 수 있습니다.
let result9_1 = students.reduce((previous, current) => previous+current.score, 0);
let result_average = result9_1 / students.length;
console.log(result_average);

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
console.log("Q10. make a string containing all the scores");
function makeArray(){
    let getArray = []
    students.forEach((student) => {
        getArray.push(student.score);
    })
    // console.log(getArray);
    return getArray;
}
let stringScore = makeArray().toString();
console.log(stringScore);

// 위의 코드를 아래와 같이 사용할 수 있습니다.
// 추가적으로 점수가 50 점 이상인 친구들만 string으로 변환하기 위해서는 filter도 추가 해주면 됩니다.
let result10 = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join(",");

console.log(result10);


// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
console.log("Bonus! do Q10. sorted in ascending order");
let arrayScore = makeArray();
// console.log(arrayScore);
let sortedString = arrayScore.sort((a,b)=>a-b).toString();
console.log(sortedString);

// 확실히 눈에 보기 쉽고 코드 짜기도 쉽다 api 짱
let bouns = students
    .map((student) => student.score)
    .sort((a,b) => a-b)
    .filter((score) => score >= 50)
    .join();

console.log(bouns);