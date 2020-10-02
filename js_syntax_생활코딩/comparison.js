// 비교 연산자 == 불리언 값을 리턴해준다.
// alert(1 == 1);
// alert(1 == 2);

// console.log("one" == "one");
// console.log("one" == "two");

// var a = 2;
// console.log(a == 1);
// console.log(a == 2);

// strict equal operator
// alert(1 == "1");  // true (데이터 타입이 다르더라도 모양이 같으면 true)
// alert(1 === "1");  // false (데이터 타입이 다르기 때문에 false를 return)

// undefined and null
var a;
// alert(a);

a = null
// alert(a);

console.log(undefined == null);  // true
console.log(undefined === null); // false

// js에서는 숫자 1을 true로 간주한다.
// 숫자 1을 제외한 숫자는 false로 간주한다.
console.log(true == 1);
console.log(true == 2);
console.log(true == -1);

// 하지만 "==="를 사용하면 false를 반환한다. 정확히 같지 않기 때문.
console.log(true === 1);

console.log(0 === -0);   // true

// NaN
console.log(0/0); // NaN 계산할수 없음을 뜻함.
console.log(NaN === NaN); // false NaN과 NaN을 비교하면 비교할 수 없기 때문에 false를 return 해준다.

// 비교연산자 부등호.
console.log(1 !== 2);  //true
console.log(1 !== 1);  //false
console.log(1 != 1);    //false

console.log(1 !== true); //true
console.log(1 != true); //false
console.log(1 == true); //true

console.log(10 > 20); //false
console.log(10 > 1);  //true
console.log(10 > 10); //false

console.log(10 >= 20); //false
console.log(10 >= 1); //true
console.log(10 >= 10); //true