const hamburger = document.querySelector('.bars');
const overlay = document.querySelector('.open');
const cancel = document.querySelector('.close');

hamburger.addEventListener('click', () => {
    overlay.style.display = 'block';
  });
  
  cancel.addEventListener('click', () => {
    overlay.style.display = 'none';
  });