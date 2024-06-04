"use strict";

// user
fetch("http://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((user) => {
    console.log(user);
  });

//users
fetch("http://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    console.log(users);
  });

//photo
fetch("http://jsonplaceholder.typicode.com/photos/1")
  .then((response) => response.json())
  .then((photo) => {
    console.log(photo);
  });

//photos
fetch("http://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())
  .then((photos) => {
    console.log(photos);
  });