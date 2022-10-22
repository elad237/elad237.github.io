const projectContainer = document.getElementById('work');
const popUp = document.getElementById('work-popup');
const btn = document.getElementById('Btn');
const projects = [
  {
    id: 1,
    name: 'Multi-Post Stories  Gain+Glory',
    projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',

    feauturedImage: 'img/imageplaceholder.png',
    feauturedImageMobile: 'url(\'img/mobileport.png\')',
    feauturedImageDeskTop: 'url(\'img/desktop.png\')',
    technologies: {
      backend: 'Ruby on rails',
      style: 'CSS',
      frontEnd: 'JavaScript',
      markUP: 'HTML',
    },
    linkToLiveVersion: 'https://elad237.github.io/',
    linkToSource: 'https://github.com/elad237/elad237.github.io',
  },

  {
    id: 2,
    name: 'Multi-Post Stories  Gain+Glory',
    projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    feauturedImage: 'img/imageplaceholder.png',
    feauturedImageMobile: 'url(\'img/mobileport.png\')',
    feauturedImageDeskTop: 'url(\'img/desktop.png\')',
    technologies: {
      backend: 'Ruby on rails',
      style: 'CSS',
      frontEnd: 'JavaScript',
      markUP: 'HTML',
    },
    linkToLiveVersion: 'https://elad237.github.io/',
    linkToSource: 'https://github.com/elad237/elad237.github.io',
  },

  {
    id: 3,
    name: 'Multi-Post Stories  Gain+Glory',
    projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    feauturedImage: 'img/imageplaceholder.png',
    feauturedImageMobile: 'url(\'img/mobileport.png\')',
    feauturedImageDeskTop: 'url(\'img/desktop.png\')',
    technologies: {
      backend: 'Ruby on rails',
      style: 'CSS',
      frontEnd: 'JavaScript',
      markUP: 'HTML',
    },
    linkToLiveVersion: 'https://elad237.github.io/',
    linkToSource: 'https://github.com/elad237/elad237.github.io',
  },

  {
    id: 4,
    name: 'Multi-Post Stories  Gain+Glory',
    projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    feauturedImage: 'img/imageplaceholder.png',
    feauturedImageMobile: 'url(\'img/mobileport.png\')',
    feauturedImageDeskTop: 'url(\'img/desktop.png\')',
    technologies: {
      backend: 'Ruby on rails',
      style: 'CSS',
      frontEnd: 'JavaScript',
      markUP: 'HTML',
    },
    linkToLiveVersion: 'https://twitter.com/Elad59380989',
    linkToSource: 'https://github.com/elad237/elad237.github.io',
  },

  {
    id: 5,
    name: 'Multi-Post Stories  Gain+Glory',
    projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    feauturedImage: 'img/imageplaceholder.png',
    feauturedImageMobile: 'url(\'img/mobileport.png\')',
    feauturedImageDeskTop: 'url(\'img/desktop.png\')',
    technologies: {
      backend: 'Ruby on rails',
      style: 'CSS',
      frontEnd: 'JavaScript',
      markUP: 'HTML',
    },
    linkToLiveVersion: 'https://elad237.github.io/',
    linkToSource: 'https://github.com/elad237/elad237.github.io',
  },

  {
    id: 6,
    name: 'Multi-Post Stories  Gain+Glory',
    projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    feauturedImage: 'img/imageplaceholder.png',
    feauturedImageMobile: 'url(\'img/mobileport.png\')',
    feauturedImageDeskTop: 'url(\'img/desktop.png\')',
    technologies: {
      backend: 'Ruby on rails',
      style: 'CSS',
      frontEnd: 'JavaScript',
      markUP: 'HTML',
    },
    linkToLiveVersion: 'https://elad237.github.io/',
    linkToSource: 'https://github.com/elad237/elad237.github.io',
  },

];

const generateTechnology = (object) => {
  let li = ''
  for(technology in object.technologies){
    li += `<li class="language"> ${object.technologies[technology]}</li>` 
  }

  return li;
}
const displayProjectCard = (object) => {
  const projectCard = ` <figure class="project-item">
  <img class="project-item-img" src=${object.feauturedImage} alt="image placeholder">
  <figcaption class="project-item-caption">
      <h3 class="project-item-title">${object.name}</h3>
      <ul class="project-item-stack">${generateTechnology(object)}</ul>
      <button class="project-item-btn" id="${object.id}">See project</button>
  </figcaption>
</figure>`
return projectCard;
};

const displayPopUp = (object) => {
  const popUp = `<div class="closebtn"><i class="fa fa-times" id="closeddds"></i></div>
  <section class="project1 project-text1" id="project1">
    <div
      class="featured-image-container"
      id="images"
      style="background-image: ${object.feauturedImageDeskTop}"
    ></div>
    <div class="project-title1" id="title1">
      <h4 class="project-name" id="project_name1">${object.name}</h4>
    </div>
    <div class="live-source" id="live">
      <a class="see-project" id="live-demo" href=${object.linkToLiveVersion}>
        See live<img src="img/liveDemo.svg" />
      </a>
      <a class="see-project" id="source" href=${object.linkToSource}>
        See Source <img src="img/gitIcon.png" />
      </a>
    </div>
    <ul class="langues-use" id="technologypopUp">${generateTechnology(object)}</ul>
    <p class="project-details" id="details">${object.projectDescription}</p>
  </section>
  `
return popUp;
};

projects.forEach((project) => {
  projectContainer.innerHTML += displayProjectCard(project);
})

projects.forEach((project) => {
  popUp.innerHTML = displayPopUp(project);
})

projectContainer.addEventListener('click', (e) => {
  if(e.target.classList.contains('project-item-btn')) {
    const filteredProject = projects.filter((project) => project.id == e.target.id)
    popUp.innerHTML = displayPopUp(filteredProject[0]);
    popUp.classList.remove('hidden');
    popUp.classList.add('show')
    
  }
});

popUp.addEventListener('click', (e) => {
  if(e.target.classList.contains('fa')) {
    popUp.classList.add('hidden')
  }
})