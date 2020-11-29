'use strict';

// false: 0, -0, '', null, undefined, NaN
// true: -1, object

let num; // undefined
if (num) {
  console.log('true!!');
} else {
  console.log('false!!');
}

num && console.log(num);

let obj = {};
if (obj) {
  console.log(`true: ${obj}`);
}
// 위와 아래는 동일한 기능을 한다.
obj && console.log(obj);
