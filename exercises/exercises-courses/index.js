"use strict";

const coursesTable = document.getElementById("coursesTable");
const tbody = coursesTable.querySelector("tbody");

window.onload = function () {
    fetch("http://localhost:8081/api/courses")
        .then((response) => response.json())
        .then((data) => {
            for (const course of data) {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${course.dept}</td> <td>${course.courseNum}</td> <td>${course.courseName}</td> <td> <a href="details.html?courseid=${course.id}"> Show details </a> </td>`;
                tbody.appendChild(row);
            }
        })
        
};
