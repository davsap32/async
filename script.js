"use strict";
const contentLarge = document.querySelector(".content-large");
const contentClock = document.querySelector(".clock");
const contentSmall1 = document.querySelector(".content-small-1");
let date;
let dateTimeInMs;
const flat = (value, out) => {
  Object.keys(value).forEach((key) => {
    if (typeof value[key] == "object") {
      out = flat(value[key], out); //recursively call for nesteds
    } else {
      out[key] = value[key]; //direct assign for values
    }
    console.log(out);
  });
  return out;
};
const timeTxt = function (txt) {
  date = new Date();
  dateTimeInMs = Math.floor(date.getTime());
  console.log(`Time in ms ${txt}: ${dateTimeInMs}`);
};
async function fetchUsers() {
  //date = new Date();

  //dateTimeInMs = Math.floor(date.getTime());
  //console.log("time in ms before wait call", dateTimeInMs);
  timeTxt("before wait call");
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  for (const key in data[1].address) {
    let txt = data[1].address[key];
    contentLarge.insertAdjacentHTML("beforeend", `<p>${key}: ${txt}<p>`);
  }
  timeTxt("at end of fetch fn");
  return data;
}
fetchUsers().then(function (value) {
  for (const key in value[1].address) {
    let txt = value[1].address[key];
    console.log(`${key}: ${txt}`);
  }
  const out = {};
  const flattened = flat(value, out);
});
timeTxt("at end of script");
/*
async function myFunction() {
  return "Hello";
}
myFunction().then(
  function(value) {myDisplayer(value);} 
	);
	
	flatmapdeep
	
	const _ = require("lodash");

const familyTree = [
  // ...
];

const getMembers = (member)=>{
  if(!member.children || !member.children.length){
    return member;
  }
  return [member, _.flatMapDeep(member.children, getMembers)];
}

_.flatMapDeep(familyTree, getMembers);
We pass getMembers as second argument of _.flatMapDeep. This method returns the member with no children, else returns a new array with the member, and the result of recursively called _.flatMapDeep.
	
*/
