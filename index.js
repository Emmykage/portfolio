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

const closeDisplay = document.querySelector('.overlay .fa');

function closeOverlay() {
  overlay.style.transform = 'scale(0)';
}
closeDisplay.addEventListener('click', closeOverlay);

const projectData = [{
  name: 'School Website',
  description: 'A website built and designed to hold personal and public data of a suburban primary and secondary school Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
  featuredIimage: 'image/Img_Placeholder.svg',
  technologies: ['html', 'css', 'bootstrap'],
  link: 'emmykage.github.io',
  source: 'source',
}, {
  name: 'My Portfolio',
  description: 'thie is my first project with javascript and html Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
  featuredIimage: 'image/Img_Placeholder_3.svg',
  technologies: ['css', 'bootsrtap', 'javascript'],
  link: 'emmykage.github.io',
  source: 'www.github.com',
}, {
  name: 'Retail Store',
  description: 'first project with javascript and html Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
  featuredIimage: 'image/Img_Placeholder_4.svg',
  technologies: ['css', 'bootsrtap', 'javascript'],
  link: 'www.emmykage',
  source: 'www.github.com',
}, {
  name: 'Real Estate',
  description: 'Real estate dipicts unit houses with descriptive captions Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
  featuredIimage: 'image/Img_Placeholder_5.svg',
  technologies: ['css', 'bootsrtap', 'javascript'],
  link: 'www.emmykage',
  source: 'www.github.com',
}, {
  name: 'Agrocity',
  description: 'import and exports page website where buyers connect with local farmers to purchase food items Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
  featuredIimage: 'image/Img_Placeholder_6.svg',
  technologies: ['css', 'bootsrtap', 'javascript'],
  link: 'www.emmykage',
  source: 'www.github.com',
}, {
  name: 'Kwik-E Mart',
  description: 'loremx20 thie is my first project with javascript and html Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." ',
  featuredIimage: 'image/Img_Placeholder_7.svg',
  technologies: ['css', 'bootsrtap', 'javascript'],
  link: 'www.emmykage',
  source: 'www.github.com',
}, {
  name: 'Hospital',
  description: 'loremx20 first project with javascript and html Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." ',
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

// -------------form validation-----------

const form = document.getElementById('formId');
const email = document.getElementById('email');
const errormessage = document.getElementById('error');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (email.value !== email.value.toLowerCase()) {
    errormessage.style.display = 'block';
  } else {
    form.submit();
  }
});