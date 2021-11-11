const siteBody = document.body;
const icon = document.querySelector("img");
const colorMenu = document.querySelector("ul");
const listItem = document.querySelectorAll("li");
const backgroundText = document.querySelector("h1");

const showMenu = function () {
	colorMenu.classList.add("show");
};

const hideMenu = function () {
	colorMenu.classList.remove("show");
};

const changeBackground = function () {
	for (let i = 0; i < listItem.length; i++) {
		listItem[i].addEventListener("click", function () {
			const color = listItem[i].className;
			siteBody.className = color;

			backgroundText.innerHTML = listItem[i].innerHTML;

			hideMenu();
		});
	}
};

icon.addEventListener("mouseenter", showMenu);
icon.addEventListener("mouseleave", hideMenu);
colorMenu.addEventListener("mouseenter", showMenu);

colorMenu.addEventListener("click", changeBackground);
