"use strict";

let job = {
  title: "Web Designer",
  startDate: new Date(),
  company: "AT&T",
  minSalary: 52000,
  maxSalary: 86000,
};

let jobAsString = JSON.stringify(job);
console.log(jobAsString);