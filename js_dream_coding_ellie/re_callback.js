"use strict";

// JavaScript is synchronous(동기적).
// Execute the code block by order after hoisting.
// hoisting: var. function declaration 함수 변수 선언이 자동적으로 제일 위로 올라가는 것.

console.log("1");
setTimeout(() => {
    console.log("2");
}, 1000);

setTimeout(() => console.log("3"), 1500);
console.log("4");

// Synchronous callback 동기적 콜백
function printImmediately(print) {
    print();
};

printImmediately(() => console.log("hello"));


// Asynchronous callback 비동기적 콜백 (언제 실행 될지 모르는..)
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
};

printWithDelay(() => console.log("async callback"), 2000);
console.clear();

// Callback what the Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === "kkojae" && password === "dream") ||
                (id === "coder" && password === "academy")
            ) {
                onSuccess(id);
            } else {
                onError(new Error("not found"));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === "kkojae") {
                onSuccess({ name: "kkojae", role: "admin" });
            } else {
                onError(new Error("no access"));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
    id,
    password,
    (user) => {
        userStorage.getRoles(
            user,
            (userWithRole) => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            (error) => {
                console.log(error);
            }
        )
    },
    (error) => {
        console.log(error);
    }
);
