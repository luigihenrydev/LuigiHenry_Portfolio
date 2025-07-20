window.addEventListener('load', () => {
  const modal = document.getElementById('welcomeModal');
  const closeBtn = document.getElementById('closeModal');

  modal.classList.add('show');

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
  });
});

const toggleButton = document.getElementById('darkModeToggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});