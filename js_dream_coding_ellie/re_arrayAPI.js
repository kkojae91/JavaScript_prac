"use strict";

// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join();
    // .join() --> array를 String 화 시켜주는 것.
    console.log(result); // apple,banana,orange
    const result2 = fruits.join("|"); // join("separator") 구분자와 함께 쓸 수 있고, 구분자를 기준으로 배열안에 요소들을 모두 문자열로 바꿔준다.
    console.log(result2); // apple|banana|orange
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    // split 문자열을 separator 기준으로 array화 시켜준다.
    const result = fruits.split(",");
    console.log(result); // ["🍎", '🥝', '🍌', '🍒']
    // split()의 두번째 인자로 limit을 설정 할 수 있다. 배열을 앞에서 몇개 까지만 return 받을지 설정 할 수 있다. optional이라서 설정해도 되고 안하게 되면 문자열 전체를 배열화 시켜준다.
    const result2 = fruits.split(",", 2);
    console.log(result2); // ["🍎", '🥝']
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result); // [5, 4, 3, 2, 1]
    // 원래 배열자체를 reverse() 해준다. 변수에 따로 할당 해주지 않아도 됨.
    console.log(array);  // [5, 4, 3, 2, 1]
}

// Q4. make new array without the first two elements
{
    // splice()는 배열 자체를 수정 하는 친구!
    const array = [1, 2, 3, 4, 5];
    // splice(0,2)  0번째 인덱스인 친구부터 2개를 없애줘. 삭제된 요소들을 return 값으로 받을 수 있다.
    const result = array.splice(0, 2);
    console.log(result);  // [1, 2]
    // 원래 배열에는 삭제 된 후 남아 있는 요소들이 담겨 있다.
    console.log(array);  // [3, 4, 5]

    // slice(startIndex,endIndex+1) 본래의 배열은 건드리지 않고 부분적인 요소를 가지고 올 수 있다.
    const array2 = [1, 2, 3, 4, 5];
    const result2 = array2.slice(2, 5);
    console.log(result2);  // [3, 4, 5]
    console.log(array2);  // [1, 2, 3, 4, 5]
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
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    // find(function(student, index){return student === 90})
    // find(콜백함수) 콜백함수와 같이 사용되고, 첫번째 인자는 어레이 각 요소의 value, 두번째 인자는 어레이 각 요소의 index 값을 보낼 수 있다.
    // 모든 요소에 한번씩 접근해서 맞는 true false를 사용해서 return 값으로 던져 주면 된다.
    const result = students.find(function (student, index) {
        console.log(student, index);
        return student.score === 90;
    });
    console.log(result);

    // short coding 필요한 인자인 value만 사용!
    const result2 = students.find((student) => student.score === 90);
    console.log(result2);
}

// Q6. make an array of enrolled students
{
    // 모든 요소를 찾아야 할 경우에는 find를 쓰면 안된다.
    // 가장 먼저 보이는 친구 하나를 찾으면 바로 함수를 종료 시켜버린다.
    const result = students.find((student) => student.enrolled == true);
    console.clear();
    console.log(result);  // Student {name: "A", age: 29, enrolled: true, score: 45}

    // filter(콜백함수(value, index) => {return 불리언})
    // 불리언에 해당하는 친구 모두 배열에 담아서 리턴해준다.
    const result2 = students.filter((student, index) => {
        // console.log(student, index);
        return student.enrolled === true;
    })
    console.log(result2);  // 배열 형태로 담긴다.

    const result3 = students.filter((student) => student.enrolled === true);
    console.log(result3);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    // map(callback function) 어떠한 값으로 맵핑한다. 원래 배열의 것을 *2 를 한다 이런 경우에 사용 가능
    // 스튜던트 배열에서 스코어만 가지고 배열로 만들어 준다.
    const result = students.map((student) => student.score);
    console.log(result);  // (5) [45, 80, 90, 66, 88]

    // 배열 안의 객체들의 특정한 값을 가지고 올때 도 사용한다!! 
    const result2 = students.map((student) => student.age);
    console.log(result2); // (5) [29, 28, 30, 40, 18]

}

// Q8. check if there is a student with the score lower than 50
{
    console.clear();
    // some(callback) 배열에서 하나라도 조건에 만족한다면 true를 return 아니다면 return false
    const result = students.some((student) => student.score < 50);
    console.log(result);  // true

    // every(callback) 배열안의 모든 요소가 조건에 만족한다면 true, 그렇지 않다면 return false
    const result2 = students.every((student) => student.score < 50);
    console.log(result2);  // false
}

// Q9. compute students' average score
{
    // reduce((prev,curr) => {return curr}, initialValue);
    // 누적된 계산이 필요할 때 사용하는 callback function
    const result = students.reduce((prev, curr) => {
        console.log("=========");
        console.log(prev);
        console.log(curr);
        // return curr을 해주면 curr이 다음으로 호출 될때 prev에서 호출 된다.
        // 누적합을 구할때 initial value와 함게 사용 하면 좋다. 무언가 누적된 계산을 해야할때.
        return prev + curr.score;
    }, 0); // 0은 initial value
    console.log(result / students.length);

    const result2 = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result2/ students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    // 학생들 점수를 문자열로 만들기.
    const result = students.map((student) => student.score).join();
    console.log(result);

    // 연결해서 사용하기. 점수가 50점 이상인 친구들의 점수를 문자열로 만들기.
    const result2 = students
        .map((student)=>student.score)
        .filter((score)=>score>=50)
        .join();

    console.log(result2);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    // 학생들의 점수를 오름차순 정렬을 통해 문자열로 만들어줘
    const result = students
        .map((student)=>student.score)
        .sort((a,b) => a-b)
        .join()
    console.log(result);

    // 학생들의 점수를 내림차순 정렬을 통해 문자열로 만들어줘
    const result2 = students
        .map((student)=>student.score)
        .sort((a,b)=>b-a)
        .join()
    console.log(result2);
}
