// ---------- Scroll to Section ----------
function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

// ---------- Animate Skills ----------
const skills = document.querySelectorAll('.skill-progress');
window.addEventListener('scroll', () => {
  skills.forEach(skill => {
    const sectionTop = skill.parentElement.parentElement.offsetTop;
    if(window.scrollY + window.innerHeight > sectionTop + 50){
      skill.style.width = skill.dataset.width;
    }
  });
});

// ---------- Generate Particles ----------
const particlesContainer = document.getElementById('particles');
for(let i=0;i<50;i++){
  const particle = document.createElement('div');
  particle.classList.add('particle');
  particle.style.top = Math.random()*100 + '%';
  particle.style.left = Math.random()*100 + '%';
  particle.style.width = particle.style.height = Math.random()*4 + 2 + 'px';
  particlesContainer.appendChild(particle);
}

// ---------- Arc Reactor Cursor ----------
const arcCursor = document.createElement('div');
arcCursor.id = 'arc-cursor';
document.body.appendChild(arcCursor);

document.addEventListener('mousemove', e => {
  arcCursor.style.left = e.clientX + 'px';
  arcCursor.style.top = e.clientY + 'px';
});
