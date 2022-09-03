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
  });
  if (value["id"]) console.log(out);
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
  console.log("in then fn: ", flat(value, {}));
});
timeTxt("at end of script");
