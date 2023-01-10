document.addEventListener('scroll', function() {
    let skills = document.querySelector('.skills');
    let projects = document.querySelector('.projects');
  
    if (isInViewport(skills)) {
      skills.classList.add('visible');
    }
  
    if (isInViewport(projects)) {
      projects.classList.add('visible');
    }
  });
  
  function isInViewport(el) {
    let rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  let skillBars = document.querySelectorAll('.skill-level');

skillBars.forEach(function(skill) {
  skill.style.width = skill.dataset.level;
});

let projectImages = document.querySelectorAll('.project img');

projectImages.forEach(function(image) {
  image.addEventListener('mouseover', function() {
    image.style.opacity = 0.7;
  });

  image.addEventListener('mouseout', function() {
    image.style.opacity = 1;
  });
});

  