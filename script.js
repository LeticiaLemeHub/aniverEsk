// Evento que dispara quando o mouse passa por cima do cartão
document.querySelector('.birthdayCard').addEventListener('mouseenter', function() {
    for (let i = 0; i < 30; i++) {  // Gerar 30 confetes
      criarConfete();
    }
  });
  
  // Função para criar os confetes
  function criarConfete() {
    const confete = document.createElement('div');
    confete.classList.add('confete');
    
    // Define posições aleatórias para os confetes
    const posX = Math.random() * window.innerWidth;
    const posDelay = Math.random() * 2;  // Um atraso aleatório para cada confete
  
    confete.style.left = `${posX}px`;
    confete.style.animationDelay = `${posDelay}s`;
  
    document.body.appendChild(confete);
  
    // Remove o confete após ele terminar a animação
    setTimeout(() => {
      confete.remove();
    }, 2000);
  }
  