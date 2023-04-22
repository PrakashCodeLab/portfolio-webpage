const humburger = document.querySelector('.header__Hamburger');
const MobileNavbar = document.querySelector('.header__navbar');
const hamburgerLine = document.querySelectorAll('.Hamburger__line');
const body = document.querySelector('.body__container');
const yearCopyright=document.querySelector('.year__copyright');

const year=new Date();

const currentYear=year.getFullYear();

yearCopyright.innerText=currentYear;


humburger.addEventListener('click', () => {
	MobileNavbar.classList.toggle('mobile__navbar');
	hamburgerLine.forEach((line) => {
		line.classList.toggle('Hamburger__line__active');
		body.classList.toggle('navbar-open');
	})
});
const projectDetails = [{
	projectTitle: "calculator",
	projectLink: "",
	projectDes: "lorem oporteat sale euismod vestibulum nec rhoncus suscipit novum legimus invidunt viderer ad sem deterruisset populo velit civibus elitr optionnullam finibus elitr tempus gubergren",
	img: "img/Laptop_002.jpg",
}, {
	projectTitle: "calculator",
	projectLink: "",
	projectDes: "lorem oporteat sale euismod vestibulum nec rhoncus suscipit novum legimus invidunt viderer ad sem deterruisset populo velit civibus elitr optionnullam finibus elitr tempus gubergren",
	img: "img/Laptop_002.jpg",
}, {
	projectTitle: "calculator",
	projectLink: "",
	projectDes: "lorem oporteat sale euismod vestibulum nec rhoncus suscipit novum legimus invidunt viderer ad sem deterruisset populo velit civibus elitr optionnullam finibus elitr tempus gubergren",
	img: "img/Laptop_002.jpg",
}, {
	projectTitle: "calculator",
	projectLink: "",
	projectDes: "lorem oporteat sale euismod vestibulum nec rhoncus suscipit novum legimus invidunt viderer ad sem deterruisset populo velit civibus elitr optionnullam finibus elitr tempus gubergren",
	img: "img/Laptop_002.jpg",
}, {
	projectTitle: "calculator",
	projectLink: "",
	projectDes: "lorem oporteat sale euismod vestibulum nec rhoncus suscipit novum legimus invidunt viderer ad sem deterruisset populo velit civibus elitr optionnullam finibus elitr tempus gubergren",
	img: "img/Laptop_002.jpg",
}, {
	projectTitle: "calculator",
	projectLink: "",
	projectDes: "lorem oporteat sale euismod vestibulum nec rhoncus suscipit novum legimus invidunt viderer ad sem deterruisset populo velit civibus elitr optionnullam finibus elitr tempus gubergren",
	img: "img/Laptop_002.jpg",
}, ]
const sectionProject = document.querySelector('.project__section__body');
sectionProject.innerHTML = projectDetails.map((x) => {
	let projectBox = `<div class="project__section__one">
       <img src=${x.img} alt="project"></img>
        
         <h3>${x.projectTitle}</h3>
         
         <p>${x.projectDes}</p>
         
         <button class="btn btn__casestudy">case study</button>
         
 </div>`
	return projectBox;
}).join('');
