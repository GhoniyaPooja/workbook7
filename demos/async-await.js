"use strict";

//users
fetch("http://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    console.log(users);
  });

//async  - notation that the function is going to: use await inside of it (i.e. call a function that returns a promise)
//await
async function loadUsers() {
  let response = await fetch("http://jsonplaceholder.typicode.com/users");
  let users = await response.json();
  console.log(users);
}

loadUsers();