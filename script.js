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

/// //////////////////////////////////////////////////////////////////////////////////////////
const bodyTag = document.querySelector("body");
const projectContainer = document.querySelector(".works");

// Objects and Array for Projects
// ===========Create project object for the top project
const topProjectObj = {
	title: "Multi-Post Stories",
	description:
		"A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.",
	image: "./images/1-image.png",
	technologies: ["CSS", "HTML", "Bootstrap", "Ruby"],
	dataset: 0,
};

//* ********* Create Project Array for other project********
const otherProjects = [
	{
		backgroundImgId: "card-1",
		title: "Profesional Art Printing Data",
		description:
			"A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		image: "./images/2-image.png",
		technologies: ["HTML", "Bootstrap", "Ruby"],
		dataset: 1,
	},
	{
		backgroundImgId: "card-2",
		title: "Data Dashboard Healthcare",
		description:
			"A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		image: "./images/3-image.png",
		technologies: ["HTML", "Bootstrap", "Ruby"],
		dataset: 2,
	},
	{
		backgroundImgId: "card-3",
		title: "WebSite Portfolio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
		description:
			"A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		image: "./images/4-image.png",
		technologies: ["HTML", "Bootstrap", "Ruby"],
		dataset: 3,
	},
	{
		backgroundImgId: "card-4",
		title: "Profesional Art Printing Data",
		description:
			"A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		image: "./images/2-image.png",
		technologies: ["HTML", "Bootstrap", "Ruby"],
		dataset: 4,
	},
	{
		backgroundImgId: "card-5",
		title: "Data Dashboard Healthcare",
		description:
			"A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		image: "./images/3-image.png",
		technologies: ["HTML", "Bootstrap", "Ruby"],
		dataset: 5,
	},
	{
		backgroundImgId: "card-6",
		title: "WebSite Portfolio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
		description:
			"A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		image: "./images/4-image.png",
		technologies: ["HTML", "Bootstrap", "Ruby"],
		dataset: 6,
	},
];

