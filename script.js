// "use strict";
/** ************Selection of Elements*********** */
// Harburger-mobile view only Begins
const mainMenu = document.querySelector(".mainMenu");
const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");
const menuItems = document.querySelectorAll(".menu_Items");

/** ************Functions sections*********** */
function show() {
	mainMenu.style.display = "flex";
	mainMenu.style.top = "0";
}

function close() {
	mainMenu.style.top = "-100%";
}

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

// close menu when you click on a menu item
menuItems.forEach((item) => {
	item.addEventListener("click", () => {
		close();
	});
});
// Ends

/////////////////////////////////////////////////////////////////////////////////////////////
const bodyTag = document.querySelector("body");
const projectContainer = document.querySelector(".works");

// Objects and Array for Projects
// ===========Create project object for the top project
const topProjectObj = {
	title: "Multi-Post Stories",
	description:
		"A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.",
	image: "../images/1-image.png",
	technologies: ["CSS", "HTML", "Bootstrap", "Ruby"],
	dataset: 0,
};

//********** Create Project Array for other project********
const otherProjects = [
	{
		backgroundImgId: "card-1",
		title: "Profesional Art Printing Data",
		description:
			"A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		image: "../images/2-image.png",
		technologies: ["HTML", "Bootstrap", "Ruby"],
		dataset: 1,
	},
	{
		backgroundImgId: "card-2",
		title: "Data Dashboard Healthcare",
		description:
			"A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		image: "../images/3-image.png",
		technologies: ["HTML", "Bootstrap", "Ruby"],
		dataset: 2,
	},
	{
		backgroundImgId: "card-3",
		title: "WebSite Portfolio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
		description:
			"A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		image: "../images/4-image.png",
		technologies: ["HTML", "Bootstrap", "Ruby"],
		dataset: 3,
	},
	{
		backgroundImgId: "card-4",
		title: "Profesional Art Printing Data",
		description:
			"A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		image: "../images/2-image.png",
		technologies: ["HTML", "Bootstrap", "Ruby"],
		dataset: 4,
	},
	{
		backgroundImgId: "card-5",
		title: "Data Dashboard Healthcare",
		description:
			"A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		image: "../images/3-image.png",
		technologies: ["HTML", "Bootstrap", "Ruby"],
		dataset: 5,
	},
	{
		backgroundImgId: "card-6",
		title: "WebSite Portfolio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
		description:
			"A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		image: "../images/4-image.png",
		technologies: ["HTML", "Bootstrap", "Ruby"],
		dataset: 6,
	},
];

//***************Create Project Array for Popup************
const modalProjects = [
	{
		title: "Multi-Post Stories",
		description: `A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
		image: "../images/1-image.png",
		technologies: ["CSS", "HTML", "Bootstrap", "Ruby"],
		liveLink: "https://samueltakyiboateng.github.io/",
		sourceLink:
			"https://github.com/SamuelTakyiBoateng/Portfolio-RWD-desk_mob",
	},
	{
		title: "Profesional Art Printing Data",
		description: `A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
		image: "../images/2-image.png",
		technologies: ["HTML", "Bootstrap", "Ruby"],
		liveLink: "https://samueltakyiboateng.github.io/",
		sourceLink:
			"https://github.com/SamuelTakyiBoateng/Portfolio-RWD-desk_mob",
	},
	{
		title: "Data Dashboard Healthcare",
		description: `A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
		image: "../images/3-image.png",
		technologies: ["HTML", "Bootstrap", "Ruby"],
		liveLink: "https://samueltakyiboateng.github.io/",
		sourceLink:
			"https://github.com/SamuelTakyiBoateng/Portfolio-RWD-desk_mob",
	},
	{
		title: "WebSite Portfolio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
		description: `A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
		image: "../images/4-image.png",
		technologies: ["HTML", "Bootstrap", "Ruby"],
		liveLink: "https://samueltakyiboateng.github.io/",
		sourceLink:
			"https://github.com/SamuelTakyiBoateng/Portfolio-RWD-desk_mob",
	},
	{
		title: "Profesional Art Printing Data",
		description: `A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
		image: "../images/2-image.png",
		technologies: ["HTML", "Bootstrap", "Ruby"],
		liveLink: "https://samueltakyiboateng.github.io/",
		sourceLink:
			"https://github.com/SamuelTakyiBoateng/Portfolio-RWD-desk_mob",
	},
	{
		title: "Data Dashboard Healthcare",
		description: `A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
		image: "../images/3-image.png",
		technologies: ["HTML", "Bootstrap", "Ruby"],
		liveLink: "https://samueltakyiboateng.github.io/",
		sourceLink:
			"https://github.com/SamuelTakyiBoateng/Portfolio-RWD-desk_mob",
	},
	{
		title: "WebSite Portfolio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
		description: `A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
		image: "../images/4-image.png",
		technologies: ["HTML", "Bootstrap", "Ruby"],
		liveLink: "https://samueltakyiboateng.github.io/",
		sourceLink:
			"https://github.com/SamuelTakyiBoateng/Portfolio-RWD-desk_mob",
	},
];

///////******Functions Sections 2*******////////////
///Functionality: To create elements with tag & class name
const createElement = (tag, className) => {
	const el = document.createElement(tag);
	el.classList.add(className);
	return el;
};

//Functionality: To create specifically ul & li elements using a given array of items & class name of ul element
const createList = (items, className) => {
	const ul = createElement("ul", className);
	items.forEach((item) => {
		const li = createElement("li", `${className}-item`);
		li.innerText = item;
		ul.appendChild(li);
	});
	return ul;
};

//Functionality: To create specifically button elements using a given class name, id & test content of the button
const createButton = (className, dataset, text) => {
	const btn = createElement("button", className);
	btn.innerText = text;
	btn.setAttribute("data-projectbtn", dataset);
	return btn;
};



