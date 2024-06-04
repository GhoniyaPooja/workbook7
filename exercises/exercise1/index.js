"use strict";


window.onload = function(){
    const fetchButton = document.getElementById("fetchButton");
    fetchButton.onclick = function () {
        const todoId = document.getElementById("todoId").value;
        fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
          .then((response) => response.json())
          .then((todo) => {
            const todoInfo = document.getElementById("todoInfo");
            todoInfo.innerHTML = `
            <p>UserID: ${todo.userId}</p> 
            <p>ID: ${todo.id}</p> 
            <p>Title: ${todo.title}</p> 
            <p>Completed: ${todo.completed}</p> 
            `;
          })
          
      }; 
};

    
  
