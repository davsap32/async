'use strict';
const contentLarge = document.querySelector(".content-large");
const contentClock = document.querySelector(".clock");
const contentSmall1 = document.querySelector(".content-small-1");
let date;
let dateTimeInMs;
async function fetchUsers() {
	date = new Date();

	dateTimeInMs = Math.floor(date.getTime());
	console.log('time in ms before wait call', dateTimeInMs);

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
	for (const key in data[1].address) {
		let txt = data[1].address[key];
    contentLarge.insertAdjacentHTML("beforeend", `<p>${key}: ${txt}<p>`);
	}
	date = new Date();
	dateTimeInMs = Math.floor(date.getTime());
	//console.log('time in ms at end of fetch fn', dateTimeInMS);
	return data;
}
fetchUsers().then(
	function(value){
	for (const key in value[1].address) {
		let txt = value[1].address[key];
		console.log(`${key}: ${txt}`);
	}
	
});
date = new Date();
dateTimeInMs = Math.floor(date.getTime() / 1000);
console.log('time in ms at end of script', dateTimeInMs);
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
