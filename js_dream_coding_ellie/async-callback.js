"use strict";

// JavaScript is synchronous.
// Execute the code block in order after hoisting.
// hoisting: var, function declaration 들이 자동적으로 제일 위에서 선언 되는것?!

// ansynchronous 비동기적
console.log("1");
// setTimeout 2번째 인자에 초를 입력 해주면 callback 함수가 입력된 초가 지난 후 실행된다.
setTimeout(function(){
    console.log("2");
}, 1000);
// 위와 아래는 같은 코드 아래의 코드가 arrowfunction
// 2번째 인자는 1000 이 1초 2000 2초 가 된다.
setTimeout(() => console.log("2-2"), 2000);
console.log("3");
// 위의 console 출력값은 // 1, 3, 2 가 된다.

// Synchronous callback
// hoisting e.g:
// 함수를 여기에서 선언해도 hoisting으로 인해 자동적으로 가장 위에서 실행이 먼저 된다.
function printImmediately(print){
    print();
}
printImmediately(()=>console.log("Hello kkojae!"));

// Asynchronous callback
// 이 함수 역시 hoising으로 인해 가장 위에서 선언이 먼저 된다.
// console에 2초 뒤 async callback을 출력해주는 함수.
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);


// callback what the hell
class UserStorage{
    // onSuccess, onError는 callback function
    loginUser(id, password, onSuccess, onError){
        // 실제 backend에서 정보를 가져올 수 없으니 setTimeout을 사용해서 2초뒤 실행 되게 설정.
        setTimeout(()=>{
            if (
                (id === "kkojae" && password === "1234") ||
                (id === "ellie" && password === "4567")
            ) {
                onSuccess(id);
            } else {
                onError(new Error("not found"));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if (user === "kkojae"){
                onSuccess({name:"kkojae", role:"admin"});
            } else {
                onError(new Error("no access"));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt("enter your name");
const password = prompt("enter your password");

// callback hell 육안으로 구별하기 어렵고 debuging 하기 쉽지 않습니다.
userStorage.loginUser(
    id,
    password,
    (user)=>{
        userStorage.getRoles(
            user,
            (userWithRole)=>{
                alert(
                    `hello ${userWithRole.name}, you have a ${userWithRole.role} roles`
                );
            },
            (error)=>{
                alert(error);
            }
        );
    },
    (error)=>{
        alert(error);
    }
);
