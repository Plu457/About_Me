document.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme');

  if (!theme) localStorage.setItem('theme', 'light');

  document.body.classList.toggle('dark', theme === 'dark');
  document
    .querySelector('#toggle-button')
    .classList.toggle('dark', theme === 'dark');

  setTimeout(() => {
    document.body.style.visibility = 'visible';
  }, 500);
});

document.querySelector('#toggle-button').onclick = () => {
  const theme = localStorage.getItem('theme');

  localStorage.setItem('theme', `${theme === 'dark' ? 'light' : 'dark'}`);

  document.body.classList.toggle('dark');
  document
    .querySelector('#toggle-button')
    .classList.toggle('dark', theme !== 'dark');
};