//* **************Create Project Array for Popup************
const modalProjects = [
	{
		title: "Multi-Post Stories",
		description: `A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
		image: "./images/Snapshoot Portfolio.jpg",
		technologies: ["CSS", "HTML", "Bootstrap", "Ruby"],
		liveLink: "https://samueltakyiboateng.github.io/",
		sourceLink:
			"https://github.com/SamuelTakyiBoateng/Portfolio-RWD-desk_mob",
	},
	{
		title: "Profesional Art Printing Data",
		description: `A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
		image: "./images/Snapshoot Portfolio.jpg",
		technologies: ["HTML", "Bootstrap", "Ruby"],
		liveLink: "https://samueltakyiboateng.github.io/",
		sourceLink:
			"https://github.com/SamuelTakyiBoateng/Portfolio-RWD-desk_mob",
	},
	{
		title: "Data Dashboard Healthcare",
		description: `A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
		image: "./images/Snapshoot Portfolio.jpg",
		technologies: ["HTML", "Bootstrap", "Ruby"],
		liveLink: "https://samueltakyiboateng.github.io/",
		sourceLink:
			"https://github.com/SamuelTakyiBoateng/Portfolio-RWD-desk_mob",
	},
	{
		title: "WebSite Portfolio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
		description: `A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
		image: "./images/Snapshoot Portfolio.jpg",
		technologies: ["HTML", "Bootstrap", "Ruby"],
		liveLink: "https://samueltakyiboateng.github.io/",
		sourceLink:
			"https://github.com/SamuelTakyiBoateng/Portfolio-RWD-desk_mob",
	},
	{
		title: "Profesional Art Printing Data",
		description: `A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
		image: "./images/Snapshoot Portfolio.jpg",
		technologies: ["HTML", "Bootstrap", "Ruby"],
		liveLink: "https://samueltakyiboateng.github.io/",
		sourceLink:
			"https://github.com/SamuelTakyiBoateng/Portfolio-RWD-desk_mob",
	},
	{
		title: "Data Dashboard Healthcare",
		description: `A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
		image: "./images/Snapshoot Portfolio.jpg",
		technologies: ["HTML", "Bootstrap", "Ruby"],
		liveLink: "https://samueltakyiboateng.github.io/",
		sourceLink:
			"https://github.com/SamuelTakyiBoateng/Portfolio-RWD-desk_mob",
	},
	{
		title: "WebSite Portfolio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
		description: `A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
		image: "./images/Snapshoot Portfolio.jpg",
		technologies: ["HTML", "Bootstrap", "Ruby"],
		liveLink: "https://samueltakyiboateng.github.io/",
		sourceLink:
			"https://github.com/SamuelTakyiBoateng/Portfolio-RWD-desk_mob",
	},
];

/// ////******Functions Sections 2*******////////////
/// Functionality: To create elements with tag & class name
const createElement = (tag, className) => {
	const el = document.createElement(tag);
	el.classList.add(className);
	return el;
};

// Functionality: To create ul & li elements using a given array of items & class name of ul element
const createList = (items, className) => {
	const ul = createElement("ul", className);
	items.forEach((item) => {
		const li = createElement("li", `${className}-item`);
		li.innerText = item;
		ul.appendChild(li);
	});
	return ul;
};

// Functionality: To create button elements using a given class name,id & test content of the button
const createButton = (className, dataset, text) => {
	const btn = createElement("button", className);
	btn.innerText = text;
	btn.setAttribute("data-projectbtn", dataset);
	return btn;
};

// Function Expressions to add top project
const createtopProjectCon = () => {
	const topProjectEl = createElement("div", "project1");

	const project1Image = createElement("div", "project1Image");
	topProjectEl.appendChild(project1Image);

	const image1 = createElement("img", "image1");
	image1.src = topProjectObj.image;
	project1Image.appendChild(image1);

	const project1Info = createElement("div", "project1Info");
	topProjectEl.appendChild(project1Info);

	const project1Title = createElement("h3", "project1Title");
	project1Title.innerHTML = topProjectObj.title;
	project1Info.appendChild(project1Title);

	const project1Description = createElement("p", "project1Description");
	project1Description.innerText = topProjectObj.description;
	project1Info.appendChild(project1Description);

	const project1Languages = createList(
		topProjectObj.technologies,
		"project1Languages"
	);
	project1Info.appendChild(project1Languages);

	const project1LinkBtn = createButton(
		"project-btn",
		topProjectObj.dataset,
		"See Project"
	);
	project1Info.appendChild(project1LinkBtn);

	return topProjectEl;
};

// Function Expressions to add topProject into index.html using the projectContainer div class.
const topProjectCon = createElement("div", "topProjectCon");
projectContainer.appendChild(topProjectCon);
topProjectCon.appendChild(createtopProjectCon());

// Function Expressions to add other projects
const createOtherProject = (otherProject) => {
	const otherProjectEl = createElement("div", "otherProject");
	otherProjectEl.id = otherProject.backgroundImgId;

	const otherProjectInfo = createElement("div", "otherProjectInfo");
	otherProjectEl.appendChild(otherProjectInfo);

	const otherProjectTitle = createElement("h3", "otherProjectTitle");
	otherProjectTitle.innerHTML = otherProject.title;
	otherProjectInfo.appendChild(otherProjectTitle);

	const otherProjectDescription = createElement(
		"p",
		"otherProjectDescription"
	);
	otherProjectDescription.innerText = otherProject.description;
	otherProjectInfo.appendChild(otherProjectDescription);

	const otherProjectLanguages = createList(
		otherProject.technologies,
		"otherProjectLanguages"
	);
	otherProjectInfo.appendChild(otherProjectLanguages);

	const otherProjectLink = createElement("div", "otherProjectLink");
	otherProjectEl.appendChild(otherProjectLink);

	const otherProjectLinkBtn = createButton(
		"project-btn",
		otherProject.dataset,
		"See Project"
	);
	otherProjectLink.appendChild(otherProjectLinkBtn);

	return otherProjectEl;
};

// Function Expressions to add into index.html using the projectContainer div class.
const otherProjectsCon = createElement("div", "otherProjectsCon");
projectContainer.appendChild(otherProjectsCon);
otherProjects.forEach((otherProject) => {
	otherProjectsCon.appendChild(createOtherProject(otherProject));
});

/** *********************Modal/Popup Section ********************************* */
function projectModal(e) {
	const docFragment = document.createDocumentFragment();
	const projectCardInfo =
		modalProjects[parseInt(e.target.dataset.projectbtn, 10)];

	const popupContainer = createElement("div", "popupContainer");

	const projectPopup = document.createElement("div");
	projectPopup.classList.add("projectPopup", "project-card");

	const popupHeader = createElement("div", "popupHeader");
	popupHeader.innerHTML = '<i class="uil uil-multiply" id="closeBtn"></i>';
	docFragment.appendChild(popupHeader);

	const popupTitle = createElement("h3", "popupTitle");
	popupTitle.innerHTML = projectCardInfo.title;
	popupHeader.appendChild(popupTitle);

	const popupLanguages = createList(
		projectCardInfo.technologies,
		"popupLanguages"
	);
	popupHeader.appendChild(popupLanguages);

	const popupBody = createElement("div", "popupBody");
	docFragment.appendChild(popupBody);

	const popupImgContainer = createElement("div", "popupImgContainer");
	popupBody.appendChild(popupImgContainer);

	const popupImg = createElement("img", "popupImg");
	popupImg.src = projectCardInfo.image;
	popupImgContainer.appendChild(popupImg);

	const popupTextContainer = createElement("div", "popupTextContainer");
	popupBody.appendChild(popupTextContainer);

	const popupDescription = createElement("p", "popupDescription");
	popupDescription.innerText = projectCardInfo.description;
	popupTextContainer.appendChild(popupDescription);

	const popupLinkContainer = createElement("div", "popupLinkContainer");
	popupTextContainer.appendChild(popupLinkContainer);

	const liveLink = createElement("a", "liveLink");
	liveLink.innerHTML = 'See live&nbsp;&nbsp;<i class="uil uil-export"></i>';
	liveLink.href = projectCardInfo.liveLink;
	popupLinkContainer.appendChild(liveLink);

	const sourceLink = createElement("a", "sourceLink");
	sourceLink.innerHTML =
		'See source&nbsp;&nbsp;<i class="uil uil-github"></i>';
	sourceLink.href = projectCardInfo.sourceLink;
	popupLinkContainer.appendChild(sourceLink);

	projectPopup.appendChild(docFragment);
	popupContainer.appendChild(projectPopup);
	bodyTag.appendChild(popupContainer);

	document.getElementById("portfolio").style.filter = "blur(10px)";
	projectContainer.style.filter = "blur(10px)";
	document.querySelector(".headline").style.filter = "blur(10px)";
	document.getElementById("about-me").style.filter = "blur(10px)";

	const closeBtn = document.getElementById("closeBtn");
	closeBtn.addEventListener("click", () => {
		bodyTag.removeChild(popupContainer);
		document.getElementById("portfolio").style.filter = "blur(0)";
		projectContainer.style.filter = "blur(0)";
		document.querySelector(".headline").style.filter = "blur(0)";
		document.getElementById("about-me").style.filter = "blur(0)";
	});
}

const projectsBtn = document.querySelectorAll(".project-btn");
projectsBtn.forEach((btn) => btn.addEventListener("click", projectModal));

/// ////////////////////////////////////////////////////////////////////////////////////////////
//* *******************Form Validation Section****************************//
const form = document.getElementById("form");
const email = document.getElementById("email");
const errorMessage = document.querySelector(".errorMessage");

form.addEventListener("submit", (e) => {
	if (email.value !== email.value.toLowerCase()) {
		e.preventDefault();
		errorMessage.textContent = "Your email input must be in lowercases!";
	} else {
		errorMessage.textContent = "";
	}
});

//******************Local Storage *********************//
const formInputs = document.querySelectorAll(".form-input");

const formInputsArr = Array.from(formInputs);

const formStorage = {
	firstname: "",
	lastname: "",
	email: "",
	opinion: "",
};

function loadLocalStorage() {
	const formStr = localStorage.getItem("formData");
	if (formStr) {
		const formData = JSON.parse(formStr);
		formInputsArr.forEach((formInput) => {
			formInput.value = formData[formInput.attributes.name.value];
		});
	}
}
formInputsArr.forEach((formInput) => {
	formInput.addEventListener("keyup", (e) => {
		const input = e.target.attributes.name.value;
		formStorage[input] = e.target.value;
		const formStorageStr = JSON.stringify(formStorage);
		localStorage.setItem("formData", formStorageStr);
	});
});

window.addEventListener("load", loadLocalStorage);
