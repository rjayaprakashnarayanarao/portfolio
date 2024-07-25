let projectsToShow = 3; // initial number of projects to show
let currentProjects = 0; // keep track of current projects shown
let seeMoreBtn = document.querySelector('.js-see-more');

function renderProjects(projects) {
  let projectsHTML = '';
  projects.forEach((project, index) => {
    if (index < projectsToShow) {
      projectsHTML += `
        <div class="work">
          <img src="${project.image}" alt="img">
          <div class="layer">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <div class="link-container">
              <a href="${project.link}" target="_blank"><i class="fa-solid fa-link"></i></a>
              <a href="${project.gitLink}" target="_blank"><i class="fa-brands fa-github"></i></a>
            </div>
          </div>
        </div>
      `;
      currentProjects++;
    }
  });
  document.querySelector('.js-work-list').innerHTML = projectsHTML;
}

renderProjects(projects);

seeMoreBtn.addEventListener('click', () => {
  if (seeMoreBtn.textContent === 'See More') {
    projectsToShow += 3; // increment by 3 projects
    currentProjects = 0;
    renderProjects(projects);
    if (currentProjects >= projects.length) {
      seeMoreBtn.textContent = 'Show Less';
    }
  } else {
    projectsToShow = 3;
    currentProjects = 0;
    renderProjects(projects);
    seeMoreBtn.textContent = 'See More';
    document.querySelector('.js-my-work').scrollIntoView({ behavior: 'smooth' });
  }
});