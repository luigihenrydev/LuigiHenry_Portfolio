window.addEventListener('load', () => {
  const modal = document.getElementById('welcomeModal');
  const closeBtn = document.getElementById('closeModal');
  const jaViu = localStorage.getItem('modalJaVisto');
  
  if (!jaViu) {
    modal.classList.add('show');
  }

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    modal.classList.add('show');
});

 localStorage.setItem('modalJaVisto', 'true');
  });

const toggleButton = document.getElementById('darkModeToggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});