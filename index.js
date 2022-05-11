const shomenu = document.querySelector('.menu-bar');
function showMenu() {
  const link = document.querySelector('header nav .links');
  const toggle = document.querySelector('.open');
  const logo = document.querySelector('.logo a');

  if (link.style.display === 'block') {
    link.style.display = 'none';
    toggle.classList.remove('fa-times');
    toggle.classList.add('fa-bars');
    logo.style.display = 'block';
  } else {
    link.style.display = 'block';
    toggle.classList.remove('fa-bars');
    toggle.classList.add('fa-times');
    logo.style.display = 'none';
  }
}

shomenu.addEventListener('click', showMenu);

let overlay = document.querySelector(".overlay");

let buttonDisplay = document.querySelector(".project-btn");
function showOverlay(){
  overlay.style.transform = "scale(1)";
  overlay.classList.add("active");
  load_data();
}

buttonDisplay.addEventListener("click", showOverlay); 

let closeDisplay = document.querySelector('.overlay .fa');

function closeOverlay(){
  overlay.style.transform = "scale(0)";
};
closeDisplay.addEventListener("click", closeOverlay);

// overlay.addEventListener("click", closeOverlay);

var projectData = [{
  name: "School Website",
  description: "A website built and designed to hold personal and public data of a suburban primary and secondary school",
  featuredIimage: "image/Img_Placeholder.svgs",
  technologies: ["html","css", "tech", "bootstrap"],
  link: "live server",
  source: "source",
}, {
  name: "My Portfolio",
  description: "thie is my first project with javascript and html",
  featuredIimage: "" ,
  technologies: ["css", "bootsrtap", "javascript"],
  link: "www.emmykage",
  source: "www.github.com"
},{
  name: "My Portfolio",
  description: "thie is my first project with javascript and html",
  featuredIimage: "" ,
  technologies: ["css", "bootsrtap", "javascript"],
  link: "www.emmykage",
  source: "www.github.com"
}, {
  name: "My Portfolio",
  description: "thie is my first project with javascript and html",
  featuredIimage: "" ,
  technologies: ["css", "bootsrtap", "javascript"],
  link: "www.emmykage",
  source: "www.github.com"
},{
  name: "My Portfolio",
  description: "thie is my first project with javascript and html",
  featuredIimage: "" ,
  technologies: ["css", "bootsrtap", "javascript"],
  link: "www.emmykage",
  source: "www.github.com"
}, {
  name: "My Portfolio",
  description: "thie is my first project with javascript and html",
  featuredIimage: "" ,
  technologies: ["css", "bootsrtap", "javascript"],
  link: "www.emmykage",
  source: "www.github.com"
} 
]
function load_data(){
  document.getElementById("popup_title").innerText=projectData[0].name;
  document.getElementById("popup_language_first").innerText=projectData[0].technologies[0];
  document.getElementById("popup_language_second").innerText=projectData[0].technologies[1];
  document.getElementById("popup_language_third").innerText=projectData[0].technologies[2];
 /*  document.getElementById("popup_language_fourth").innerText=projectData[0].technologies[3]; */
  document.getElementById("popup_image").src=projectData[0].featuredIimage;
  document.getElementById("popup_description").innerText=projectData[0].description;

}

