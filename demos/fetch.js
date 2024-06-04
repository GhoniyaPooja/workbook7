"use strict";

function handleResponse(response) {
  // object or array = from string
  return response.json(); //JSON.parse(response.body)...the data
}

function handleData(data) {
  console.log(data);
}

function handleUser(user) {
  console.log(user.address.city);
}

function handleTodo(todo) {
  console.log(todo.title);
}

let user = fetch("http://jsonplaceholder.typicode.com/users/1");

// let promise = {
//   then: function handleResponse(response) {
//     // object or array = from string
//     return response.json(); //JSON.parse(response.body)...the data
//   },
//   message:
//     "I promise to call the then function when I finally get to the front of the line at Chipotle",
// };

// let promise1 = fetch("http://jsonplaceholder.typicode.com/users/1");
// promise1.then(handleResponse).then(handleUser);

fetch("http://jsonplaceholder.typicode.com/users/1")
  .then(handleResponse)
  .then(handleUser);

  fetch("http://jsonplaceholder.typicode.com/todos/1")
  .then(function (response) {
    return response.json();
  })
  .then(function (todo) {
    console.log(todo.title);
  });

fetch("http://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json()) //JSON.parse(response.body)...the data
  .then((data) => {
    console.log(data);
  });

//   let response = {}
//   handleRespose(response)