window.addEventListener('load', () => {
  const modal = document.getElementById('welcomeModal');
  const closeBtn = document.getElementById('closeModal');
  const jaViu = localStorage.getItem('modalJaVisto');
  
  if (!jaViu) {
    modal.classList.add('show');
  }

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
});

 localStorage.setItem('modalJaVisto', 'true');
  });

const toggleButton = document.getElementById('darkModeToggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

const btnTopo = document.getElementById('btnTopo');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    btnTopo.style.display = 'block';
  } else {
    btnTopo.style.display = 'none';
  }
});

btnTopo.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

ScrollReveal().reveal('.reveal', {
  origin: 'bottom',
  distance: '50px',
  duration: 1200,
  delay: 150,
  easing: 'ease-in-out',
  reset: false
});