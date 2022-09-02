const contentLarge = document.querySelector(".content-large");
const contentClock = document.querySelector(".clock");
const contentSmall1 = document.querySelector(".content-small-1");

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
   data = await res.json();
	for (const key in data[1].address) {
		let txt = data[1].address[key]
    contentLarge.insertAdjacentHTML("beforeend", `<p>${key}: ${txt}<p>`);
	}
	return data;
}
const person = fetchUsers().then();
for (const key in person[1].address) {
	let txt = data[1].address[key];
	console.log(txt);
}
