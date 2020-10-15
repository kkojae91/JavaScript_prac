"use strict";

class UserStorage{
    loginUser(id, password){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === "kkojae" && password === "1234") ||
                    (id === "ellie" && password === "4567")
                ) {
                    resolve(id);
                } else{
                    reject(new Error("Not Found"));
                }
            }, 2000);
        });
    }

    getRoles(user_id){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user_id === "kkojae"){
                    resolve({name:"kkojae", role:"admin"});
                } else{
                    reject(new Error("No Access"));
                }
            }, 1000);
        });
    }
}
// userStorage object 생성
const userStorage = new UserStorage();
// id와 password를 prompt를 통해 받아서 declaration
const id = prompt("enter your name");
const password = prompt("enter your password");

userStorage
    .loginUser(id, password)
    // loginUser가 성공적으로 실행된다면 return 값으로 아래의 then 실행.
    .then((user_id) => userStorage.getRoles(user_id))
    // getRoles가 성공적으로 실행된다면 return 값으로 아래의 then 실행.
    .then((user_id) => alert(`Hello ${user_id.name}, you have a ${user_id.role}`))
    // error가 발생해 reject가 실행된다면, 해당하는 error메세지를 경고창으로 띄워준다.
    .catch((error) => alert(error));