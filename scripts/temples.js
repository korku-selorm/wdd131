const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});

/* getting years */
let currentYear = new Date().getFullYear();

document.getElementById('currentyear').textContent = currentYear

const lastModified = document.lastModified;

document.getElementById('lastModified').textContent = `Last Modified ${lastModified}`;