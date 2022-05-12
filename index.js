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

const overlay = document.querySelector('.overlay');

// let buttonDisplay = document.querySelector(".project-btn");

// showOverlay();
// buttonDisplay.addEventListener("click", showOverlay);

const closeDisplay = document.querySelector('.overlay .fa');

function closeOverlay() {
  overlay.style.transform = 'scale(0)';
}
closeDisplay.addEventListener('click', closeOverlay);

// overlay.addEventListener("click", closeOverlay);

const projectData = [{
  name: 'School Website',
  description: 'A website built and designed to hold personal and public data of a suburban primary and secondary school',
  featuredIimage: 'image/Img_Placeholder.svg',
  technologies: ['html', 'css', 'tech', 'bootstrap'],
  link: 'live server',
  source: 'source',
}, {
  name: 'My Portfolio',
  description: 'thie is my first project with javascript and html',
  featuredIimage: 'image/Img_Placeholder_3.svg',
  technologies: ['css', 'bootsrtap', 'javascript'],
  link: 'www.emmykage',
  source: 'www.github.com',
}, {
  name: 'Retail website',
  description: 'thie is my first project with javascript and html',
  featuredIimage: 'image/Img_Placeholder_4.svg',
  technologies: ['css', 'bootsrtap', 'javascript'],
  link: 'www.emmykage',
  source: 'www.github.com',
}, {
  name: 'Real Estate',
  description: 'Real estate dipicts unit houses with descriptive captions',
  featuredIimage: 'image/Img_Placeholder_5.svg',
  technologies: ['css', 'bootsrtap', 'javascript'],
  link: 'www.emmykage',
  source: 'www.github.com',
}, {
  name: 'Agrocity',
  description: 'import and exports page website where buyers connect with local farmers to purchase food items',
  featuredIimage: 'image/Img_Placeholder_6.svg',
  technologies: ['css', 'bootsrtap', 'javascript'],
  link: 'www.emmykage',
  source: 'www.github.com',
}, {
  name: 'My Portfolio',
  description: 'loremx20 thie is my first project with javascript and html ',
  featuredIimage: 'image/Img_Placeholder_7.svg',
  technologies: ['css', 'bootsrtap', 'javascript'],
  link: 'www.emmykage',
  source: 'www.github.com',
}, {
  name: 'My Portfolio',
  description: 'loremx20 thie is my first project with javascript and html ',
  featuredIimage: 'image/Img_Placeholder_7.svg',
  technologies: ['css', 'bootsrtap', 'javascript'],
  link: 'www.emmykage',
  source: 'www.github.com',
},
];
function showOverlay(x = null) {
  if (x != null) {
    overlay.style.transform = 'scale(1)';
    overlay.classList.add('active');
    // loadData(x);
    document.getElementById('popupTitle').innerText = projectData[x].name;

    document.getElementById('popup_image').src = projectData[x].featuredIimage;
    document.getElementById('popup_description').innerText = projectData[x].description;
    document.querySelector('.overlay_live').href = projectData[x].link;
    let someInformation = '';
    projectData[x].techologies.forEach((element) => {
      someInformation += `<li>${element}"</li>`;
    });
    document.getElementBuId('ul_id').innerJHTML = someInformation;
  }
}showOverlay();