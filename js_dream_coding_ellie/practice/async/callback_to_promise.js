"use strict";

class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      if ((id === "kkojae" && password === "dream") || (id === "coder" && password === "academy")) {
        resolve(id);
      } else {
        reject(new Error("not found"));
      }
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      if (user === "kkojae") {
        resolve({ name: "kkojae", role: "admin" });
      } else {
        reject(new Error("no access"));
      }
    });
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your passowrd");
userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then((user) => alert(`hello ${user.name}, you have a ${user.role}`))
  .catch(console.log);
