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
  featuredIimage: "image/Img_Placeholder.svg",
  technologies: ["tech", "bootstrap"],
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
  name: "JOB for a bank",
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
} , {
  name: "My Portfolio",
  description: "thie is my first project with javascript and html",
  featuredIimage: "" ,
  technologies: ["css", "bootsrtap", "javascript"],
  link: "www.emmykage",
  source: "www.github.com"
} 
]


function getdisplay(){ 
  let html = `
<div class="item work-item-3 no-btn box">
<h3>Profesional Art Printing Data</h3>
<p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard</p>
<ul>
    <li><a href="#">css</a></li>
    <li> <a href="#">html</a></li>
    <li> <a href="#">Bootstrap</a></li>
    <li> <a href="#">Ruby</a></li>
</ul>
<button class="project-btn" type="button" id="btn-3">See Project</button>

</div>

`



}
console.log(getdisplay());

//  document.getElementById()


