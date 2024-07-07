let projectsHTML = '';

projects.forEach((project) => {
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
});
document.querySelector('.js-work-list').innerHTML = projectsHTML;