document.querySelector('.birthdayCard').addEventListener('mouseenter', function() {
  for (let i = 0; i < 30; i++) { 
    criarConfete();
  }
});

function criarConfete() {
  const confete = document.createElement('div');
  confete.classList.add('confete');
  

  const posX = Math.random() * window.innerWidth;
  const posDelay = Math.random() * 2; 

  confete.style.left = `${posX}px`;
  confete.style.animationDelay = `${posDelay}s`;

  document.body.appendChild(confete);

  setTimeout(() => {
    confete.remove();
  }, 2000);
}
