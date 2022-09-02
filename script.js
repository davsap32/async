const contentLarge = document.querySelector(".content-large");
const contentClock = document.querySelector(".clock");
const contentSmall1 = document.querySelector(".content-small-1");

async function fetchUsers(data) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
   data = await res.json();
  console.log(data[1].address.city);
	for (const key in data[1].address) {
    contentLarge.insertAdjacentHTML("beforeend", `${key}: ${data[1].address[key]}`);
	}
	contentLarge.textContent = data[1].address.city;
}
fetchUsers();

