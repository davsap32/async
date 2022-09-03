"use strict";
const contentLarge = document.querySelector(".content-large");
const contentClock = document.querySelector(".clock");
const contentSmall1 = document.querySelector(".content-small-1");
let date;
let dateTimeInMs;
let persons = [];
const flat = (value, out) => {
  Object.keys(value).forEach((key) => {
    if (typeof value[key] == "object") {
      out = flat(value[key], out); //recursively call for nesteds
    } else {
      out[key] = value[key]; //direct assign for values
    }
  });
  if (value["id"]) {
    persons.push(Object.entries(out));
    //Object.keys(out).forEach((key) => {
    //  contentLarge.insertAdjacentHTML("beforeend", `<p>${key}: ${out[key]}<p>`);
  }
  return out;
};
const timeTxt = function (txt) {
  date = new Date();
  dateTimeInMs = Math.floor(date.getTime());
  console.log(`Time in ms ${txt}: ${dateTimeInMs}`);
};
async function fetchUsers() {
  timeTxt("before wait call");
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  timeTxt("at end of fetch fn");
  return data;
}
fetchUsers().then(function (value) {
  flat(value, {});
  console.log("in then fn:", persons);
  let id = parseInt(prompt("Person ID:"), 10);
  console.log("id=", id);
  persons[id - 1].forEach((el) => {
    contentLarge.insertAdjacentHTML("beforeend", `<p>${el[0]} : ${el[1]}</p>`);
  });
});
timeTxt("at end of script");
1;
