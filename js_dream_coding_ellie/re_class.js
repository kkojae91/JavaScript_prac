"use strict";
// Object-oriented programming
// class : template
// object : instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1.Class declarations
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }
    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

// object 생성
const kkojae = new Person("kkojae", 30);
console.log(kkojae.name);  // kkojae
console.log(kkojae.age);   // 30
kkojae.speak();            // kkojae: hello!


// 2.Getter and setters
class User {
    // constructor
    constructor(firstName, lastName, age) {
        // fields
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // get이라는 keywords로 값을 리턴하고
    // constructor와는 변수명을 조금 다르게 설정해주어야하고 보편적으로 _변수명 이라고 표현한다.
    get age() {
        return this._age;
    }
    // set이라는 keywords로 값을 설정한다.
    set age(value) {
        // 아래와 같이 나이값이 음의 정수이면 에러 메세지를 띄워줄수도 있고,
        // if (value < 0){
        //     throw Error("age can not be negative");
        // }
        // 음의 정수의 나이 값이 입력되면 자동으로 0으로 저장 되게끔 유연하게 넘어가게 할 수 있다.
        this._age = (value < 0) ? 0 : value;
    }
}

// object 생성
// 사용자가 나이를 바보같이 -1로 설정한것을 유연하게 대처하기 위해 getter와 setter를 사용한다.
const user1 = new User("Steve", "Job", -1);
console.log(user1.age);  // getter와 setter를 이용해서 -1 --> 0으로 만들어 준다.

// 3.Fields (public, private)
// Too soon!
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/Class_fields
class Experiment {
    publicField = 2;
    // 변수 앞에 # 을 붙여 privateField를 생성할 수 있다.
    // 클래스 내부에서는 변수를 사용할 수 있지만, 클래스 외부에서는 변수를 불러 올 수 없습니다.
    #privateField = 0;
}

// object 생성
const experiment = new Experiment();
console.log(experiment.publicField);  // 2
console.log(experiment.privateField); // undefiend --> 밖에서는 접근 할 수 없다.


// 4. Static properties and methods
// Too soon!
class Article {
    static publisher = "Dream Coding";
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

// object생성
const article1 = new Article(1);
const article2 = new Article(2);
// 변수 앞에 static 을 사용하면 객체에서 접근 불가능.
console.log(article1.publisher); // undefiend
console.log(article2.publisher); // undefiend
// article1.printPublisher();

// 클래스 자체로 접근 할 수 있다.
// 함수 역시 객체로는 접근 할 수 없고, 클래스 자체로 접근 할 수 있다.
console.log(Article.publisher); // Dream Coding
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

// rectangle은 shape함수를 확장해서 가지고 온다 즉 상속받는다
// extends 뒤에 상속받을 class를 적어주면 됩니다.
class Rectangle extends Shape { }
class Triangle extends Shape {
    draw(){
        // overriding된 것과 원래 상속 받았던 것을 둘다 출력하고 싶을땐 super. 메서드를 사용해준다.
        super.draw();
        // overriding
        console.log("🥇");
    }
    // 상속을 받고 상속받은 부분중에서 변경해야 할 부분적인 요소만 변경하면 overriding 되서 변경 된 값이 출력된다.
    getArea(){
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20,20, "red");
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
// 왼쪽 instanceof 오른쪽 왼쪽친구가 오른쪽친구의 인스턴스가 맞는지 확인하는 것.
console.log(rectangle instanceof Rectangle); // ture
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle);  // true
console.log(triangle instanceof Shape);     // true
console.log(triangle instanceof Object);    // true


// 간단한 계산기 switch case 문!
function calculate(command, a, b){
    switch (command){
        case "add":
            return a + b;
        case "substract":
            return a - b;
        case "divide":
            return a / b;
        case "multiply":
            return a * b;
        case "remainder":
            return a % b;
        default:
            throw Error("unkonwn command");
    }
}
console.log(calculate("add", 2, 3));
