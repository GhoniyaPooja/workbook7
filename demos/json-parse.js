"use strict";

let jobAsString = `{"title" : "Web Designer",
"startDate" : "October 2022",
"company" : "AT&T",
"minSalary" : 52000,
"maxSalary" : 86000
}`;

let job = JSON.parse(jobAsString);
console.log(job.title);