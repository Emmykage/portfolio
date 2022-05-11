var projectData = [{
    name: "School Website",
    description: "A desc website built and designed to hold personal and public data of a suburban primary and secondary school",
    featuredIimage: "image/Img_Placeholder.svg",
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

const modal = document.querySelector(".overlay");


/* const modalOpen = (num = null) => {
    if (num != null) {
      const langs = projects[num].languages;
      let showLangs = '';
  
      langs.forEach((item) => { showLangs += `<li>${item}</li>`; });
  
      document.querySelector('.overlay_title').innerHTML = projectData[num].name;
      document.querySelector('.hero-img').src = projectData[num].image;
      document.querySelector('.overlay_description').innerHTML = projectData[num].description;
      document.querySelector('.overlay-link').innerHTML = showLangs;
      document.querySelector('.overlay_live').href = projectData[num].link;
      document.querySelector('.overlay_source').href = projectData[num].source;
  
      modal.style.display = 'flex';
  
      setTimeout(() => {
        modal.classList.remove('modal_hide');
        modal.classList.add('modal_show');
      }, 100);
    }
  }; */
  


// const changeModal = document.querySelector(".overlay");
// for(let i = 0; i<projectData.length; i++){

//     const fetch = document.querySelector(".overlay").innerHTML;

//     const img_num = i % 2 === 0 ? "forth_img" : "third_img";
//     const card_num = i % 2 === 0 ? "forth_card" : "third_img";

//     changeModal.innerHTML = `
    
    
//     `
   
// }

/* Popup Code */

function load_data(){
    document.getElementById("popup_title").innerText=projectData[0].name;
    document.getElementById("popup_language_first").innerText=projectData[0].technologies[0];
    document.getElementById("popup_language_second").innerText=projectData[0].technologies[1];
    document.getElementById("popup_language_third").innerText=projectData[0].technologies[2];
    document.getElementById("popup_language_fourth").innerText=projectData[0].technologies[3];
    document.getElementById("popup_image").innerText=projectData[0].featuredIimage;
    document.getElementById("popup_description").innerText=projectData[0].description;

}


console.log(load_data());