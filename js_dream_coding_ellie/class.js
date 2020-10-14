"use strict";
// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age){
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak(){
        console.log(`${this.name}: hello!`);
    }
}

// 새로운 Person 객체를 생성할때는 
// new Person(); 이러한 형식을 사용해주어야 한다.
const kkojae = new Person("kkojae",30);
console.log(kkojae.name);
console.log(kkojae.age);
kkojae.speak();
// 아래와 같이 method를 실행하면 2번 실행이 되기 때문에 undefined도 함께 출력된다.
// console.log(kkojae.speak());

// 2. Getter and setters
class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }
    
    set age(value){
        // if (value < 0){
        //     throw Error("age can not be negative");
        // }
        // 위와 같이 error문구를 띄워 줄수 있고, 
        // 아래와 같이 음수의 값을 입력했을땐, 값을 0으로 변경 시켜 줄 수 있다.
        this._age = value < 0 ? 0 : value;
    }
}

// 나이를 음수로 설정할 수 없으니 조건을 걸어줘야하는데 class 객체에서 조건은
// get 과 set을 이용해서 설정할 수 있습니다.
// get과 set에서 사용하는 변수이름 age는 위의 constructor와 다르게 _age 로 설정해서 사용해주어야 합니다.
const user1 = new User("Steve", "job", -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
// 아직 사용가능 한 곳이 많지 않다... 이런게 있구나~
class Experiment{
    publicField = 2;
    // 앞에 #(hash)를 붙이면 private 한 변수가 된다.
    // class내부에서 호출하고 값을 변경할 수 있고 외부에서는 사용 불가.
    #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined

// 4. Static properties and methods
// Too soon!!
class Article{
    static publisher = "Dream Coding!";
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.articleNumber); // 1
console.log(article1.publisher); // undefined

// static으로 선언하면 인스턴스로 접근 할 수 없고,
// class자체로 접근을 해야한다.
// type script에서도 자주 사용하게 된다. 지금은 이런게 있구나~~~ 
console.log(Article.publisher); // Dream Coding
Article.printPublisher(); // Dream Coding
// article1.printPublisher(); // uncaught Type Error 발생

// 5. Inheritance
// a way for one class to extend another class.
class Shape{
    // constructor
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    // methods
    draw(){
        console.log(`drawing ${this.color} color of`);
    }

    getArea(){
        return this.width * this.height
    }
}

// inheritance하기 위해선 아래와 같이 코드를 작성하면 됩니다.
// class 클래스명 extends 상속받을 클래스명{}
class Rectangle extends Shape{}
class Triangle extends Shape{
    // over rising?!
    draw(){
        // 부모클래스의 draw도 호출해주고 오버라이징 된 draw도 호출해준다.
        super.draw();
        console.log('^');
    }
    // 삼각형의 넓이는 (높이*너비)/2 오버라이징을 통해 제정의 해준다.
    getArea(){
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20,20,"blue");
console.log(rectangle.getArea()); // 400
rectangle.draw(); // Shape 클래스를 상속 받아 drawing blue color of 라고 출력된다.

const triangle = new Triangle(20,20,"red");
console.log(triangle.getArea()); // 200
triangle.draw();

// 6. Class checking: instanceOf
// return true or false
// 왼쪽의 것이 오른쪽의 인스턴스가 맞는지 체크하는 것!
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true